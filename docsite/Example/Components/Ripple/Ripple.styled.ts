import styled from 'styled-components'

import { Color, Elevation } from '@evg-b/evg-ui'

import type { RippleSurfaceProps } from './Ripple.types'

export const Surface = styled.div`
  ${Elevation(2)}
  position: relative;
  width: 300px;
  height: 300px;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Sample = styled.span<RippleSurfaceProps>`
  ${Elevation(2)}
  position: relative;
  width: 150px;
  height: 150px;
  margin: 5px;
  background-color: ${({ $background }) => $background};
`

export const States = styled(Row)`
  justify-content: space-between;
`

export const StateGroup = styled.div<RippleSurfaceProps>`
  ${Elevation(1)}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 15px;
  background-color: ${({ $background }) => $background};
  color: ${({ $background }) => Color($background).Contrast()};
`

export const StateTitle = styled.div`
  padding: 10px;
`

export const State = styled.div<RippleSurfaceProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ $background }) => $background};
`
