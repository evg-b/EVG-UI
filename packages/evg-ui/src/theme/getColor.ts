import Color from '../styles/Color/Color'

import { resolveTheme } from './resolveTheme'
import type { Theme } from './theme.types'

const colorRoles = {
  default: 'surface',
  primary: 'primary',
  secondary: 'secondary',
  background: 'background',
  surface: 'surface',
  warn: 'warning',
  success: 'success',
  fail: 'error'
} as const

export const getColor = (
  theme: Partial<Theme> | undefined,
  color = 'default'
) => {
  const role = colorRoles[color as keyof typeof colorRoles]
  const value = role ? resolveTheme(theme)[role] : color

  return Color(value)
}
