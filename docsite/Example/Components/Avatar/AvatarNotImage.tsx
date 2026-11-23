import { Avatar } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const AvatarNotImage = () => {
  return (
    <Styled.Wrap>
      <Avatar alt="evg b" />
      <Avatar />
      <Avatar alt="Alira" altMax={2} />
    </Styled.Wrap>
  )
}

AvatarNotImage.displayName = 'AvatarNotImage'

export default AvatarNotImage
