export type ThemeMode = 'light' | 'dark'

export type ThemeSourceColors = {
  primaryColor?: string
  secondaryColor?: string
  errorColor?: string
  warningColor?: string
  successColor?: string
}

export type TokensType = {
  mode: ThemeMode
  primary: string
  onPrimary: string
  secondary: string
  onSecondary: string
  error: string
  warning: string
  success: string
  background: string
  surface: string
  onSurface: string
  onSurfaceVariant: string
  surfaceContainer: string
  surfaceHover: string
  outline: string
  disabledBg: string
  disabledText: string
  focus: string
}

export type Theme = TokensType & {
  fontFamily: string
}

export type CreateThemeOptions = {
  tokens?: TokensType
  fontFamily?: string
}
