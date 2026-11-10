import 'styled-components'

import type { Theme } from '../theme/theme.types'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
