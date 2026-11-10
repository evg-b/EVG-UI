import styled from 'styled-components'

import { getColor } from '../theme/getColor'

import type { ListItemStyledProps } from './ListItem.types'

export const Root = styled.li<ListItemStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin: 0 !important;
  background-color: ${(props) => getColor(props.theme, 'surface').Base()};
  color: ${(props) =>
    props.$active && getColor(props.theme, props.$color).Base()};
`
