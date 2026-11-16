export type ColorFormat =
  | 'RGB'
  | 'RGBA'
  | 'HEX'
  | 'HEXA'
  | 'HSL'
  | 'HSLA'
  | 'unknown'
export type ColorAlpha = number | string
export type ColorChannels = { r: number; g: number; b: number; a: ColorAlpha }
export type ColorTuple = [r: number, g: number, b: number, a: number]
export type ColorDetection = { format: ColorFormat; value: string }
export type ColorPalette = Record<string, string>
