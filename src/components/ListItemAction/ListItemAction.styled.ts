import styled, { css } from 'styled-components'

import type { ListItemActionStyledProps } from './ListItemAction.types'

const startStyles = css<ListItemActionStyledProps>`
  order: -1;
  margin-left: 0;
  margin-right: 32px;
`

const endStyles = css<ListItemActionStyledProps>`
  order: 1;
`

export const Root = styled.span<ListItemActionStyledProps>`
  z-index: 1;
  ${(props) => props.$position === 'start' && startStyles}
  ${(props) => props.$position === 'end' && endStyles}
`
