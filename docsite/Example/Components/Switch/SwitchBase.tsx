import { Switch } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SwitchBase = () => {
  return (
    <Styled.SpaciousRow>
      <Switch />
      <Switch defaultChecked />
      <Switch checked />
      <Switch disabled checked />
    </Styled.SpaciousRow>
  )
}

SwitchBase.displayName = 'SwitchBase'

export default SwitchBase
