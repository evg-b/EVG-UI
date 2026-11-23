import { TextField } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldMultiline = () => {
  return (
    <Styled.FieldGroups>
      <div>
        <TextField
          multiline
          labelText="multiline base"
          placeholder="placeholder"
          color="primary"
        />
        <TextField
          rows={4}
          multiline
          labelText="multiline base"
          placeholder="placeholder"
          color="primary"
        />
      </div>
      <div>
        <TextField
          multiline
          labelText="multiline outlined"
          placeholder="placeholder"
          color="primary"
          outlined
        />
        <TextField
          rows={4}
          multiline
          labelText="multiline outlined"
          placeholder="placeholder"
          color="primary"
          outlined
        />
      </div>
    </Styled.FieldGroups>
  )
}

TextFieldMultiline.displayName = 'TextFieldMultiline'

export default TextFieldMultiline
