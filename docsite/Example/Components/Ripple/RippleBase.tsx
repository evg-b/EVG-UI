import { Ripple } from '@evg-b/evg-ui'

import * as Styled from './Ripple.styled'

const RippleBase = () => {
  return (
    <Styled.Surface>
      <Ripple />
    </Styled.Surface>
  )
}

RippleBase.displayName = 'RippleBase'

export default RippleBase
