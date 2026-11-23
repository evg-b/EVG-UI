import { Switch } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SwitchVariant = () => {
  return (
    <Styled.Row>
      <Switch />
      <Switch />
      <Switch />
    </Styled.Row>
  )
}

SwitchVariant.displayName = 'SwitchVariant'

export default SwitchVariant
