import type { SwitchBaseProps } from './SwitchBase.types'

import { Switch, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '10px'
    }
  }
}
const SwitchBase = (props: SwitchBaseProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Switch />
      <Switch defaultChecked />
      <Switch checked />
      <Switch disabled checked />
    </div>
  )
}

SwitchBase.displayName = 'SwitchBase'

export default withStyles(styles)(SwitchBase)
