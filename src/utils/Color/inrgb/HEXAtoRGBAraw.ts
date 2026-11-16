import type { ColorTuple } from '../../../types/color.types'

export default function HEXAtoRGBAraw(value: string): ColorTuple {
  let r = 0
  let g = 0
  let b = 0
  let a = 1
  if (value.length === 5) {
    r = Number(`0x${value[1]}${value[1]}`)
    g = Number(`0x${value[2]}${value[2]}`)
    b = Number(`0x${value[3]}${value[3]}`)
    a = Number(`0x${value[4]}${value[4]}`)
  } else if (value.length === 9) {
    r = Number(`0x${value[1]}${value[2]}`)
    g = Number(`0x${value[3]}${value[4]}`)
    b = Number(`0x${value[5]}${value[6]}`)
    a = Number(`0x${value[7]}${value[8]}`)
  }
  return [r, g, b, Number((a / 255).toFixed(3))]
}
