import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import CheckboxBase from './CheckboxBase'
import CheckboxColor from './CheckboxColor'
import CheckboxSize from './CheckboxSize'

export const CheckboxBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<CheckboxBase />}
    snippet={Snippets.CheckboxBase} />
)

CheckboxBaseExample.displayName = 'CheckboxBaseExample'

export const CheckboxColorExample = () => (
  <CodeExample
    title="Color"
    demo={<CheckboxColor />}
    snippet={Snippets.CheckboxColor} />
)

CheckboxColorExample.displayName = 'CheckboxColorExample'

export const CheckboxSizeExample = () => (
  <CodeExample
    title="Size"
    demo={<CheckboxSize />}
    snippet={Snippets.CheckboxSize} />
)

CheckboxSizeExample.displayName = 'CheckboxSizeExample'
