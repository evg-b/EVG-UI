import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldOutlined = () => {
  return (
    <Styled.Row>
      <TextField labelText="Outlined" placeholder="Outlined" outlined />
      <TextField
        disabled
        labelText="Disabled"
        placeholder="Outlined"
        outlined
        value="Disabled"
      />
    </Styled.Row>
  )
}

TextFieldOutlined.displayName = 'TextFieldOutlined'

export default TextFieldOutlined
