import { Image } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from './Image.styled'

const ImageBase = () => {
  return (
    <Styled.Row>
      <Styled.Preview as={Image} src={useBaseUrl('/source/Image/1.jpg')} />
      <Styled.Preview as={Image} src={useBaseUrl('/source/Image/2.jpg')} />
      <Styled.Preview as={Image} src={useBaseUrl('/source/Image/3.jpg')} />
    </Styled.Row>
  )
}

ImageBase.displayName = 'ImageBase'

export default ImageBase
