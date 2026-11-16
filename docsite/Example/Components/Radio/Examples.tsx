import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import RadioBase from './RadioBase'
import RadioColor from './RadioColor'
import RadioSize from './RadioSize'

export const RadioBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<RadioBase />}
    snippet={Snippets.RadioBase} />
)

RadioBaseExample.displayName = 'RadioBaseExample'

export const RadioColorExample = () => (
  <CodeExample
    title="Color"
    demo={<RadioColor />}
    snippet={Snippets.RadioColor} />
)

RadioColorExample.displayName = 'RadioColorExample'

export const RadioSizeExample = () => (
  <CodeExample
    title="Size"
    demo={<RadioSize />}
    snippet={Snippets.RadioSize} />
)

RadioSizeExample.displayName = 'RadioSizeExample'
