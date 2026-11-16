import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import SelectBase from './SelectBase'
import SelectColor from './SelectColor'
import SelectEmptyOption from './SelectEmptyOption'

export const SelectBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<SelectBase />}
    snippet={Snippets.SelectBase} />
)

SelectBaseExample.displayName = 'SelectBaseExample'

export const SelectColorExample = () => (
  <CodeExample
    title="Color"
    demo={<SelectColor />}
    snippet={Snippets.SelectColor} />
)

SelectColorExample.displayName = 'SelectColorExample'

export const SelectEmptyOptionExample = () => (
  <CodeExample
    title="EmptyOption"
    demo={<SelectEmptyOption />}
    snippet={Snippets.SelectEmptyOption} />
)

SelectEmptyOptionExample.displayName = 'SelectEmptyOptionExample'
