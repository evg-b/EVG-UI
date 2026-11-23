import { Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const IconSize = () => {
  return (
    <Styled.Row>
      <Icon name="Cancel" size="small" />
      <Icon name="Cancel" size="medium" />
      <Icon name="Cancel" size="large" />
      <Icon name="Cancel" size="extra" />
    </Styled.Row>
  )
}

IconSize.displayName = 'IconSize'

export default IconSize
