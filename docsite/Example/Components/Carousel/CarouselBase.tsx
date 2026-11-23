import { Carousel } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from './Carousel.styled'

const CarouselBase = () => {
  const imgs = [
    useBaseUrl('/source/Carousel/1.jpg'),
    useBaseUrl('/source/Carousel/2.jpg'),
    useBaseUrl('/source/Carousel/3.jpg'),
    useBaseUrl('/source/Carousel/4.jpg'),
    useBaseUrl('/source/Carousel/5.jpg'),
    useBaseUrl('/source/Carousel/6.jpg'),
    useBaseUrl('/source/Carousel/7.jpg'),
    useBaseUrl('/source/Carousel/8.jpg'),
    useBaseUrl('/source/Carousel/9.jpg'),
    useBaseUrl('/source/Carousel/10.jpg')
  ]
  return (
    <Styled.Frame>
      <Carousel imgs={imgs} />
    </Styled.Frame>
  )
}

CarouselBase.displayName = 'CarouselBase'

export default CarouselBase
