import type { RippleBaseProps } from './RippleBase.types'

import { Elevation, Ripple, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    ...Elevation(2),
    width: '300px',
    height: '300px',
    position: 'relative'
  }
}

const RippleBase = (props: RippleBaseProps) => {
  const { classes } = props

  return (
    <div className={classes.base}>
      <Ripple />
    </div>
  )
}

RippleBase.displayName = 'RippleBase'

export default withStyles(styles)(RippleBase)
