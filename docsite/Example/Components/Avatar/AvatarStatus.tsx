import { Avatar } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from '../../ExampleLayout.styled'

const AvatarStatus = () => {
  return (
    <Styled.Wrap>
      <Avatar src={useBaseUrl('/source/Avatar/7.jpg')} />
      <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} status />
    </Styled.Wrap>
  )
}

AvatarStatus.displayName = 'AvatarStatus'

export default AvatarStatus
