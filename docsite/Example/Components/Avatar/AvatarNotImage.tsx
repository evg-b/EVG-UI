import type { AvatarNotImageProps } from './AvatarNotImage.types'

import { Avatar, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const AvatarNotImage = (props: AvatarNotImageProps) => {
  const { classes } = props

  return (
    <div className={classes.base}>
      <Avatar alt="evg b" />
      <Avatar />
      <Avatar alt="Alira" altMax={2} />
    </div>
  )
}

AvatarNotImage.displayName = 'AvatarNotImage'

export default withStyles(styles)(AvatarNotImage)
