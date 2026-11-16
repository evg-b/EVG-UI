import type { TextFieldFullWidthProps } from './TextFieldFullWidth.types'

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
const TextFieldFullWidth = (props: TextFieldFullWidthProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <TextField
        fullWidth
        labelText="multiline fullWidth"
        placeholder="placeholder"
        color="primary"
      />
      <TextField
        fullWidth
        labelText="multiline fullWidth"
        placeholder="placeholder"
        color="primary"
        outlined
      />
    </div>
  )
}

TextFieldFullWidth.displayName = 'TextFieldFullWidth'

export default withStyles(styles)(TextFieldFullWidth)
