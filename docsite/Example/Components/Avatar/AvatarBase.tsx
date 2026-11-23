import { Avatar } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from '../../ExampleLayout.styled'

const AvatarBase = () => {
  return (
    <Styled.Wrap>
      <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} />
      <Avatar />
    </Styled.Wrap>
  )
}

AvatarBase.displayName = 'AvatarBase'

export default AvatarBase
