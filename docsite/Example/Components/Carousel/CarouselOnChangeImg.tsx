import { useState } from 'react'

import useBaseUrl from '@docusaurus/useBaseUrl'
import { Carousel } from '@evg-b/evg-ui'

import * as Styled from './Carousel.styled'

const CarouselOnChangeImg = () => {
  const [index, setIndex] = useState(0)
  const imgs = [
    useBaseUrl('/source/Carousel/1.jpg'),
    useBaseUrl('/source/Carousel/2.jpg'),
    useBaseUrl('/source/Carousel/3.jpg')
  ]
  return (
    <div>
      <Styled.Frame>
        <Carousel imgs={imgs} onChangeImg={setIndex} />
      </Styled.Frame>
      <output>Слайд {index + 1} из {imgs.length}</output>
    </div>
  )
}

CarouselOnChangeImg.displayName = 'CarouselOnChangeImg'

export default CarouselOnChangeImg
