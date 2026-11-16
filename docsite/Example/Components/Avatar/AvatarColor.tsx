import type { AvatarColorProps } from './AvatarColor.types'

import { Avatar, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const AvatarColor = (props: AvatarColorProps) => {
  const { classes } = props

  return (
    <div className={classes.base}>
      <Avatar alt="evg b" />
      <Avatar alt="Alira" color="primary" />
      <Avatar alt="Rick" color="success" />
    </div>
  )
}

AvatarColor.displayName = 'AvatarColor'

export default withStyles(styles)(AvatarColor)
