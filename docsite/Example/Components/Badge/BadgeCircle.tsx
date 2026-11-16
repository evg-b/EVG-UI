import type { BadgeDotProps } from './BadgeDot.types'

import { Avatar, Badge, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const BadgeDot = (props: BadgeDotProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Badge count={2}>
        <Avatar />
      </Badge>
      <Badge count={2} dot>
        <Avatar />
      </Badge>
      <Badge count={2} circle>
        <Avatar />
      </Badge>
      <Badge count={2} dot circle>
        <Avatar />
      </Badge>
    </div>
  )
}

BadgeDot.displayName = 'BadgeDot'

export default withStyles(styles)(BadgeDot)
