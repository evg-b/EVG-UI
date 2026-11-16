import type { ColorTuple } from '../../../types/color.types'

export default function HEXtoRGBAraw(value: string): ColorTuple {
  let r = 0
  let g = 0
  let b = 0
  let a = 1
  if (value.length === 4) {
    r = Number(`0x${value[1]}${value[1]}`)
    g = Number(`0x${value[2]}${value[2]}`)
    b = Number(`0x${value[3]}${value[3]}`)
  } else if (value.length === 7) {
    r = Number(`0x${value[1]}${value[2]}`)
    g = Number(`0x${value[3]}${value[4]}`)
    b = Number(`0x${value[5]}${value[6]}`)
  }
  return [r, g, b, a]
}
