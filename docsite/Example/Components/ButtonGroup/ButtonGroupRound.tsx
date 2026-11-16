import type { ButtonGroupRoundProps } from './ButtonGroupRound.types'

import { Button, ButtonGroup, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&>*': {
      margin: '5px'
    }
  }
}
const ButtonGroupRound = (props: ButtonGroupRoundProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
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
    </div>
  )
}

ButtonGroupRound.displayName = 'ButtonGroupRound'

export default withStyles(styles)(ButtonGroupRound)
