import { Badge, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const BadgeColor = () => {
  return (
    <Styled.Row>
      <Badge count={3}>
        <Icon name="Notifications" />
      </Badge>
      <Badge count={3} color="primary">
        <Icon name="Notifications" />
      </Badge>
      <Badge count={3} color="warn">
        <Icon name="Notifications" />
      </Badge>
      <Badge count={3} color="success">
        <Icon name="Notifications" />
      </Badge>
    </Styled.Row>
  )
}

BadgeColor.displayName = 'BadgeColor'

export default BadgeColor
