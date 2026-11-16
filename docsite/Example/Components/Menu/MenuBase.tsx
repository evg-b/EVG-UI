import type { MenuBaseProps } from './MenuBase.types'

import { withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const MenuBase = (props: MenuBaseProps) => {
  const { classes } = props
  return <div className={classes.base}>MenuBase</div>
}

MenuBase.displayName = 'MenuBase'

export default withStyles(styles)(MenuBase)
