import type { SkeletonAnimationProps } from './SkeletonAnimation.types'

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
const SkeletonAnimation = (props: SkeletonAnimationProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Skeleton animation={true} />
      <Skeleton animation={false} />
    </div>
  )
}

SkeletonAnimation.displayName = 'SkeletonAnimation'

export default withStyles(styles)(SkeletonAnimation)
