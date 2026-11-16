import type { AvatarBaseProps } from './AvatarBase.types'

import { Avatar, withStyles } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const AvatarBase = (props: AvatarBaseProps) => {
  const { classes } = props

  return (
    <div className={classes.base}>
      <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} />
      <Avatar />
    </div>
  )
}

AvatarBase.displayName = 'AvatarBase'

export default withStyles(styles)(AvatarBase)
