import type { SwitchColorProps } from './SwitchColor.types'

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
const SwitchColor = (props: SwitchColorProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Switch color="default" defaultChecked />
      <Switch color="primary" defaultChecked />
      <Switch color="warn" defaultChecked />
      <Switch color="success" defaultChecked />
      <Switch color="fail" defaultChecked />
    </div>
  )
}

SwitchColor.displayName = 'SwitchColor'

export default withStyles(styles)(SwitchColor)
