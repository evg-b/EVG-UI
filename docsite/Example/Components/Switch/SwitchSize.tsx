import type { SwitchSizeProps } from './SwitchSize.types'

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
const SwitchSize = (props: SwitchSizeProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Switch size="small" color="primary" defaultChecked />
      <Switch size="medium" color="primary" defaultChecked />
      <Switch size="large" color="primary" defaultChecked />
      <Switch size="extra" color="primary" defaultChecked />
    </div>
  )
}

SwitchSize.displayName = 'SwitchSize'

export default withStyles(styles)(SwitchSize)
