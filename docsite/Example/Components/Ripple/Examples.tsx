import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import RippleBase from './RippleBase'
import RippleColor from './RippleColor'
import RippleContrast from './RippleContrast'

export const RippleBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<RippleBase />}
    snippet={Snippets.RippleBase} />
)

RippleBaseExample.displayName = 'RippleBaseExample'

export const RippleColorExample = () => (
  <CodeExample
    title="Color"
    demo={<RippleColor />}
    snippet={Snippets.RippleColor} />
)

RippleColorExample.displayName = 'RippleColorExample'

export const RippleContrastExample = () => (
  <CodeExample
    title="Contrast"
    demo={<RippleContrast />}
    snippet={Snippets.RippleContrast} />
)

RippleContrastExample.displayName = 'RippleContrastExample'
