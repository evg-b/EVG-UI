import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldError = () => {
  return (
    <Styled.Row>
      <TextField
        error
        helperText="Error helper text"
        labelText="Error"
        placeholder="placeholder"
        color="primary"
        value="Error"
      />
      <TextField
        error
        outlined
        labelText="Error"
        placeholder="placeholder"
        color="primary"
        value="Error"
      />
    </Styled.Row>
  )
}

TextFieldError.displayName = 'TextFieldError'

export default TextFieldError
