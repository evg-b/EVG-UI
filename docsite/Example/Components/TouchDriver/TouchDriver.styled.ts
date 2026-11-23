import styled from 'styled-components'

import { Elevation } from '@evg-b/evg-ui'

import type { IndicatorProps } from './TouchDriver.types'

export const Area = styled.div`
  ${Elevation(2)}
  position: relative;
  width: 500px;
  height: 400px;
  overflow: hidden;
`

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};
  cursor: pointer;
  user-select: none;
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }
`

const Direction = styled.div<IndicatorProps>`
  position: absolute;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.primary : theme.onSurfaceVariant};
  transition: color 300ms ease;
`

export const Top = styled(Direction)`
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`

export const Bottom = styled(Direction)`
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`

export const Left = styled(Direction)`
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`

export const Right = styled(Direction)`
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`

export const AxisX = styled(Direction)`
  bottom: 10px;
  right: 10px;
`

export const AxisY = styled(Direction)`
  top: 10px;
  left: 10px;
`

export const InertiaCircle = styled(Circle)`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 9;
  width: 100px;
  height: 100px;
  transform: translateY(-50%);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
`

const Target = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 100px;
  border: 4px dashed ${({ theme }) => theme.primary};
  border-radius: 50%;
`

export const LeftTarget = styled(Target)`
  left: 0;
`

export const RightTarget = styled(Target)`
  right: 0;
`

export const Threshold = styled.div<IndicatorProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5px;
  height: 170px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.primary : theme.outline};
  transition: background-color 300ms ease;
`

export const Controls = styled.div<IndicatorProps>`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.primary : theme.onSurfaceVariant};
`
