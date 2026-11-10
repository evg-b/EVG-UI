import Popup from '../Popup/Popup'
import List from '../List/List'

import type { MenuProps } from './Menu.types'

import * as Styled from './Menu.styled'

const Menu = ({ ref, className, children, ...otherProps }: MenuProps) => {
  return (
    <Popup ref={ref} className={className} mode="click" {...otherProps}>
      <Styled.List as={List}>{children}</Styled.List>
    </Popup>
  )
}

Menu.displayName = 'MenuEVG'
export default Menu
