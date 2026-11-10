import styled from 'styled-components'

import { resolveTheme } from '@evg-b/evg-ui'

export const CodePanel = styled.div`
  width: 100%;
  background-color: #272822;
`

export const SourceCode = styled.pre`
  display: inline-block;
`

export const Root = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const Header = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 1rem;
`

export const HeaderLeft = styled.div``

export const HeaderRight = styled.div`
  font-size: 1rem;
`

export const Body = styled.div`
  background-color: ${(props) => resolveTheme(props.theme).surfaceHover};
`

export const DemoPanel = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const CodeScroll = styled.div`
  max-height: 600px;
`

export const sourceCodeStyle = { margin: 0, fontSize: '.8em' }
