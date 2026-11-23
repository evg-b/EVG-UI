import { Badge, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const BadgeMax = () => {
  return (
    <Styled.Row>
      <Badge count={1000} max={9}>
        <Icon name="Notifications" />
      </Badge>
      <Badge count={1000} max={99}>
        <Icon name="Notifications" />
      </Badge>
      <Badge count={1000} max={999}>
        <Icon name="Notifications" />
      </Badge>
    </Styled.Row>
  )
}

BadgeMax.displayName = 'BadgeMax'

export default BadgeMax
