import { Avatar } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from '../../ExampleLayout.styled'

const AvatarMultiple = () => {
  return (
    <Styled.SpaciousRow>
      <Avatar
        size={55}
        srcs={[
          useBaseUrl('/source/Avatar/3.jpg'),
          useBaseUrl('/source/Avatar/12.jpg'),
          useBaseUrl('/source/Avatar/11.jpg'),
          useBaseUrl('/source/Avatar/10.jpg')
        ]}
      />
      <Avatar
        size={55}
        srcs={[
          useBaseUrl('/source/Avatar/3.jpg'),
          useBaseUrl('/source/Avatar/12.jpg'),
          useBaseUrl('/source/Avatar/11.jpg')
        ]}
      />
      <Avatar
        size={55}
        srcs={[
          useBaseUrl('/source/Avatar/3.jpg'),
          useBaseUrl('/source/Avatar/12.jpg')
        ]}
      />
      <Avatar size={55} srcs={[useBaseUrl('/source/Avatar/3.jpg')]} />
    </Styled.SpaciousRow>
  )
}

AvatarMultiple.displayName = 'AvatarMultiple'

export default AvatarMultiple
