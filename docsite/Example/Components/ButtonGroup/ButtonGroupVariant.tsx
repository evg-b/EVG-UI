import { Button, ButtonGroup } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonGroupVariant = () => {
  return (
    <Styled.CenteredColumn>
      <ButtonGroup variant="text">
        <Button>default 1</Button>
        <Button>default 2</Button>
        <Button>default 3</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary">
        <Button>contained 1</Button>
        <Button>contained 2</Button>
        <Button>contained 3</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="primary">
        <Button>outlined 1</Button>
        <Button>outlined 2</Button>
        <Button>outlined 3</Button>
      </ButtonGroup>
    </Styled.CenteredColumn>
  )
}

ButtonGroupVariant.displayName = 'ButtonGroupVariant'

export default ButtonGroupVariant
