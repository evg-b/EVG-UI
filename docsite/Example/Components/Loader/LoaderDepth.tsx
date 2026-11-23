import { Loader } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const LoaderSize = () => {
  return (
    <Styled.Row>
      <Loader depth={1} />
      <Loader />
      <Loader depth={8} />
    </Styled.Row>
  )
}

LoaderSize.displayName = 'LoaderSize'

export default LoaderSize
