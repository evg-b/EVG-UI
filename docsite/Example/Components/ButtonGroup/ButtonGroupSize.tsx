import { Button, ButtonGroup } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonGroupSize = () => {
  return (
    <Styled.CenteredColumn>
      <ButtonGroup size="small" variant="contained" color="primary">
        <Button>small 1</Button>
        <Button>small 2</Button>
        <Button>small 3</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary">
        <Button>medium 1</Button>
        <Button>medium 2</Button>
        <Button>medium 3</Button>
      </ButtonGroup>
      <ButtonGroup size="large" variant="contained" color="primary">
        <Button>large 1</Button>
        <Button>large 2</Button>
        <Button>large 3</Button>
      </ButtonGroup>
    </Styled.CenteredColumn>
  )
}

ButtonGroupSize.displayName = 'ButtonGroupSize'

export default ButtonGroupSize
