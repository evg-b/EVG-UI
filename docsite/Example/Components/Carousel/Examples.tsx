import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import CarouselBase from './CarouselBase'
import CarouselOnChangeImg from './CarouselOnChangeImg'

export const CarouselBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<CarouselBase />}
    snippet={Snippets.CarouselBase} />
)

CarouselBaseExample.displayName = 'CarouselBaseExample'

export const CarouselOnChangeImgExample = () => (
  <CodeExample
    title="OnChangeImg"
    demo={<CarouselOnChangeImg />}
    snippet={Snippets.CarouselOnChangeImg} />
)

CarouselOnChangeImgExample.displayName = 'CarouselOnChangeImgExample'
