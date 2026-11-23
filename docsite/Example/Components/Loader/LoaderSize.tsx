import { Loader } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const LoaderSize = () => {
  return (
    <Styled.Row>
      <Loader size={30} />
      <Loader />
      <Loader size={60} />
    </Styled.Row>
  )
}

LoaderSize.displayName = 'LoaderSize'

export default LoaderSize
