import { useState } from 'react'
import { Image, Button } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from './Image.styled'

const ImageLoader = () => {
  const [hash, setHash] = useState('')
  const newHash = () => {
    setHash(String(Date.now()))
  }
  const url = useBaseUrl(`/source/Image/2.jpg?${hash}`)
  return (
    <Styled.CenteredRow>
      <Styled.Preview as={Image} src={url} />
      <Button onClick={newHash}>reload</Button>
    </Styled.CenteredRow>
  )
}

ImageLoader.displayName = 'ImageLoader'

export default ImageLoader
