import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import LoaderBase from './LoaderBase'
import LoaderColor from './LoaderColor'
import LoaderDepth from './LoaderDepth'
import LoaderSize from './LoaderSize'

export const LoaderBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<LoaderBase />}
    snippet={Snippets.LoaderBase} />
)

LoaderBaseExample.displayName = 'LoaderBaseExample'

export const LoaderColorExample = () => (
  <CodeExample
    title="Color"
    demo={<LoaderColor />}
    snippet={Snippets.LoaderColor} />
)

LoaderColorExample.displayName = 'LoaderColorExample'

export const LoaderDepthExample = () => (
  <CodeExample
    title="Depth"
    demo={<LoaderDepth />}
    snippet={Snippets.LoaderDepth} />
)

LoaderDepthExample.displayName = 'LoaderDepthExample'

export const LoaderSizeExample = () => (
  <CodeExample
    title="Size"
    demo={<LoaderSize />}
    snippet={Snippets.LoaderSize} />
)

LoaderSizeExample.displayName = 'LoaderSizeExample'
