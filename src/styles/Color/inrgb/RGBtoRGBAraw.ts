import type { ColorTuple } from '../../../types/color.types'

export default function RGBtoRGBAraw(value: string): ColorTuple {
  const separator = value.includes(',') ? ',' : ' '
  const parts = value.slice(4).split(')')[0].split(separator)
  const percentages = parts.join('').includes('%')
  const channels = parts.map((part, index) => {
    if (!percentages) return Number(part)
    const fraction = Number(part.slice(0, -1)) / 100
    return index < 3 ? Math.round(fraction * 255) : fraction
  })
  return [channels[0], channels[1], channels[2], 1]
}
