import { useState, useEffect, useRef } from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import SyntaxStyle from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia'

import IconButton from '../IconButton/IconButton'
import Scroll from '../Scroll/Scroll'
import Tooltip from '../Tooltip/Tooltip'
import { Code, Visibility } from '../internal/icons/CodeExample'

import type { CodeExampleProps } from './CodeExample.types'

import * as Styled from './CodeExample.styled'

const CodeExample = ({
  ref,
  className,
  children,
  title = 'Title',
  demo,
  snippet = '',
  language = 'jsx',
  ...otherProps
}: CodeExampleProps) => {
  const [indexPanel, setIndexPanel] = useState(0) // const [heightScroll, setHeightScroll] = useState(0)

  const Syntax_ref = useRef<HTMLElement>(null)
  const btnVisib_ref = useRef<HTMLElement>(null)
  const btnCode_ref = useRef<HTMLElement>(null) // const limitScrollHeight = 500
  // useEffect(() => {
  //     let sHeight = Syntax_ref.current.scrollHeight
  //     sHeight < limitScrollHeight ? setHeightScroll(sHeight) : setHeightScroll(limitScrollHeight)
  // }, [indexPanel])

  const demoPanel = (demo) => (
    <Styled.DemoPanel $visible={Boolean(indexPanel === 0)}>
      <Styled.DemoContent>{demo}</Styled.DemoContent>
    </Styled.DemoPanel>
  )

  const snippetPanel = (snippet) => (
    <Styled.CodePanel $visible={Boolean(indexPanel === 1)}>
      <Styled.CodeScroll
        as={Scroll}
        autoHide={false}
        ref={Syntax_ref}
        color="#FFFFFF">
        <Styled.SourceCode
          as={SyntaxHighlighter}
          language="jsx"
          style={SyntaxStyle}
          customStyle={Styled.sourceCodeStyle}>
          {snippet.trim()}
        </Styled.SourceCode>
      </Styled.CodeScroll>
    </Styled.CodePanel>
  )

  return (
    <Styled.Root ref={ref} {...otherProps} className={className}>
      <Styled.Header>
        <Styled.HeaderLeft>{title}</Styled.HeaderLeft>
        <Styled.HeaderRight>
          <IconButton
            ref={btnVisib_ref}
            onClick={() => setIndexPanel(0)}
            color={indexPanel === 0 ? '--ifm-color-primary' : 'default'}>
            <Visibility />
          </IconButton>
          <IconButton
            ref={btnCode_ref}
            onClick={() => setIndexPanel(1)}
            color={indexPanel === 1 ? '--ifm-color-primary' : 'default'}>
            <Code />
          </IconButton>
          <Tooltip target={btnVisib_ref}>demo</Tooltip>
          <Tooltip target={btnCode_ref}>code</Tooltip>
        </Styled.HeaderRight>
      </Styled.Header>
      <Styled.Body>
        {demoPanel(demo)}
        {snippetPanel(snippet)}
      </Styled.Body>
    </Styled.Root>
  )
}

CodeExample.displayName = 'CodeExampleEVG'
export default CodeExample
