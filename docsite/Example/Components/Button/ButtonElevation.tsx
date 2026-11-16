import type { ButtonElevationProps } from './ButtonElevation.types'

import { Button, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const ButtonElevation = (props: ButtonElevationProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Button variant="contained" color="primary">
        elevation
      </Button>
      <Button variant="contained" color="primary" elevation={false}>
        no elevation
      </Button>
    </div>
  )
}

ButtonElevation.displayName = 'ButtonElevation'

export default withStyles(styles)(ButtonElevation)
