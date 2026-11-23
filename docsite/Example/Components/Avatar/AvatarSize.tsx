import { Avatar } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from '../../ExampleLayout.styled'

const AvatarSize = () => {
  return (
    <Styled.Wrap>
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={20} />
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={30} />
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={50} />
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={60} />
    </Styled.Wrap>
  )
}

AvatarSize.displayName = 'AvatarSize'

export default AvatarSize
