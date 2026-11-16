import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import AppBarBase from './AppBarBase'
import AppBarColor from './AppBarColor'
import AppBarLeftAndRight from './AppBarLeftAndRight'
import AppBarTitleCenter from './AppBarTitleCenter'

export const AppBarBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<AppBarBase />}
    snippet={Snippets.AppBarBase} />
)

AppBarBaseExample.displayName = 'AppBarBaseExample'

export const AppBarColorExample = () => (
  <CodeExample
    title="Color"
    demo={<AppBarColor />}
    snippet={Snippets.AppBarColor} />
)

AppBarColorExample.displayName = 'AppBarColorExample'

export const AppBarLeftAndRightExample = () => (
  <CodeExample
    title="LeftAndRight"
    demo={<AppBarLeftAndRight />}
    snippet={Snippets.AppBarLeftAndRight} />
)

AppBarLeftAndRightExample.displayName = 'AppBarLeftAndRightExample'

export const AppBarTitleCenterExample = () => (
  <CodeExample
    title="TitleCenter"
    demo={<AppBarTitleCenter />}
    snippet={Snippets.AppBarTitleCenter} />
)

AppBarTitleCenterExample.displayName = 'AppBarTitleCenterExample'
