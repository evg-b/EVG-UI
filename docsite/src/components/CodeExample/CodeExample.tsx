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
import SyntaxStyle from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia'

import type { CodeExampleProps } from './CodeExample.types'

import * as Styled from './CodeExample.styled'

SyntaxHighlighter.registerLanguage('jsx', jsx)

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
  const CodeExample_ref = useRef<HTMLDivElement>(null)
  const mergedRef = useMergedRefs(CodeExample_ref, ref)
  const [openCode, setOpenCode] = useState(false)
  const [mountNode, setMountNode] = useState(false)
  const Syntax_ref = useRef<HTMLElement>(null)
  const btnCode_ref = useRef<HTMLElement>(null)

  const snippetPanel = (snippet) => (
    <Styled.CodePanel>
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
            onClick={() => setOpenCode((prev) => !prev)}
            color={openCode ? 'primary' : 'default'}>
            <Icon name="Code" />
          </IconButton>
          <Tooltip target={btnCode_ref}>
            {openCode ? 'hide code' : 'show code'}
          </Tooltip>
        </Styled.HeaderRight>
      </Styled.Header>
      <Styled.Body>
        <Styled.DemoPanel>
          {mountNode ? demo : <Loader color="primary" />}
        </Styled.DemoPanel>
      </Styled.Body>
      {openCode && snippetPanel(snippet)}
    </Styled.Root>
  )
}

CodeExample.displayName = 'CodeExampleEVG'
export default CodeExample
