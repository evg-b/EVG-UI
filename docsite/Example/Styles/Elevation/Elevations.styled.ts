import styled from 'styled-components'

import { Elevation } from '@evg-b/evg-ui'

import type { ElevationTileProps } from './Elevations.types'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 24px;
  padding: 16px;
`

export const Tile = styled.div<ElevationTileProps>`
  ${({ $level }) => Elevation($level)}
  display: grid;
  place-items: center;
  min-height: 80px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.surfaceContainer};
  color: ${({ theme }) => theme.onSurface};
`
