import type { SelectEmptyOptionProps } from './SelectEmptyOption.types'

import { Select, SelectOption, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const SelectEmptyOption = (props: SelectEmptyOptionProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Select labelText="Select" emptyOption>
        <SelectOption value={10}>Item - 1</SelectOption>
        <SelectOption value={20}>Item - 2</SelectOption>
        <SelectOption value={30}>Item - 3</SelectOption>
      </Select>
    </div>
  )
}

SelectEmptyOption.displayName = 'SelectEmptyOption'

export default withStyles(styles)(SelectEmptyOption)
