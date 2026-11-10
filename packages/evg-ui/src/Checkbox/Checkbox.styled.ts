import styled, { css } from 'styled-components'

import { getColor } from '../theme/getColor'
import { resolveTheme } from '../theme/resolveTheme'
import { Input } from '../SwitchBase/SwitchBase.styled'

import type { CheckboxStyledProps } from './Checkbox.types'

export const Checkmark = styled.svg<CheckboxStyledProps>`
  position: absolute;
  opacity: 0;
  transition: opacity 100ms linear;

  ${({ $indeterminate }) =>
    !$indeterminate &&
    css`
      transition:
        opacity 100ms linear,
        stroke-dashoffset 250ms cubic-bezier(0.4, 0, 0.2, 1);
      user-select: none;
      fill: currentColor;
      stroke: ${({ theme, $color }) =>
        getColor(theme, $color === 'default' ? '#000000' : $color).Contrast()};
      stroke-width: 2.5;
      stroke-dasharray: 24;
      stroke-dashoffset: 24;
      background-color: ${({ theme, $color }) =>
        getColor(theme, $color === 'default' ? '#000000' : $color).Base()};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: default;
      pointer-events: none;
      background-color: ${({ theme }) => resolveTheme(theme).disabledBg};
    `}
`

export const Root = styled.label`
  position: relative;

  ${Input}:checked + ${Checkmark} {
    opacity: 1;
    stroke-dashoffset: 0;
  }
`
