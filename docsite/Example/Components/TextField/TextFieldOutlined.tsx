import type { TextFieldOutlinedProps } from './TextFieldOutlined.types'

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
const TextFieldOutlined = (props: TextFieldOutlinedProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <TextField labelText="Outlined" placeholder="Outlined" outlined />
      <TextField
        disabled
        labelText="Disabled"
        placeholder="Outlined"
        outlined
        value="Disabled"
      />
    </div>
  )
}

TextFieldOutlined.displayName = 'TextFieldOutlined'

export default withStyles(styles)(TextFieldOutlined)
