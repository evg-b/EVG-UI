import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import MenuBase from './MenuBase'

export const MenuBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<MenuBase />}
    snippet={Snippets.MenuBase} />
)

MenuBaseExample.displayName = 'MenuBaseExample'
