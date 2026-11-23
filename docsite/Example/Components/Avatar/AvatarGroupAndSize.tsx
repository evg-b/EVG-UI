import { Avatar, AvatarGroup } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from '../../ExampleLayout.styled'

const AvatarGroupAndSize = () => {
  return (
    <Styled.SpaciousRow>
      <AvatarGroup size={25} max={3}>
        <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />
      </AvatarGroup>
      <AvatarGroup max={3}>
        <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />
      </AvatarGroup>
      <AvatarGroup size={55} max={3}>
        <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />
        <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />
      </AvatarGroup>
    </Styled.SpaciousRow>
  )
}

AvatarGroupAndSize.displayName = 'AvatarGroupAndSize'

export default AvatarGroupAndSize
