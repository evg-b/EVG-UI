import styled, { css } from 'styled-components'

import { getColor } from '../theme/getColor'

import type { TooltipStyledProps } from './Tooltip.types'

const desktopStyles = css<TooltipStyledProps>`
  height: 24px;
  padding: 0 8px;
`

const mobileStyles = css<TooltipStyledProps>`
  height: 32px;
  padding: 0 16px;
`

export const Root = styled.div<TooltipStyledProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 12px;
  box-sizing: border-box;
  background-color: ${(props) =>
    getColor(props.theme, 'gray700').Base('rgba', 0.9)};
  color: ${(props) => getColor(props.theme, 'gray700').Contrast()};
  transition: opacity 100ms ease-in 50ms;
  ${(props) => props.$specs === 'desktop' && desktopStyles}
  ${(props) => props.$specs === 'mobile' && mobileStyles}
`
