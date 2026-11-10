import type { ReactNode } from 'react'

import type { Theme } from '../../../theme/theme.types'

export type ThemeProviderProps = {
  // Готовая тема; при отсутствии используется светлая тема.
  theme?: Theme
  children?: ReactNode
}
