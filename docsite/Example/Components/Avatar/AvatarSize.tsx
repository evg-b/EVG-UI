import type { AvatarSizeProps } from './AvatarSize.types'

import { Avatar, withStyles } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const AvatarSize = (props: AvatarSizeProps) => {
  const { classes } = props

  return (
    <div className={classes.base}>
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={20} />
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={30} />
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={50} />
      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={60} />
    </div>
  )
}

AvatarSize.displayName = 'AvatarSize'

export default withStyles(styles)(AvatarSize)
