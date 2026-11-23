import { Skeleton } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SkeletonBase = () => {
  return (
    <Styled.Row>
      <Skeleton />
      <Skeleton width={160} />
      <Skeleton width={100} borderRadius={16} />
    </Styled.Row>
  )
}

SkeletonBase.displayName = 'SkeletonBase'

export default SkeletonBase
