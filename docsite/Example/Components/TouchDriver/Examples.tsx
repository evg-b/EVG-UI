import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import TouchDriverBase from './TouchDriverBase'
import TouchDriverDirection from './TouchDriverDirection'
import TouchDriverInertia from './TouchDriverInertia'
import TouchDriverParams from './TouchDriverParams'

export const TouchDriverBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<TouchDriverBase />}
    snippet={Snippets.TouchDriverBase} />
)

TouchDriverBaseExample.displayName = 'TouchDriverBaseExample'

export const TouchDriverDirectionExample = () => (
  <CodeExample
    title="Direction"
    demo={<TouchDriverDirection />}
    snippet={Snippets.TouchDriverDirection} />
)

TouchDriverDirectionExample.displayName = 'TouchDriverDirectionExample'

export const TouchDriverInertiaExample = () => (
  <CodeExample
    title="Inertia"
    demo={<TouchDriverInertia />}
    snippet={Snippets.TouchDriverInertia} />
)

TouchDriverInertiaExample.displayName = 'TouchDriverInertiaExample'

export const TouchDriverParamsExample = () => (
  <CodeExample
    title="Params"
    demo={<TouchDriverParams />}
    snippet={Snippets.TouchDriverParams} />
)

TouchDriverParamsExample.displayName = 'TouchDriverParamsExample'
