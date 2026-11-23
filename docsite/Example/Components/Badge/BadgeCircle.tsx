import { Avatar, Badge } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const BadgeDot = () => {
  return (
    <Styled.Row>
      <Badge count={2}>
        <Avatar />
      </Badge>
      <Badge count={2} dot>
        <Avatar />
      </Badge>
      <Badge count={2} circle>
        <Avatar />
      </Badge>
      <Badge count={2} dot circle>
        <Avatar />
      </Badge>
    </Styled.Row>
  )
}

BadgeDot.displayName = 'BadgeDot'

export default BadgeDot
