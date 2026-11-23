import { Loader } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const LoaderColor = () => {
  return (
    <Styled.Row>
      <Loader />
      <Loader color="primary" />
      <Loader color="warn" />
    </Styled.Row>
  )
}

LoaderColor.displayName = 'LoaderColor'

export default LoaderColor
