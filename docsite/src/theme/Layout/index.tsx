import type { PropsWithChildren } from 'react'

import { useColorMode } from '@docusaurus/theme-common'
import OriginalLayout from '@theme-original/Layout'
import type { Props } from '@theme/Layout'
import {
  colors,
  createTheme,
  generateTokens,
  ThemeProvider
} from '@evg-b/evg-ui'

const tokens = generateTokens({ primaryColor: colors.purple[700] })
const themes = {
  light: createTheme({ tokens: tokens.light }),
  dark: createTheme({ tokens: tokens.dark })
}

const DocsTheme = ({ children }: PropsWithChildren) => {
  const { colorMode } = useColorMode()
  return <ThemeProvider theme={themes[colorMode]}>{children}</ThemeProvider>
}

const Layout = ({
  children,
  ...props
}: PropsWithChildren<Omit<Props, 'children'>>) => (
  <OriginalLayout {...props}>
    <DocsTheme>{children}</DocsTheme>
  </OriginalLayout>
)

DocsTheme.displayName = 'DocsTheme'
Layout.displayName = 'Layout'

export default Layout
