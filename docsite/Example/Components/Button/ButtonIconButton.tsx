import type { ButtonIconButtonProps } from './ButtonIconButton.types'

import { IconButton, withStyles, Icon } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const ButtonIconButton = (props: ButtonIconButtonProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <IconButton>
        <Icon name="Close" />
      </IconButton>
      <IconButton color="primary">
        <Icon name="Cancel" />
      </IconButton>
      <IconButton color="warn">
        <Icon name="Menu" />
      </IconButton>
      <IconButton color="success">
        <Icon name="Fullscreen" />
      </IconButton>
      <IconButton disabled>
        <Icon name="Visibility" />
      </IconButton>
    </div>
  )
}

ButtonIconButton.displayName = 'ButtonIconButton'

export default withStyles(styles)(ButtonIconButton)
