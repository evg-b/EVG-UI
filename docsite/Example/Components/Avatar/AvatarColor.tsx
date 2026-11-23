import { Avatar } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const AvatarColor = () => {
  return (
    <Styled.Wrap>
      <Avatar alt="evg b" />
      <Avatar alt="Alira" color="primary" />
      <Avatar alt="Rick" color="success" />
    </Styled.Wrap>
  )
}

AvatarColor.displayName = 'AvatarColor'

export default AvatarColor
