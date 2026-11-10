import styled, { css } from 'styled-components'

import { getColor } from '../../theme/getColor'

import { resolveTheme } from '../../theme/resolveTheme'

import { toCssSize } from '../../styles/toCssSize'

import type { AvatarStyledProps } from './Avatar.types'

const loadedStyles = css<AvatarStyledProps>`
  & img {
    opacity: 1;
  }
`

const statusStyles = css<AvatarStyledProps>`
  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid #fff;
    border-radius: 50%;
    right: 2%;
    bottom: 2%;
    background-color: ${(props) =>
      getColor(props.theme, props.$statusColor).Base()};
  }
`

export const Spare = styled.span<AvatarStyledProps>`
  text-transform: uppercase;
  position: absolute;
  font-size: ${(props) => toCssSize(props.$size / 2)};
  & > svg {
    font-size: ${(props) => toCssSize(props.$size * 0.7)};
  }
`

export const Avatar = styled.div<AvatarStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => toCssSize(props.$size)};
  height: ${(props) => toCssSize(props.$size)};
  border-radius: 50%;
  overflow: hidden;
  font-family: ${(props) => resolveTheme(props.theme).fontFamily};
  line-height: normal;
  background-color: ${(props) =>
    getColor(
      props.theme,
      props.$color === 'default' ? '#8a8a8a' : props.$color
    ).Base()};
  color: ${(props) =>
    getColor(
      props.theme,
      props.$color === 'default' ? '#8a8a8a' : props.$color
    ).Contrast()};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 100ms ease-out;
  }
  ${(props) => props.$loaded && loadedStyles}
`

export const Avatars = styled.div<AvatarStyledProps>`
  width: ${(props) => toCssSize(props.$size)};
  height: ${(props) => toCssSize(props.$size)};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & > * {
    border-radius: 0;
    flex-grow: 1;
    width: ${(props) => toCssSize(props.$size / 2)};
    height: ${(props) =>
      toCssSize(props.$srcs.length === 2 ? props.$size : props.$size / 2)};
  }
`

export const Root = styled.div<AvatarStyledProps>`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  ${(props) => props.$status && statusStyles}
`
