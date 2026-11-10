import { createTheme } from './createTheme'
import type { Theme } from './theme.types'

const fallbackTheme = createTheme()

export const resolveTheme = (theme?: Partial<Theme>): Theme => ({
  ...fallbackTheme,
  ...theme
})
