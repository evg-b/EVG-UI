import styled from 'styled-components'

import Elevation from '../../styles/Elevation'
import { getColor } from '../../theme/getColor'
import { resolveTheme } from '../../theme/resolveTheme'

import type { SwitchStyledProps } from './Switch.types'

export const ThumbIcon = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => resolveTheme(theme).surface};
  border-radius: 50%;
  box-sizing: border-box;
  ${Elevation(1)}
`

export const Input = styled.input`
  opacity: 0;
  cursor: inherit;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  &:checked ~ ${ThumbIcon} {
    background-color: var(--evg-switch-thumb-color);
  }
`

export const Thumb = styled.label<SwitchStyledProps>`
  transform: translateX(${({ $active }) => ($active ? 10 : -10)}px);
  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1) 20ms;
`

export const Track = styled.span<SwitchStyledProps>`
  position: absolute;
  width: 32px;
  height: 14px;
  background-color: ${({ theme, $active }) =>
    $active ? 'var(--evg-switch-track-color)' : resolveTheme(theme).onSurface};
  border-radius: 7px;
  opacity: 0.38;
  box-sizing: border-box;
`

export const Root = styled.div<SwitchStyledProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  --evg-switch-thumb-color: ${({ theme, $color }) =>
    $color === 'default'
      ? resolveTheme(theme).surface
      : getColor(theme, $color).Base()};
  --evg-switch-track-color: ${({ theme, $color }) =>
    $color === 'default'
      ? resolveTheme(theme).onSurface
      : getColor(theme, $color).Base()};

  ${({ $disabled, theme }) =>
    $disabled && {
      [`${Track}, ${ThumbIcon}`]: {
        cursor: 'default',
        pointerEvents: 'none',
        backgroundColor: resolveTheme(theme).disabledBg
      }
    }}
`
