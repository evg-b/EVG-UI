import React, { forwardRef } from 'react'
import Popup from '../Popup/Popup'
import List from '../List/List'
import type { MenuProps } from './Menu.types'

import * as Styled from './Menu.styled'
const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(props, ref) {
  const { className, children, ...otherProps } = props
  return (
    <Popup ref={ref} className={className} mode="click" {...otherProps}>
      <Styled.List as={List}>{children}</Styled.List>
    </Popup>
  )
})
Menu.defaultProps = {}
Menu.displayName = 'MenuEVG'
export default Menu
