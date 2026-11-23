import { TextField, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TextFieldIcon = () => {
  return (
    <Styled.FieldGroups>
      <div>
        <TextField
          leadingIcon={<Icon name="Check" />}
          labelText="TextField"
          placeholder="placeholder"
          color="primary"
        />
        <TextField
          trailingIcon={<Icon name="Close" />}
          labelText="TextField"
          placeholder="placeholder"
          color="primary"
        />
        <TextField
          leadingIcon={<Icon name="Check" />}
          trailingIcon={<Icon name="Close" />}
          labelText="TextField"
          placeholder="placeholder"
          color="primary"
        />
      </div>
      <div>
        <TextField
          leadingIcon={<Icon name="Check" />}
          labelText="TextField outlined"
          placeholder="placeholder"
          color="primary"
          outlined
        />
        <TextField
          trailingIcon={<Icon name="Close" />}
          labelText="TextField outlined"
          placeholder="placeholder"
          color="primary"
          outlined
        />
        <TextField
          leadingIcon={<Icon name="Check" />}
          trailingIcon={<Icon name="Close" />}
          labelText="TextField outlined"
          placeholder="placeholder"
          color="primary"
          outlined
        />
      </div>
    </Styled.FieldGroups>
  )
}

TextFieldIcon.displayName = 'TextFieldIcon'

export default TextFieldIcon
