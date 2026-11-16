import type { CheckboxBaseProps } from './CheckboxBase.types'

import { Checkbox, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const CheckboxBase = (props: CheckboxBaseProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox checked />
      <Checkbox defaultChecked disabled />
      <Checkbox defaultChecked indeterminate />
    </div>
  )
}

CheckboxBase.displayName = 'CheckboxBase'

export default withStyles(styles)(CheckboxBase)
