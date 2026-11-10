import Color from '../styles/Color/Color'

import type { ThemeSourceColors, TokensType } from './theme.types'

export const generateTokens = ({
  primaryColor = '#1e88e5',
  secondaryColor = '#757575',
  errorColor = '#e53935',
  warningColor = '#fb8c00',
  successColor = '#43a047'
}: ThemeSourceColors = {}): Record<'light' | 'dark', TokensType> => {
  const contrast = (color: string) => Color(color).Contrast('HEX') || '#000000'
  const lighten = (color: string) => Color(color).Bright('HEX', 25) || color

  const light: TokensType = {
    mode: 'light',
    primary: primaryColor,
    onPrimary: contrast(primaryColor),
    secondary: secondaryColor,
    onSecondary: contrast(secondaryColor),
    error: errorColor,
    warning: warningColor,
    success: successColor,
    background: '#ffffff',
    surface: '#ffffff',
    onSurface: '#202124',
    onSurfaceVariant: '#616161',
    surfaceContainer: '#f5f5f5',
    surfaceHover: 'rgba(0, 0, 0, 0.05)',
    outline: 'rgba(0, 0, 0, 0.12)',
    disabledBg: '#b4b4b4',
    disabledText: 'rgba(0, 0, 0, 0.26)',
    focus: primaryColor
  }

  const primary = lighten(primaryColor)
  const secondary = lighten(secondaryColor)
  const dark: TokensType = {
    ...light,
    mode: 'dark',
    primary,
    onPrimary: contrast(primary),
    secondary,
    onSecondary: contrast(secondary),
    error: lighten(errorColor),
    warning: lighten(warningColor),
    success: lighten(successColor),
    background: '#121212',
    surface: '#202124',
    onSurface: '#f5f5f5',
    onSurfaceVariant: '#bdbdbd',
    surfaceContainer: '#303134',
    surfaceHover: 'rgba(255, 255, 255, 0.08)',
    outline: 'rgba(255, 255, 255, 0.20)',
    disabledBg: '#55565a',
    disabledText: 'rgba(255, 255, 255, 0.38)',
    focus: primary
  }

  return { light, dark }
}
