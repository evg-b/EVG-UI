import type { SkeletonBaseProps } from './SkeletonBase.types'

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
const SkeletonBase = (props: SkeletonBaseProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Skeleton />
      <Skeleton width={160} />
      <Skeleton width={100} borderRadius={16} />
    </div>
  )
}

SkeletonBase.displayName = 'SkeletonBase'

export default withStyles(styles)(SkeletonBase)
