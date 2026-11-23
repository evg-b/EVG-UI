import { Radio } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const RadioSize = () => {
  return (
    <Styled.InlineGroup>
      <Radio size="small" color="primary" />
      <Radio size="medium" color="primary" />
      <Radio size="large" color="primary" />
      <Radio size="extra" color="primary" />
    </Styled.InlineGroup>
  )
}

RadioSize.displayName = 'RadioSize'

export default RadioSize
