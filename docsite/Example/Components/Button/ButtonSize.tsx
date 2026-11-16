import type { ButtonSizeProps } from './ButtonSize.types'

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
const ButtonSize = (props: ButtonSizeProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Button variant="contained" color="primary" size="small">
        small
      </Button>
      <Button variant="contained" color="primary" size="medium">
        medium
      </Button>
      <Button variant="contained" color="primary" size="large">
        large
      </Button>
      <Button variant="contained" color="primary" size="extra">
        extra
      </Button>
    </div>
  )
}

ButtonSize.displayName = 'ButtonSize'

export default withStyles(styles)(ButtonSize)
