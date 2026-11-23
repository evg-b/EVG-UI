import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldMaxCount = () => {
  return (
    <Styled.Row>
      <TextField
        maxCount={5}
        helperText="maxCount"
        labelText="maxCount"
        placeholder="placeholder"
        color="primary"
      />
    </Styled.Row>
  )
}

TextFieldMaxCount.displayName = 'TextFieldMaxCount'

export default TextFieldMaxCount
