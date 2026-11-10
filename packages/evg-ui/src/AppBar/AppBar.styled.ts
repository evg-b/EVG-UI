import styled, { css } from 'styled-components'

import { getColor } from '../theme/getColor'

import Elevation from '../styles/Elevation'

import type { AppBarStyledProps } from './AppBar.types'

const caseStyles = css<AppBarStyledProps>`
  display: flex;
`

const titleCenterStyles = css<AppBarStyledProps>`
  justify-content: center;
`

export const Root = styled.div<AppBarStyledProps>`
  ${Elevation(2)}
  z-index: 999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  background-color: ${(props) => getColor(props.theme, props.$color).Base()};
  color: ${(props) => getColor(props.theme, props.$color).Contrast()};
  position: ${({ $position }) => $position};
`

export const Left = styled.div<AppBarStyledProps>`
  ${caseStyles}
  padding-left: 16px;
`

export const Title = styled.div<AppBarStyledProps>`
  ${caseStyles}
  flex: 1;
  padding-left: 32px;
  ${(props) => props.$titleCenter && titleCenterStyles}
`

export const Right = styled.div<AppBarStyledProps>`
  ${caseStyles}
  padding-right: 16px;
`
