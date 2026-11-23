import { Badge, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const BadgeDot = () => {
  return (
    <Styled.Row>
      <Badge count={2}>
        <Icon name="Notifications" />
      </Badge>
      <Badge count={2} dot>
        <Icon name="Notifications" />
      </Badge>
    </Styled.Row>
  )
}

BadgeDot.displayName = 'BadgeDot'

export default BadgeDot
