import type { ButtonGroupIconProps } from './ButtonGroupIcon.types'

import { Button, ButtonGroup, withStyles, Icon } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const ButtonGroupIcon = (props: ButtonGroupIconProps) => {
  const { classes } = props
  return (
    <ButtonGroup>
      <Button>
        <Icon name="Menu" />
      </Button>
      <Button>
        <Icon name="Close" />
      </Button>
      <Button>
        <Icon name="Notifications" />
      </Button>
    </ButtonGroup>
  )
}

ButtonGroupIcon.displayName = 'ButtonGroupIcon'

export default withStyles(styles)(ButtonGroupIcon)
