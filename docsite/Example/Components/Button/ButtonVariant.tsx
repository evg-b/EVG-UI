import { Button } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonVariant = () => {
  return (
    <Styled.Row>
      <Button variant="text" color="primary">
        default
      </Button>
      <Button variant="contained" color="primary">
        Button
      </Button>
      <Button variant="outlined" color="primary">
        outlined
      </Button>
    </Styled.Row>
  )
}

ButtonVariant.displayName = 'ButtonVariant'

export default ButtonVariant
