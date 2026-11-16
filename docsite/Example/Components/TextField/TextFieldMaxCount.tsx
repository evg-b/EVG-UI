import type { TextFieldMaxCountProps } from './TextFieldMaxCount.types'

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
const TextFieldMaxCount = (props: TextFieldMaxCountProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <TextField
        maxCount={5}
        helperText="maxCount"
        labelText="maxCount"
        placeholder="placeholder"
        color="primary"
      />
    </div>
  )
}

TextFieldMaxCount.displayName = 'TextFieldMaxCount'

export default withStyles(styles)(TextFieldMaxCount)
