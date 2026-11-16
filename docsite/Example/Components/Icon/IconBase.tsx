import type { IconBaseProps } from './IconBase.types'

import { withStyles, Icon } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const IconBase = (props: IconBaseProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Icon name="ChevronLeft" />
      <Icon name="Close" />
      <Icon name="Check" />
      <Icon name="Cancel" />
      <Icon name="Fullscreen" />
      <Icon name="Menu" />
      <Icon name="MoreVert" />
      <Icon name="ExpandMore" />
      <Icon name="ArrowUpward" />
    </div>
  )
}

IconBase.displayName = 'IconBase'

export default withStyles(styles)(IconBase)
