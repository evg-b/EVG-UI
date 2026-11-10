import styled, { keyframes } from 'styled-components'

import { getColor } from '../../theme/getColor'

import type { LoaderStyledProps } from './Loader.types'

export const baseAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`

export const circleAnimation = keyframes`
  0% {
    stroke-dasharray: calc(var(--evg-stroke-dasharray)*0.05),calc(var(--evg-stroke-dasharray));
    stroke-dashoffset: 0;
    transform: rotate(0deg);
  }
  10% {
    stroke-dasharray: calc(var(--evg-stroke-dasharray)*0.05),calc(var(--evg-stroke-dasharray));
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: calc(var(--evg-stroke-dasharray)*0.7),calc(var(--evg-stroke-dasharray));
    stroke-dashoffset: calc(var(--evg-stroke-dasharray)*-0.3);
  }
  90% {
    stroke-dasharray: calc(var(--evg-stroke-dasharray)*0.7),calc(var(--evg-stroke-dasharray));
    stroke-dashoffset: calc(var(--evg-stroke-dasharray)*-0.95);
  }
  100% {
    stroke-dasharray: calc(var(--evg-stroke-dasharray)*0.7),calc(var(--evg-stroke-dasharray));
    stroke-dashoffset: calc(var(--evg-stroke-dasharray)*-0.95);
    transform: rotate(18deg);
  }
`

export const Root = styled.svg<LoaderStyledProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  position: relative;
  display: inline-block;
  animation: ${baseAnimation} 2000ms linear infinite;
`

export const Circle = styled.circle<LoaderStyledProps>`
  fill: none;
  stroke: ${(props) =>
    props.$color === 'default'
      ? 'currentColor'
      : getColor(props.theme, props.$color).Base()};
  animation: ${circleAnimation} 1500ms ease-out infinite;
  transform-origin: center;
`
