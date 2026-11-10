import { getColor } from '../theme/getColor'
import type { Theme } from '../theme/theme.types'

import type { RippleEffect } from './Ripple.types'

const OPACITY = {
  light: {
    hover: 0.04,
    focus: 0.12,
    selected: 0.08,
    activated: 0.12,
    pressed: 0.12,
    dragged: 0.08
  },
  dark: {
    hover: 0.12,
    focus: 0.36,
    selected: 0.24,
    activated: 0.36,
    pressed: 0.48,
    dragged: 0.32
  },
  color: {
    hover: 0.08,
    focus: 0.24,
    selected: 0.16,
    activated: 0.24,
    pressed: 0.32,
    dragged: 0.16
  }
}

export const getRippleColor = (
  theme: Partial<Theme>,
  color = 'default',
  contrast = true
) => {
  const value = getColor(theme, color)
  return (contrast ? value.Contrast() : value.Base()) || '#000000'
}

export const getRippleOpacity = (color: string, effect: RippleEffect) => {
  const key =
    color.toUpperCase() === '#000000'
      ? 'light'
      : color.toUpperCase() === '#FFFFFF'
        ? 'dark'
        : 'color'
  return OPACITY[key][effect]
}
