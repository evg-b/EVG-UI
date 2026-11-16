import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Parser, type ParserOptions } from 'react-docgen-typescript'
import ts from 'typescript'

import type {
  PropDocPatient,
  PropDocProperty
} from '../docsite/src/components/PropDoc/PropDoc.types'

const rootDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDirectory = resolve(rootDirectory, 'src')
const componentsDirectory = resolve(sourceDirectory, 'components')
const entryPath = resolve(sourceDirectory, 'index.ts')
const outputPath = resolve(rootDirectory, 'docsite/Example/ApiDoc/APIs.json')

const isInside = (directory: string, filePath: string) => {
  const path = relative(directory, filePath)
  return !isAbsolute(path) && path.split(sep)[0] !== '..'
}

const unwrapExpression = (node: ts.Node): ts.Node => {
  while (
    node &&
    (ts.isParenthesizedExpression(node) ||
      ts.isAsExpression(node) ||
      ts.isSatisfiesExpression(node))
  ) {
    node = node.expression
  }
  return node
}

const getLineComment = (declaration: ts.Declaration) => {
  const node =
    ts.isVariableDeclaration(declaration) &&
    ts.isVariableStatement(declaration.parent.parent)
      ? declaration.parent.parent
      : declaration
  const source = node.getSourceFile()
  const comments =
    ts.getLeadingCommentRanges(source.text, node.getFullStart()) || []

  return comments
    .filter(({ kind }) => kind === ts.SyntaxKind.SingleLineCommentTrivia)
    .map(({ pos, end }) => source.text.slice(pos + 2, end).trim())
    .join('\n')
}

class PropsParser extends Parser {
  private readonly typeChecker: ts.TypeChecker

  constructor(program: ts.Program, options: ParserOptions) {
    super(program, options)
    this.typeChecker = program.getTypeChecker()
  }

  getFullJsDocComment(symbol: ts.Symbol) {
    const comment = super.getFullJsDocComment(symbol)
    if (comment.fullComment) return comment

    const description = (symbol.getDeclarations() || [])
      .map(getLineComment)
      .find(Boolean)

    return description
      ? { ...comment, description, fullComment: description }
      : comment
  }

  getDefaultValue(
    expression: ts.Expression,
    visited = new Set<ts.Symbol>()
  ): string {
    const node = unwrapExpression(expression)

    if (ts.isIdentifier(node)) {
      let symbol = this.typeChecker.getSymbolAtLocation(node)
      if (symbol && symbol.flags & ts.SymbolFlags.Alias) {
        symbol = this.typeChecker.getAliasedSymbol(symbol)
      }

      const declaration = symbol?.valueDeclaration
      if (
        symbol &&
        declaration &&
        ts.isVariableDeclaration(declaration) &&
        declaration.parent.flags & ts.NodeFlags.Const &&
        declaration.initializer &&
        !visited.has(symbol)
      ) {
        visited.add(symbol)
        return this.getDefaultValue(declaration.initializer, visited)
      }
    }

    // Expressions are displayed as source code; documentation never executes them.
    return node.getText()
  }

  getParameterDefaults(
    parameter?: ts.ParameterDeclaration
  ): Record<string, string> {
    if (!parameter || !ts.isObjectBindingPattern(parameter.name)) return {}

    return Object.fromEntries(
      parameter.name.elements.flatMap((element) => {
        if (!element.initializer || element.dotDotDotToken) return []
        const name = element.propertyName || element.name
        if (!ts.isIdentifier(name) && !ts.isStringLiteral(name)) return []

        return [[name.text, this.getDefaultValue(element.initializer)]]
      })
    )
  }

  extractDefaultPropsFromComponent(symbol: ts.Symbol) {
    const declaration = symbol.valueDeclaration
    if (!declaration) return {}

    const expression = ts.isVariableDeclaration(declaration)
      ? declaration.initializer
      : declaration
    if (!expression) return {}
    const implementation = unwrapExpression(expression)

    const parameter = ts.isFunctionLike(implementation)
      ? implementation.parameters[0]
      : undefined
    const propsSymbol =
      parameter && ts.isIdentifier(parameter.name)
        ? this.typeChecker.getSymbolAtLocation(parameter.name)
        : undefined
    const defaults: Record<string, string> = {}

    const isPropsArgument = (argument: ts.Expression): boolean => {
      if (ts.isPropertyAccessExpression(argument)) {
        return (
          argument.expression.kind === ts.SyntaxKind.ThisKeyword &&
          argument.name.text === 'props'
        )
      }

      return (
        !!propsSymbol &&
        ts.isIdentifier(argument) &&
        this.typeChecker.getSymbolAtLocation(argument) === propsSymbol
      )
    }

    const visit = (node: ts.Node): void => {
      if (
        ts.isCallExpression(node) &&
        node.arguments.length &&
        isPropsArgument(node.arguments[0])
      ) {
        const helper = this.typeChecker.getResolvedSignature(node)?.declaration
        if (
          helper &&
          isInside(sourceDirectory, helper.getSourceFile().fileName)
        ) {
          Object.assign(
            defaults,
            this.getParameterDefaults(helper.parameters[0])
          )
        }
      }

      ts.forEachChild(node, visit)
    }

    // Includes defaults in helpers called with props, such as getCubesOptions(this.props).
    visit(implementation)
    return { ...defaults, ...this.getParameterDefaults(parameter) }
  }
}

const configPath = resolve(rootDirectory, 'tsconfig.json')
const config = ts.readConfigFile(configPath, ts.sys.readFile)
if (config.error) {
  throw new Error(
    ts.flattenDiagnosticMessageText(config.error.messageText, '\n')
  )
}

const parsedConfig = ts.parseJsonConfigFileContent(
  config.config,
  ts.sys,
  rootDirectory
)
if (parsedConfig.errors.length) {
  throw new Error(
    parsedConfig.errors
      .map(({ messageText }) =>
        ts.flattenDiagnosticMessageText(messageText, '\n')
      )
      .join('\n')
  )
}

const program = ts.createProgram([entryPath], parsedConfig.options)
const checker = program.getTypeChecker()
const entry = program.getSourceFile(entryPath)
const entrySymbol = entry && checker.getSymbolAtLocation(entry)
if (!entrySymbol)
  throw new Error('Cannot read public exports from src/index.ts')

const parser = new PropsParser(program, {
  shouldRemoveUndefinedFromOptional: true,
  skipChildrenPropWithoutDoc: false,
  propFilter: (prop) => {
    const declarations = prop.declarations || (prop.parent ? [prop.parent] : [])
    return (
      !declarations.length ||
      declarations.some(({ fileName }) => isInside(sourceDirectory, fileName))
    )
  }
})

const metadata: Record<string, PropDocPatient> = {}
const publicExports = checker
  .getExportsOfModule(entrySymbol)
  .sort((left, right) => left.name.localeCompare(right.name, 'en'))

for (const exportedSymbol of publicExports) {
  const symbol =
    exportedSymbol.flags & ts.SymbolFlags.Alias
      ? checker.getAliasedSymbol(exportedSymbol)
      : exportedSymbol
  const declaration = symbol.valueDeclaration
  if (!declaration) continue

  const source = declaration.getSourceFile()
  if (
    !isInside(componentsDirectory, source.fileName) ||
    source.isDeclarationFile
  ) {
    continue
  }

  const name = exportedSymbol.name
  const component = parser.getComponentInfo(symbol, source, () => name)
  if (!component)
    throw new Error(`Cannot extract props for ${name} (${source.fileName})`)

  metadata[name] = {
    displayName: name,
    description: component.description,
    props: Object.fromEntries(
      Object.entries(component.props).map(([propName, prop]) => {
        const property: PropDocProperty = {
          type: { name: prop.type.raw || prop.type.name },
          required: prop.required,
          description: prop.description
        }

        if (prop.defaultValue != null) {
          property.defaultValue = { value: String(prop.defaultValue.value) }
        }

        return [propName, property]
      })
    )
  }
}

if (!Object.keys(metadata).length) throw new Error('No public components found')

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, `${JSON.stringify(metadata, null, 2)}\n`)
console.log(
  `Generated props documentation for ${Object.keys(metadata).length} components`
)
