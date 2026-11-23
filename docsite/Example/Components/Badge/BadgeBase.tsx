import { Badge, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const BadgeBase = () => {
  return (
    <Styled.Row>
      <Icon name="Notifications" />
      <Badge count={3} color="primary">
        <Icon name="Notifications" />
      </Badge>
    </Styled.Row>
  )
}

BadgeBase.displayName = 'BadgeBase'

export default BadgeBase
