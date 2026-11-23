import { Skeleton } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SkeletonAnimation = () => {
  return (
    <Styled.Row>
      <Skeleton animation={true} />
      <Skeleton animation={false} />
    </Styled.Row>
  )
}

SkeletonAnimation.displayName = 'SkeletonAnimation'

export default SkeletonAnimation
