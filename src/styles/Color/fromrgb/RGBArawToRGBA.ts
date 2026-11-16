import type { ColorChannels } from '../../../types/color.types'

export default function RGBArawToRGBA(
  { r, g, b, a }: ColorChannels,
  alpha = false
) {
  return alpha ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`
}
