import type { TextFieldPlaceholderAndLabelTextProps } from './TextFieldPlaceholderAndLabelText.types'

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
const TextFieldPlaceholderAndLabelText = (
  props: TextFieldPlaceholderAndLabelTextProps
) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <TextField />
      <TextField labelText="labelText" />
      <TextField placeholder="placeholder" />
    </div>
  )
}

TextFieldPlaceholderAndLabelText.displayName =
  'TextFieldPlaceholderAndLabelText'

export default withStyles(styles)(TextFieldPlaceholderAndLabelText)
