import styled, { css } from 'styled-components'

import { getColor } from '../../theme/getColor'

import { resolveTheme } from '../../theme/resolveTheme'

import type { BadgeStyledProps } from './Badge.types'

const ripeStyles = css<BadgeStyledProps>`
  position: initial;
  transform: scale(1);
  transform-origin: initial;
`

const badgeNullStyles = css<BadgeStyledProps>`
  transform: ${(props) =>
    props.$ripe ? 'scale(0)' : 'scale(0) translate(50%, -50%)'};
`

const dotStyles = css<BadgeStyledProps>`
  height: 10px;
  min-width: 10px;
  padding: 0;
`

const circleStyles = css<BadgeStyledProps>`
  top: 14%;
  right: 14%;
`

export const Badge = styled.span<BadgeStyledProps>`
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  box-sizing: border-box;
  height: 20px;
  min-width: 20px;
  padding: 0 6px;
  font-family: ${(props) => resolveTheme(props.theme).fontFamily};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  pointer-events: none;
  background-color: ${(props) => getColor(props.theme, props.$color).Base()};
  color: ${(props) => getColor(props.theme, props.$color).Contrast()};
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${(props) => props.$ripe && ripeStyles}
  ${(props) => props.$badgeNull && badgeNullStyles}
  ${(props) => props.$dot && dotStyles}
  ${(props) => props.$circle && circleStyles}
`

export const Root = styled.div<BadgeStyledProps>`
  position: relative;
  display: inline-flex;
`
