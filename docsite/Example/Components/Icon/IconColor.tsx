import { Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const IconColor = () => {
  return (
    <Styled.Row>
      <Icon name="Cancel" color="primary" />
      <Icon name="ChevronLeft" color="warn" />
      <Icon name="Close" color="fail" />
      <Icon name="Check" color="success" />
    </Styled.Row>
  )
}

IconColor.displayName = 'IconColor'

export default IconColor
