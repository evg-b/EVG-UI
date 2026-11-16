import type { ColorTuple } from '../../../types/color.types'

export default function HSLtoRGBAraw(value: string): ColorTuple {
  const separator = value.includes(',') ? ',' : ' '
  const parts = value.slice(4).split(')')[0].split(separator)
  const hue = parts[0]
  let h = Number(hue)
  const s = Number(parts[1].slice(0, -1)) / 100
  const l = Number(parts[2].slice(0, -1)) / 100
  const a = 1
  if (hue.includes('deg')) h = Number(hue.slice(0, -3))
  else if (hue.includes('rad'))
    h = Math.round((Number(hue.slice(0, -3)) / (2 * Math.PI)) * 360)
  else if (hue.includes('turn')) h = Math.round(Number(hue.slice(0, -4)) * 360)
  if (h >= 360) h %= 360
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let r = 0
  let g = 0
  let b = 0
  if (h >= 0 && h < 60) {
    r = c
    g = x
  } else if (h >= 60 && h < 120) {
    r = x
    g = c
  } else if (h >= 120 && h < 180) {
    g = c
    b = x
  } else if (h >= 180 && h < 240) {
    g = x
    b = c
  } else if (h >= 240 && h < 300) {
    r = x
    b = c
  } else if (h >= 300 && h < 360) {
    r = c
    b = x
  }
  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
    a
  ]
}
