import type { TextFieldBaseProps } from './TextFieldBase.types'

import { TextField, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const TextFieldBase = (props: TextFieldBaseProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <TextField labelText="Base TextField" placeholder="placeholder" />
      <TextField
        disabled
        labelText="Disabled"
        placeholder="placeholder"
        value="Disabled"
      />
    </div>
  )
}

TextFieldBase.displayName = 'TextFieldBase'

export default withStyles(styles)(TextFieldBase)
