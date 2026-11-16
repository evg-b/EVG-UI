import type { RadioBaseProps } from './RadioBase.types'

import { Radio, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const RadioBase = (props: RadioBaseProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Radio />
      <Radio defaultChecked />
      <Radio disabled />
    </div>
  )
}

RadioBase.displayName = 'RadioBase'

export default withStyles(styles)(RadioBase)
