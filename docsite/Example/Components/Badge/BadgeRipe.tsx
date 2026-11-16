import type { BadgeRipeProps } from './BadgeRipe.types'

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
const BadgeRipe = (props: BadgeRipeProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Badge count={3}>
        <Icon name="Notifications" />
      </Badge>
      <Badge ripe count={3} />
    </div>
  )
}

BadgeRipe.displayName = 'BadgeRipe'

export default withStyles(styles)(BadgeRipe)
