import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import ImageBase from './ImageBase'
import ImageBroken from './ImageBroken'
import Imageloader from './Imageloader'

export const ImageBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<ImageBase />}
    snippet={Snippets.ImageBase} />
)

ImageBaseExample.displayName = 'ImageBaseExample'

export const ImageBrokenExample = () => (
  <CodeExample
    title="Broken"
    demo={<ImageBroken />}
    snippet={Snippets.ImageBroken} />
)

ImageBrokenExample.displayName = 'ImageBrokenExample'

export const ImageloaderExample = () => (
  <CodeExample
    title="loader"
    demo={<Imageloader />}
    snippet={Snippets.Imageloader} />
)

ImageloaderExample.displayName = 'ImageloaderExample'
