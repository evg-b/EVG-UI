import { Switch } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SwitchColor = () => {
  return (
    <Styled.Row>
      <Switch color="default" defaultChecked />
      <Switch color="primary" defaultChecked />
      <Switch color="warn" defaultChecked />
      <Switch color="success" defaultChecked />
      <Switch color="fail" defaultChecked />
    </Styled.Row>
  )
}

SwitchColor.displayName = 'SwitchColor'

export default SwitchColor
