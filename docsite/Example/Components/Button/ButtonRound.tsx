import { Button } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonRound = () => {
  return (
    <Styled.Row>
      <Button variant="text" color="primary" round>
        default
      </Button>
      <Button variant="contained" color="primary" round>
        contained
      </Button>
      <Button variant="outlined" color="primary" round>
        outlined
      </Button>
    </Styled.Row>
  )
}

ButtonRound.displayName = 'ButtonRound'

export default ButtonRound
