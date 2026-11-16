import type { ColorAlpha } from '../../types/color.types'

export default function ColorCheckAlpha(
  alpha: ColorAlpha | undefined
): alpha is ColorAlpha {
  const value =
    typeof alpha === 'string' && alpha.length > 1 && alpha.includes('%')
      ? Number(alpha.slice(0, -1)) / 100
      : Number(alpha)
  return value <= 1
}
