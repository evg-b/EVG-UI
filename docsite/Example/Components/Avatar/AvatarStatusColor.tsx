import { Avatar } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from '../../ExampleLayout.styled'

const AvatarStatusColor = () => {
  return (
    <Styled.Wrap>
      <Avatar
        src={useBaseUrl('/source/Avatar/1.jpg')}
        status
        statusColor="default"
      />
      <Avatar
        src={useBaseUrl('/source/Avatar/1.jpg')}
        status
        statusColor="primary"
      />
      <Avatar
        src={useBaseUrl('/source/Avatar/1.jpg')}
        status
        statusColor="warn"
      />
      <Avatar
        src={useBaseUrl('/source/Avatar/1.jpg')}
        status
        statusColor="success"
      />
      <Avatar
        src={useBaseUrl('/source/Avatar/1.jpg')}
        status
        statusColor="fail"
      />
    </Styled.Wrap>
  )
}

AvatarStatusColor.displayName = 'AvatarStatusColor'

export default AvatarStatusColor
