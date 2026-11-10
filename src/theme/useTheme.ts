import { useContext } from 'react'

import { ThemeContext } from 'styled-components'

import { resolveTheme } from './resolveTheme'

export const useTheme = () => resolveTheme(useContext(ThemeContext))
