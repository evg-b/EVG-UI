import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldFullWidth = () => {
  return (
    <Styled.Row>
      <TextField
        fullWidth
        labelText="multiline fullWidth"
        placeholder="placeholder"
        color="primary"
      />
      <TextField
        fullWidth
        labelText="multiline fullWidth"
        placeholder="placeholder"
        color="primary"
        outlined
      />
    </Styled.Row>
  )
}

TextFieldFullWidth.displayName = 'TextFieldFullWidth'

export default TextFieldFullWidth
