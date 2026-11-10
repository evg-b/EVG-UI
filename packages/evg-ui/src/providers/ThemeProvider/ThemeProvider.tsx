import { type FC } from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { createTheme } from '../../theme/createTheme'

import type { ThemeProviderProps } from './ThemeProvider.types'

const defaultTheme = createTheme()

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = defaultTheme,
  children
}) => <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>

ThemeProvider.displayName = 'ThemeProvider'

export default ThemeProvider
