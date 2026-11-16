import type { TextFieldRoundProps } from './TextFieldRound.types'

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
const TextFieldRound = (props: TextFieldRoundProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <TextField
        round
        labelText="round base"
        placeholder="placeholder"
        color="primary"
      />
      <TextField
        round
        labelText="round outlined"
        placeholder="placeholder"
        color="primary"
        outlined
      />
    </div>
  )
}

TextFieldRound.displayName = 'TextFieldRound'

export default withStyles(styles)(TextFieldRound)
