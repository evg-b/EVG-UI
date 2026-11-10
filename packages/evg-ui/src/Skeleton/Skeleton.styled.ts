import styled, { css, keyframes } from 'styled-components'

import { getColor } from '../theme/getColor'
import { toCssSize } from '../styles/toCssSize'

import type { SkeletonStyledProps } from './Skeleton.types'

const wave = keyframes`
  0% { transform: translateX(-100%); }
  80%, 100% { transform: translateX(100%); }
`

export const Root = styled.span<SkeletonStyledProps>`
  display: block;
  height: 1.2em;
  background-color: ${({ theme }) => getColor(theme).Contrast('RGBA', 0.15)};
  width: ${({ $width }) => toCssSize($width)};
  height: ${({ $height, $types }) =>
    !$types.includes('text') && toCssSize($height)};
  border-radius: ${({ $borderRadius, $types }) =>
    !$types.includes('text') &&
    !$types.includes('avatar') &&
    toCssSize($borderRadius)};

  ${({ $types }) =>
    $types.includes('text') &&
    css`
      transform: scale(1, 0.6);
      border-radius: 6px;
      height: 1em;
    `}
  ${({ $types }) =>
    $types.includes('h1') &&
    css`
      height: 2em;
    `}
  ${({ $types }) =>
    $types.includes('h2') &&
    css`
      height: 1.5em;
    `}
  ${({ $types }) =>
    $types.includes('h3') &&
    css`
      height: 1.17em;
    `}
  ${({ $types }) =>
    $types.includes('h4') &&
    css`
      height: 1em;
    `}
  ${({ $types }) =>
    $types.includes('h5') &&
    css`
      height: 0.83em;
    `}
  ${({ $types }) =>
    $types.includes('h6') &&
    css`
      height: 0.67em;
    `}
  ${({ $types }) =>
    $types.includes('avatar') &&
    css`
      border-radius: 50%;
    `}

  ${({ $animation }) =>
    $animation &&
    css`
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.15),
          transparent
        );
        transform: translateX(-100%);
        animation: ${wave} 1200ms linear 200ms infinite;
      }
    `}
`
