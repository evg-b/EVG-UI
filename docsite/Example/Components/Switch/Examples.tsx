import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import SwitchBase from './SwitchBase'
import SwitchColor from './SwitchColor'
import SwitchSize from './SwitchSize'
import SwitchVariant from './SwitchVariant'

export const SwitchBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<SwitchBase />}
    snippet={Snippets.SwitchBase} />
)

SwitchBaseExample.displayName = 'SwitchBaseExample'

export const SwitchColorExample = () => (
  <CodeExample
    title="Color"
    demo={<SwitchColor />}
    snippet={Snippets.SwitchColor} />
)

SwitchColorExample.displayName = 'SwitchColorExample'

export const SwitchSizeExample = () => (
  <CodeExample
    title="Size"
    demo={<SwitchSize />}
    snippet={Snippets.SwitchSize} />
)

SwitchSizeExample.displayName = 'SwitchSizeExample'

export const SwitchVariantExample = () => (
  <CodeExample
    title="Variant"
    demo={<SwitchVariant />}
    snippet={Snippets.SwitchVariant} />
)

SwitchVariantExample.displayName = 'SwitchVariantExample'
