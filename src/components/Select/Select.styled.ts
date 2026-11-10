import styled, { css } from 'styled-components'

import Elevation from '../../styles/Elevation'

import type { SelectStyledProps } from './Select.types'

const selectIconOpenStyles = css<SelectStyledProps>`
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(180deg);
`

export const Root = styled.div<SelectStyledProps>`
  position: relative;
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const SelectIcon = styled.svg<SelectStyledProps>`
  position: absolute;
  top: 18px;
  right: 16px;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  &:disabled,
  &[disabled] {
    cursor: default;
    pointer-events: none;
    color: #b4b4b4;
  }
  ${(props) => props.$selectIconOpen && selectIconOpenStyles}
`

export const SelectList = styled.div<SelectStyledProps>`
  ${Elevation(8)}
`

export const Field = styled.div`
  &,
  input {
    cursor: pointer;
  }
`

export const Popup = styled.div<SelectStyledProps>`
  min-width: ${({ $minWidth }) => $minWidth}px;
`
