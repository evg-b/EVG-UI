import { useState, useEffect, useRef } from 'react'

import {
  IconButton,
  Scroll,
  Tooltip,
  Loader,
  useMergedRefs,
  Icon
} from '@evg-b/evg-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import SyntaxStyle from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia'

import type { CodeExampleProps } from './CodeExample.types'

import * as Styled from './CodeExample.styled'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)

const CodeExample = ({
  ref,
  className,
  children,
  title = 'Title',
  demo,
  snippet = '',
  language = 'tsx',
  ...otherProps
}: CodeExampleProps) => {
  const CodeExample_ref = useRef<HTMLDivElement>(null)
  const mergedRef = useMergedRefs(CodeExample_ref, ref)
  const [openCode, setOpenCode] = useState(false)
  const [selectedFile, setSelectedFile] = useState('')
  const files = typeof snippet === 'string' ? [] : Object.keys(snippet)
  const file = files.includes(selectedFile) ? selectedFile : files[0]
  const source = typeof snippet === 'string' ? snippet : snippet[file] ?? ''
  const [mountNode, setMountNode] = useState(false)
  const Syntax_ref = useRef<HTMLElement>(null)
  const btnCode_ref = useRef<HTMLElement>(null)

  const snippetPanel = () => (
    <Styled.CodePanel>
      {files.length > 1 && (
        <Styled.FilePicker>
          Файл примера
          <select
            value={file}
            onChange={(event) => setSelectedFile(event.target.value)}>
            {files.map((path) => (
              <option key={path}>{path}</option>
            ))}
          </select>
        </Styled.FilePicker>
      )}
      <Styled.CodeScroll
        as={Scroll}
        autoHide={false}
        ref={Syntax_ref}
        color="#FFFFFF">
        <Styled.SourceCode
          as={SyntaxHighlighter}
          language={file?.endsWith('.ts') ? 'typescript' : language}
          style={SyntaxStyle}
          customStyle={Styled.sourceCodeStyle}>
          {source.trim()}
        </Styled.SourceCode>
      </Styled.CodeScroll>
    </Styled.CodePanel>
  )

  useEffect(() => {
    const node = CodeExample_ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setMountNode(true)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return (
    <Styled.Root ref={mergedRef} {...otherProps} className={className}>
      <Styled.Header>
        <Styled.HeaderLeft>{title}</Styled.HeaderLeft>
        <Styled.HeaderRight>
          <IconButton
            ref={btnCode_ref}
            aria-label={openCode ? 'Скрыть код' : 'Показать код'}
            aria-expanded={openCode}
            onClick={() => setOpenCode((prev) => !prev)}
            color={openCode ? 'primary' : 'default'}>
            <Icon name="Code" />
          </IconButton>
          <Tooltip target={btnCode_ref}>
            {openCode ? 'Скрыть код' : 'Показать код'}
          </Tooltip>
        </Styled.HeaderRight>
      </Styled.Header>
      <Styled.Body>
        <Styled.DemoPanel>
          {mountNode ? demo : <Loader color="primary" />}
        </Styled.DemoPanel>
      </Styled.Body>
      {openCode && snippetPanel()}
    </Styled.Root>
  )
}

CodeExample.displayName = 'CodeExampleEVG'
export default CodeExample
