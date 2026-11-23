import { Button } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonElevation = () => {
  return (
    <Styled.Row>
      <Button variant="contained" color="primary">
        elevation
      </Button>
      <Button variant="contained" color="primary" elevation={false}>
        no elevation
      </Button>
    </Styled.Row>
  )
}

ButtonElevation.displayName = 'ButtonElevation'

export default ButtonElevation
