import type { SwitchVariantProps } from './SwitchVariant.types'

import { Switch, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const SwitchVariant = (props: SwitchVariantProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Switch />
      <Switch />
      <Switch />
    </div>
  )
}

SwitchVariant.displayName = 'SwitchVariant'

export default withStyles(styles)(SwitchVariant)
