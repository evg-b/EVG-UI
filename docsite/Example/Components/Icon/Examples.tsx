import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import IconBase from './IconBase'
import IconColor from './IconColor'
import IconSize from './IconSize'

export const IconBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<IconBase />}
    snippet={Snippets.IconBase} />
)

IconBaseExample.displayName = 'IconBaseExample'

export const IconColorExample = () => (
  <CodeExample
    title="Color"
    demo={<IconColor />}
    snippet={Snippets.IconColor} />
)

IconColorExample.displayName = 'IconColorExample'

export const IconSizeExample = () => (
  <CodeExample
    title="Size"
    demo={<IconSize />}
    snippet={Snippets.IconSize} />
)

IconSizeExample.displayName = 'IconSizeExample'
