import styled, { css, keyframes } from 'styled-components'

import { getRippleColor, getRippleOpacity } from './Ripple.helpers'
import type { RippleStyledProps } from './Ripple.types'

export const startRippleAnimation = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translate(var(--evg-ripple-coord-start)) scale(.2, .2);
  }
  50% { opacity: var(--evg-ripple-opacity); }
  100% {
    opacity: var(--evg-ripple-opacity);
    transform: translate(var(--evg-ripple-coord-end)) scale(1, 1);
  }
`

export const endRippleAnimation = keyframes`
  0% { opacity: var(--evg-ripple-opacity); }
  100% { opacity: 0; }
`

export const Root = styled.span<RippleStyledProps>`
  position: absolute;
  inset: 0;
  overflow: hidden;
  outline: none;
  --evg-ripple-overlay: ${({ theme, $color, $contrast }) =>
    getRippleColor(theme, $color, $contrast)};

  &::before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: var(--evg-ripple-size, 100%);
    height: var(--evg-ripple-size, 100%);
    border-radius: 50%;
    background-color: var(--evg-ripple-overlay);
    transform-origin: center center;
    transform: scale(1);
    will-change: transform, opacity;
  }

  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: var(--evg-ripple-overlay);
  }

  &:hover::after {
    opacity: ${({ theme, $color, $contrast }) =>
      getRippleOpacity(getRippleColor(theme, $color, $contrast), 'hover')};
  }

  ${({ $isFocus }) =>
    $isFocus &&
    css`
      &::after,
      &:hover::after {
        opacity: ${({ theme, $color, $contrast }) =>
          getRippleOpacity(getRippleColor(theme, $color, $contrast), 'focus')};
      }
    `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::after,
      &:hover::after {
        opacity: ${({ theme, $color, $contrast }) =>
          getRippleOpacity(
            getRippleColor(theme, $color, $contrast),
            'activated'
          )};
      }
    `}

  ${({ $startRipple }) =>
    $startRipple &&
    css`
      &::before {
        animation: ${startRippleAnimation} 225ms both;
      }
    `}

  ${({ $endRipple }) =>
    $endRipple &&
    css`
      &::before {
        animation:
          ${startRippleAnimation} 225ms both,
          ${endRippleAnimation} 225ms linear both 50ms;
      }
    `}
`
