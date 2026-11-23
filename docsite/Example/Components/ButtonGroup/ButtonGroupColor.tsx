import { Button, ButtonGroup } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonGroupColor = () => {
  return (
    <Styled.CenteredColumn>
      <ButtonGroup variant="text" color="primary">
        <Button>primary 1</Button>
        <Button>primary 2</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="success">
        <Button>success 1</Button>
        <Button>success 2</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="fail">
        <Button>fail 1</Button>
        <Button>fail 2</Button>
      </ButtonGroup>
    </Styled.CenteredColumn>
  )
}

ButtonGroupColor.displayName = 'ButtonGroupColor'

export default ButtonGroupColor
