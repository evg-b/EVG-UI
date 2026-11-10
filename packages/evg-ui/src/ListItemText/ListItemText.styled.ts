import styled, { css } from 'styled-components'

import { getColor } from '../theme/getColor'

import { resolveTheme } from '../theme/resolveTheme'

import type { ListItemTextStyledProps } from './ListItemText.types'

const singleLineStyles = css<ListItemTextStyledProps>`
  height: 48px;
`

const twoLineStyles = css<ListItemTextStyledProps>`
  height: 72px;
`

export const Meta = styled.span<ListItemTextStyledProps>`
  display: contents;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${(props) =>
    getColor(props.theme, props.$color).Contrast('rgba', 0.54)};
`

export const SecondaryText = styled.div<ListItemTextStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${(props) =>
    getColor(props.theme, props.$color).Contrast('rgba', 0.54)};
`

export const Root = styled.div<ListItemTextStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 999;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  & * {
    font-family: ${(props) => resolveTheme(props.theme).fontFamily};
    text-decoration: inherit;
    text-transform: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0;
    line-height: normal;
  }
  ${(props) => props.$singleLine && singleLineStyles}
  ${(props) => props.$twoLine && twoLineStyles}
`

export const PrimaryText = styled.div<ListItemTextStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: ${(props) => getColor(props.theme, props.$color).Contrast()};
`
