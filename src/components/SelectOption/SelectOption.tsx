import ListItem from '../ListItem/ListItem'
import ListItemText from '../ListItemText/ListItemText'

import type { SelectOptionProps } from './SelectOption.types'

// Компонент для отображения value в select.

const SelectOption = ({
  ref,
  className,
  children,
  value,
  ...otherProps
}: SelectOptionProps) => {
  return (
    <ListItem ref={ref} className={className} value={value} {...otherProps}>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  )
}

SelectOption.displayName = 'SelectOptionEVG'
export default SelectOption
