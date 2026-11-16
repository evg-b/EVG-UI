import type { ColorChannels } from '../../types/color.types'

export default function Contrast(this: Pick<ColorChannels, 'r' | 'g' | 'b'>) {
  // 1) color принимать в формате HEX
  const Brightness = Math.sqrt(
    this.r * this.r * 0.241 + this.g * this.g * 0.691 + this.b * this.b * 0.068
  )
  return Brightness < 140 ? { r: 255, g: 255, b: 255 } : { r: 0, g: 0, b: 0 }
}
