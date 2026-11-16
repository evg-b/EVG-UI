import type { SkeletonAvatarProps } from './SkeletonAvatar.types'

import { Skeleton, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const SkeletonAvatar = (props: SkeletonAvatarProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Skeleton type="avatar" size={20} />
      <Skeleton type="avatar" />
      <Skeleton type="avatar" size={100} />
    </div>
  )
}

SkeletonAvatar.displayName = 'SkeletonAvatar'

export default withStyles(styles)(SkeletonAvatar)
