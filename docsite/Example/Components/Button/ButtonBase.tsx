import { Button } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonBase = () => {
  return (
    <Styled.Row>
      <Button>text</Button>
      <Button variant="contained" color="primary">
        contained
      </Button>
      <Button variant="contained" color="primary" disabled>
        disabled
      </Button>
      <Button variant="contained" href="#base-button">
        Link
      </Button>
    </Styled.Row>
  )
}

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase
