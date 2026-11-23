import { Switch } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SwitchSize = () => {
  return (
    <Styled.Row>
      <Switch size="small" color="primary" defaultChecked />
      <Switch size="medium" color="primary" defaultChecked />
      <Switch size="large" color="primary" defaultChecked />
      <Switch size="extra" color="primary" defaultChecked />
    </Styled.Row>
  )
}

SwitchSize.displayName = 'SwitchSize'

export default SwitchSize
