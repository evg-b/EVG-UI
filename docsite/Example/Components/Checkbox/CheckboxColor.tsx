import { Checkbox } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const CheckboxColor = () => {
  return (
    <Styled.Row>
      <Checkbox color="default" defaultChecked />
      <Checkbox color="primary" defaultChecked />
      <Checkbox color="warn" defaultChecked />
      <Checkbox color="success" defaultChecked />
      <Checkbox color="fail" defaultChecked />
    </Styled.Row>
  )
}

CheckboxColor.displayName = 'CheckboxColor'

export default CheckboxColor
