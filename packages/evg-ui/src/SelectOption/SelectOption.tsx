import React, { forwardRef } from 'react'
import ListItem from '../ListItem/ListItem'
import ListItemText from '../ListItemText/ListItemText'
import type { SelectOptionProps } from './SelectOption.types'

// Компонент для отображения value в select.
const SelectOption = forwardRef<HTMLElement, SelectOptionProps>(
  function SelectOption(props, ref) {
    const { className, children, value, ...otherProps } = props
    return (
      <ListItem ref={ref} className={className} value={value} {...otherProps}>
        <ListItemText>{children}</ListItemText>
      </ListItem>
    )
  }
)
SelectOption.defaultProps = {}
SelectOption.displayName = 'SelectOptionEVG'
export default SelectOption
