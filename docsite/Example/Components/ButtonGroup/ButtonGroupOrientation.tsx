import { Button, ButtonGroup } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonGroupOrientation = () => {
  return (
    <Styled.CenteredColumn>
      <ButtonGroup orientation="horizontal" variant="contained" color="primary">
        <Button>horizont 1</Button>
        <Button>horizont 2</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="contained" color="primary">
        <Button>vertical 1</Button>
        <Button>vertical 2</Button>
      </ButtonGroup>
    </Styled.CenteredColumn>
  )
}

ButtonGroupOrientation.displayName = 'ButtonGroupOrientation'

export default ButtonGroupOrientation
