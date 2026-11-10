import styled, { css } from 'styled-components'

import Elevation from '../../styles/Elevation'
import { getColor } from '../../theme/getColor'

import type { ButtonGroupStyledProps } from './ButtonGroup.types'

export const Root = styled.div<ButtonGroupStyledProps>`
  display: flex;
  justify-content: center;
  border-radius: ${({ $round }) => ($round ? '999px' : '4px')};
  width: fit-content;
  height: fit-content;
  --evg-button-group-divider: ${({ theme, $color, $variant }) => {
    const color = getColor(theme, $color)
    return $variant === 'contained' || $color === 'default'
      ? color.Contrast()
      : color.Base()
  }};

  ${({ $variant }) =>
    $variant === 'contained' &&
    css`
      ${Elevation(2)}
      & > * {
        box-shadow: none;
      }
    `}

  ${({ $orientation }) =>
    $orientation === 'vertical'
      ? css`
          flex-direction: column;
          & > :not(:first-child) {
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            border-top: 1px solid var(--evg-button-group-divider);
          }
          & > :not(:last-child) {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom: 0;
          }
        `
      : css`
          flex-direction: row;
          & > :not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left: 1px solid var(--evg-button-group-divider);
          }
          & > :not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right: 0;
          }
        `}
`
