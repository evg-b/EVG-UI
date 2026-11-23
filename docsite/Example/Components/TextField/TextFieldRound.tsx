import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldRound = () => {
  return (
    <Styled.Row>
      <TextField
        round
        labelText="round base"
        placeholder="placeholder"
        color="primary"
      />
      <TextField
        round
        labelText="round outlined"
        placeholder="placeholder"
        color="primary"
        outlined
      />
    </Styled.Row>
  )
}

TextFieldRound.displayName = 'TextFieldRound'

export default TextFieldRound
