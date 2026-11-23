import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldColor = () => {
  return (
    <Styled.Row>
      <TextField
        color="primary"
        labelText="primary"
        placeholder="placeholder"
      />
      <TextField
        color="fail"
        labelText="fail"
        placeholder="placeholder"
        outlined
      />
    </Styled.Row>
  )
}

TextFieldColor.displayName = 'TextFieldColor'

export default TextFieldColor
