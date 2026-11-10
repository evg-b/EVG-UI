import { generateTokens } from './generateTokens'
import type { CreateThemeOptions, Theme } from './theme.types'

export const createTheme = ({
  tokens = generateTokens().light,
  fontFamily = 'Roboto, Helvetica, Arial, sans-serif'
}: CreateThemeOptions = {}): Theme => ({
  ...tokens,
  fontFamily
})
