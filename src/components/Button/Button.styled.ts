import styled, { css } from 'styled-components'

import { getColor } from '../../theme/getColor'

import { resolveTheme } from '../../theme/resolveTheme'

import Elevation from '../../styles/Elevation'

import type { ButtonStyledProps } from './Button.types'

const textStyles = css<ButtonStyledProps>`
  color: ${(props) =>
    props.$color === 'default'
      ? getColor(props.theme, props.$color).Contrast()
      : getColor(props.theme, props.$color).Base()};
`

const outlinedStyles = css<ButtonStyledProps>`
  border: 1px solid
    ${(props) =>
      props.$color === 'default'
        ? getColor(props.theme, props.$color).Contrast('hexa', 0.6)
        : getColor(props.theme, props.$color).Base('hexa', 0.6)};
  color: ${(props) =>
    props.$color === 'default'
      ? getColor(props.theme, props.$color).Contrast('hexa', 0.6)
      : getColor(props.theme, props.$color).Base()};
`

const containedStyles = css<ButtonStyledProps>`
  background-color: ${(props) => getColor(props.theme, props.$color).Base()};
  color: ${(props) => getColor(props.theme, props.$color).Contrast()};
`

const elevationStyles = css<ButtonStyledProps>`
  ${Elevation(2)}
  &:hover {
    ${Elevation(4)}
  }
  &:active {
    ${Elevation(8)}
  }
`

const smallStyles = css<ButtonStyledProps>`
  height: 28px;
  min-width: 56px;
  font-size: 0.815rem;
  padding: 0 10px;
`

const mediumStyles = css<ButtonStyledProps>`
  height: 36px;
  min-width: 64px;
  font-size: 0.875rem;
  padding: 0 16px;
`

const largeStyles = css<ButtonStyledProps>`
  height: 42px;
  min-width: 72px;
  font-size: 1.2rem;
  padding: 0 24px;
`

const extraStyles = css<ButtonStyledProps>`
  height: 48px;
  font-size: 1.6rem;
  padding: 0 24px;
  width: 100%;
`

const uppercaseStyles = css<ButtonStyledProps>`
  text-transform: uppercase;
`

const roundStyles = css<ButtonStyledProps>`
  border-radius: 999px;
`

const startIconStyles = css<ButtonStyledProps>`
  display: inline-flex;
  margin-right: 8px;
  margin-left: -4px;
`

export const StartIcon = styled.span<ButtonStyledProps>`
  ${startIconStyles}
`

export const EndIcon = styled.span<ButtonStyledProps>`
  display: inline-flex;
  margin-left: 8px;
  margin-right: -4px;
`

export const Label = styled.span<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  font-family: ${(props) => resolveTheme(props.theme).fontFamily};
  letter-spacing: 0.09em;
  line-height: 1.7;
  font-weight: 500;
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
`

export const StartLoader = styled.svg<ButtonStyledProps>`
  ${startIconStyles}
`

export const Root = styled.button<ButtonStyledProps>`
  border-radius: 4px;
  &:disabled {
    ${Elevation(0)}
  }
  ${(props) => props.$variant === 'text' && textStyles}
  ${(props) => props.$variant === 'outlined' && outlinedStyles}
  ${(props) => props.$variant === 'contained' && containedStyles}
  ${(props) => props.$size === 'small' && smallStyles}
  ${(props) => props.$size === 'medium' && mediumStyles}
  ${(props) => props.$size === 'large' && largeStyles}
  ${(props) => props.$size === 'extra' && extraStyles}
  ${(props) => props.$uppercase && uppercaseStyles}
  ${(props) => props.$round && roundStyles}
  ${(props) => props.$elevation && elevationStyles}
`

export const LoadingIndicator = styled.svg<ButtonStyledProps>`
  position: absolute;
`
