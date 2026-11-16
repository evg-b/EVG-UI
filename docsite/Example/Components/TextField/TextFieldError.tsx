import type { TextFieldErrorProps } from './TextFieldError.types'

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
const TextFieldError = (props: TextFieldErrorProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <TextField
        error
        helperText="Error helper text"
        labelText="Error"
        placeholder="placeholder"
        color="primary"
        value="Error"
      />
      <TextField
        error
        outlined
        labelText="Error"
        placeholder="placeholder"
        color="primary"
        value="Error"
      />
    </div>
  )
}

TextFieldError.displayName = 'TextFieldError'

export default withStyles(styles)(TextFieldError)
