import { Button, ButtonGroup } from '@evg-b/evg-ui'

const ButtonGroupBase = () => {
  return (
    <ButtonGroup variant="contained" color="primary">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  )
}

ButtonGroupBase.displayName = 'ButtonGroupBase'

export default ButtonGroupBase
