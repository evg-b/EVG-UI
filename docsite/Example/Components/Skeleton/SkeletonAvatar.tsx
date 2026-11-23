import { Skeleton } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SkeletonAvatar = () => {
  return (
    <Styled.Row>
      <Skeleton type="avatar" size={20} />
      <Skeleton type="avatar" />
      <Skeleton type="avatar" size={100} />
    </Styled.Row>
  )
}

SkeletonAvatar.displayName = 'SkeletonAvatar'

export default SkeletonAvatar
