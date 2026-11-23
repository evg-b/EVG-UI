import { colors, Ripple } from '@evg-b/evg-ui'

import * as Styled from './Ripple.styled'

const RippleContrast = () => {
  const purple600 = colors.purple[600]

  return (
    <Styled.Row>
      <Styled.Sample $background={purple600}>
        <Ripple color={purple600} />
      </Styled.Sample>
      <Styled.Sample>
        <Ripple color={purple600} contrast={false} />
      </Styled.Sample>
    </Styled.Row>
  )
}

RippleContrast.displayName = 'RippleContrast'

export default RippleContrast
