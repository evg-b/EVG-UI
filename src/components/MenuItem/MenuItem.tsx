import { useState, useEffect, useRef } from 'react'

import ListItem from '../ListItem/ListItem'
import ListItemText from '../ListItemText/ListItemText'

import type { MenuItemProps } from './MenuItem.types'

const MenuItem = ({
  ref,
  className,
  children,
  ...otherProps
}: MenuItemProps) => {
  return (
    <ListItem ref={ref} className={className} button>
      <ListItemText {...otherProps}>{children}</ListItemText>
    </ListItem>
  )
}

MenuItem.displayName = 'MenuItemEVG'
export default MenuItem
