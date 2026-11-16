import type { BadgeBaseProps } from './BadgeBase.types'

import { Badge, withStyles, Icon } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const BadgeBase = (props: BadgeBaseProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Icon name="Notifications" />
      <Badge count={3} color="primary">
        <Icon name="Notifications" />
      </Badge>
    </div>
  )
}

BadgeBase.displayName = 'BadgeBase'

export default withStyles(styles)(BadgeBase)
