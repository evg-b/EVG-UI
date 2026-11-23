import { Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const IconBase = () => {
  return (
    <Styled.Row>
      <Icon name="ChevronLeft" />
      <Icon name="Close" />
      <Icon name="Check" />
      <Icon name="Cancel" />
      <Icon name="Fullscreen" />
      <Icon name="Menu" />
      <Icon name="MoreVert" />
      <Icon name="ExpandMore" />
      <Icon name="ArrowUpward" />
    </Styled.Row>
  )
}

IconBase.displayName = 'IconBase'

export default IconBase
