import { colors, Ripple } from '@evg-b/evg-ui'

import * as Styled from './Ripple.styled'

const RippleColor = () => {
  const gray400 = colors.gray[400]
  const purple600 = colors.purple[600]

  return (
    <Styled.Row>
      <Styled.Sample>
        <Ripple />
      </Styled.Sample>
      <Styled.Sample $background={gray400}>
        <Ripple color={gray400} />
      </Styled.Sample>
      <Styled.Sample $background={purple600}>
        <Ripple color={purple600} />
      </Styled.Sample>
    </Styled.Row>
  )
}

RippleColor.displayName = 'RippleColor'

export default RippleColor
