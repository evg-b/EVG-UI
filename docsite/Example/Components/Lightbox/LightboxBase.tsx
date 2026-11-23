import { Lightbox } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from '../../ExampleLayout.styled'

const LightboxBase = () => {
  const imgs = [
    useBaseUrl('/source/Carousel/1.jpg'),
    useBaseUrl('/source/Carousel/2.jpg'),
    useBaseUrl('/source/Carousel/3.jpg'),
    useBaseUrl('/source/Carousel/4.jpg'),
    useBaseUrl('/source/Carousel/5.jpg'),
    useBaseUrl('/source/Carousel/6.jpg'),
    useBaseUrl('/source/Carousel/7.jpg'),
    useBaseUrl('/source/Carousel/8.jpg'),
    useBaseUrl('/source/Carousel/9.jpg')
  ]
  return (
    <Styled.Row>
      <Lightbox imgs={imgs} />
    </Styled.Row>
  )
}

LightboxBase.displayName = 'LightboxBase'

export default LightboxBase
