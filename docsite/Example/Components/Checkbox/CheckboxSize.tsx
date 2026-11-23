import { Checkbox } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const CheckboxSize = () => {
  return (
    <Styled.InlineGroup>
      <Checkbox size="small" color="primary" defaultChecked />
      <Checkbox size="medium" color="primary" defaultChecked />
      <Checkbox size="large" color="primary" defaultChecked />
      <Checkbox size="extra" color="primary" defaultChecked />
    </Styled.InlineGroup>
  )
}

CheckboxSize.displayName = 'CheckboxSize'

export default CheckboxSize
