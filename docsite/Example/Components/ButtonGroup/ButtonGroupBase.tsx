import type { ButtonGroupBaseProps } from './ButtonGroupBase.types'

import { Button, ButtonGroup, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const ButtonGroupBase = (props: ButtonGroupBaseProps) => {
  const { classes } = props
  return (
    <ButtonGroup variant="contained" color="primary">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  )
}

ButtonGroupBase.displayName = 'ButtonGroupBase'

export default withStyles(styles)(ButtonGroupBase)
