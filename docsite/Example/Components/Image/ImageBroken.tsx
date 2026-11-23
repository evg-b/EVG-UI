import { useState } from 'react'

import useBaseUrl from '@docusaurus/useBaseUrl'
import { Button, Image } from '@evg-b/evg-ui'

import * as Styled from './Image.styled'

const ImageBroken = () => {
  const [attempt, setAttempt] = useState(0)
  const source = useBaseUrl('/source/Image/missing.jpg')

  return (
    <Styled.CenteredRow>
      <Styled.Preview
        as={Image}
        src={`${source}?attempt=${attempt}`}
        alt="Пример ошибки загрузки"
      />
      <Button type="button" onClick={() => setAttempt((value) => value + 1)}>
        Повторить
      </Button>
    </Styled.CenteredRow>
  )
}

ImageBroken.displayName = 'ImageBroken'

export default ImageBroken
