import styled from 'styled-components'

import { Color, Elevation } from '@evg-b/evg-ui'

import type { SwatchProps } from './Color.types'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  gap: 10px;
  margin: 1rem 0;
`

export const Tone = styled.div<SwatchProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  border-radius: 6px;
  background-color: ${({ $background }) => $background};
  color: ${({ $background }) => Color($background).Contrast('HEX')};
`

export const Scale = styled.div`
  display: grid;
  grid-template-columns: repeat(13, minmax(2.5rem, 1fr));
  gap: 2px;
  overflow-x: auto;
  margin: 10px 0;
`

export const Values = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`

export const Value = styled.div`
  position: relative;
  display: grid;
  align-content: center;
  min-height: 38px;
  padding-left: 48px;

  dd {
    margin: 0;
    color: ${({ theme }) => theme.onSurfaceVariant};
  }
`

export const Chip = styled.span<SwatchProps>`
  ${Elevation(1)}
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 6px;
  background-color: ${({ $background }) => $background};
`
