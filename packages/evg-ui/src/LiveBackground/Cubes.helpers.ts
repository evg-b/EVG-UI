import type { CubesProps } from './Cubes.types'

export const getCubesOptions = ({
  autopilot = true,
  color = '#E0E0E0',
  fillingX = 0,
  fillingY = 0,
  levelMin = 30,
  levelMax = 100,
  size = 40,
  speed = 1
}: CubesProps) => ({
  autopilot,
  color,
  fillingX,
  fillingY,
  levelMin,
  levelMax,
  size,
  speed
})
