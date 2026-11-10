import React, { useState, useEffect, useRef, forwardRef } from 'react'
import ListItem from '../ListItem/ListItem'
import ListItemText from '../ListItemText/ListItemText'
import type { MenuItemProps } from './MenuItem.types'
const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem(props, ref) {
    const { className, children, ...otherProps } = props
    return (
      <ListItem ref={ref} className={className} button>
        <ListItemText {...otherProps}>{children}</ListItemText>
      </ListItem>
    )
  }
)
MenuItem.defaultProps = {}
MenuItem.displayName = 'MenuItemEVG'
export default MenuItem
