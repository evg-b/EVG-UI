import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldHelperText = () => {
  return (
    <Styled.Row>
      <TextField
        helperText="helperText"
        labelText="helperText"
        placeholder="placeholder"
        color="primary"
      />
    </Styled.Row>
  )
}

TextFieldHelperText.displayName = 'TextFieldHelperText'

export default TextFieldHelperText
