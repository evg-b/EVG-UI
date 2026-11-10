import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { IconButton, Scroll, Tooltip, Loader } from '@evg-b/evg-ui'
import { Code } from '@evg-b/evg-icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import SyntaxStyle from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia'
import type { CodeExampleProps } from './CodeExample.types'
import * as Styled from './CodeExample.styled'
SyntaxHighlighter.registerLanguage('jsx', jsx)
const CodeExample = forwardRef<HTMLDivElement, CodeExampleProps>(
  function CodeExample(props, ref) {
    const {
      className,
      children,
      title,
      demo,
      snippet,
      language,
      ...otherProps
    } = props
    let CodeExample_ref = useRef()
    CodeExample_ref = ref || CodeExample_ref
    let observer = useRef()
    const [openCode, setOpenCode] = useState(false)
    const [mountNode, setMountNode] = useState(false)
    const Syntax_ref = useRef()
    const btnCode_ref = useRef()

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
      if (!observer.current) {
        observer.current = new IntersectionObserver(([entries]) => {
          entries.isIntersecting ? setMountNode(true) : null
        })
        observer.current.observe(CodeExample_ref.current)
      }

      return () => observer.current.disconnect()
    }, [])
    return (
      <Styled.Root ref={CodeExample_ref} {...otherProps} className={className}>
        <Styled.Header>
          <Styled.HeaderLeft>{title}</Styled.HeaderLeft>
          <Styled.HeaderRight>
            <IconButton
              ref={btnCode_ref}
              onClick={() => setOpenCode((prev) => !prev)}
              color={openCode ? 'primary' : 'default'}>
              <Code />
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
)
CodeExample.defaultProps = {
  title: 'Title',
  snippet: '',
  language: 'jsx'
}
CodeExample.displayName = 'CodeExampleEVG'
export default CodeExample
