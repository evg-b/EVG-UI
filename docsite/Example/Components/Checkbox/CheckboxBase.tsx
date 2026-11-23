import { Checkbox } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const CheckboxBase = () => {
  return (
    <Styled.Row>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox checked />
      <Checkbox defaultChecked disabled />
      <Checkbox defaultChecked indeterminate />
    </Styled.Row>
  )
}

CheckboxBase.displayName = 'CheckboxBase'

export default CheckboxBase
