import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldBase = () => {
  return (
    <Styled.Row>
      <TextField labelText="Base TextField" placeholder="placeholder" />
      <TextField
        disabled
        labelText="Disabled"
        placeholder="placeholder"
        value="Disabled"
      />
    </Styled.Row>
  )
}

TextFieldBase.displayName = 'TextFieldBase'

export default TextFieldBase
