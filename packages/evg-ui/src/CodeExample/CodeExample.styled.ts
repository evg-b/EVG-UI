import styled, { css } from 'styled-components'

import { resolveTheme } from '../theme/resolveTheme'

import type { CodeExampleStyledProps } from './CodeExample.types'

const visibleStyles = css<CodeExampleStyledProps>`
  display: block;
`

export const DemoPanel = styled.div<CodeExampleStyledProps>`
  display: none;
  padding: 20px;
  ${(props) => props.$visible && visibleStyles}
`

export const DemoContent = styled.div<CodeExampleStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const CodePanel = styled.div<CodeExampleStyledProps>`
  display: none;
  background-color: #272822;
  ${(props) => props.$visible && visibleStyles}
`

export const SourceCode = styled.pre<CodeExampleStyledProps>`
  display: inline-block;
`

export const Root = styled.div<CodeExampleStyledProps>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const Header = styled.div<CodeExampleStyledProps>`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 1rem;
`

export const HeaderLeft = styled.div<CodeExampleStyledProps>``

export const HeaderRight = styled.div<CodeExampleStyledProps>`
  font-size: 1rem;
`

export const Body = styled.div<CodeExampleStyledProps>`
  height: 100%;
  background-color: ${(props) => resolveTheme(props.theme).surfaceHover};
`

export const CodeScroll = styled.div`
  max-height: 600px;
`

export const sourceCodeStyle = { margin: 0, fontSize: '.8em' }
