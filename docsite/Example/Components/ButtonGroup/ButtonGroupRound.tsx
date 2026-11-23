import { Button, ButtonGroup } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonGroupRound = () => {
  return (
    <Styled.CenteredColumn>
      <ButtonGroup round variant="text" color="primary">
        <Button>primary 1</Button>
        <Button>primary 2</Button>
      </ButtonGroup>
      <ButtonGroup round variant="contained" color="success">
        <Button>success 1</Button>
        <Button>success 2</Button>
      </ButtonGroup>
      <ButtonGroup round variant="outlined" color="fail">
        <Button>fail 1</Button>
        <Button>fail 2</Button>
      </ButtonGroup>
    </Styled.CenteredColumn>
  )
}

ButtonGroupRound.displayName = 'ButtonGroupRound'

export default ButtonGroupRound
