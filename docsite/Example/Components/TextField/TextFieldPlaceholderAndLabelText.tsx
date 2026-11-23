import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldPlaceholderAndLabelText = () => {
  return (
    <Styled.Row>
      <TextField />
      <TextField labelText="labelText" />
      <TextField placeholder="placeholder" />
    </Styled.Row>
  )
}

TextFieldPlaceholderAndLabelText.displayName =
  'TextFieldPlaceholderAndLabelText'

export default TextFieldPlaceholderAndLabelText
