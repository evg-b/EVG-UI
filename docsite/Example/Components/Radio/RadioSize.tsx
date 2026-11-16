import type { RadioSizeProps } from './RadioSize.types'

import { Radio, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    '&>*': {
      margin: '5px'
    }
  }
}
const RadioSize = (props: RadioSizeProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Radio size="small" color="primary" />
      <Radio size="medium" color="primary" />
      <Radio size="large" color="primary" />
      <Radio size="extra" color="primary" />
    </div>
  )
}

RadioSize.displayName = 'RadioSize'

export default withStyles(styles)(RadioSize)
