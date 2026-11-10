import { resolveTheme } from '../theme/resolveTheme'
import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
`

export const ErrorIcon = styled.svg`
  font-size: 80px;
  stroke: ${({ theme }) => resolveTheme(theme).onSurfaceVariant};
`
