import { Badge, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const BadgeRipe = () => {
  return (
    <Styled.Row>
      <Badge count={3}>
        <Icon name="Notifications" />
      </Badge>
      <Badge ripe count={3} />
    </Styled.Row>
  )
}

BadgeRipe.displayName = 'BadgeRipe'

export default BadgeRipe
