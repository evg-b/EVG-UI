import React, { forwardRef } from 'react'
import ButtonBase from '../ButtonBase/ButtonBase'
import type { ListItemProps } from './ListItem.types'
import * as Styled from './ListItem.styled'

// Компонент для отображения содержимого в List.
const ListItem = forwardRef<HTMLElement, ListItemProps>(
  function ListItem(props, ref) {
    const {
      className,
      children,
      component,
      color,
      // swiping = false,
      button = true,
      active = false,
      // secondaryText: SecondaryTextProp,
      ...otherProps
    } = props
    const Component = button ? ButtonBase : component
    const componentProp = button ? component : null
    const isButtonSettings = button
      ? {
          active,
          color: color,
          contrast: color === 'default'
        }
      : null // const swipingContainer = (
    //     <div
    //         className={classes.swipingContainer}
    //     >
    //         swiping
    //     </div>
    // )

    return (
      <Styled.Root
        as={Component}
        ref={ref}
        component={componentProp} // {...swipingSettings}
        {...isButtonSettings}
        {...otherProps}
        className={className}
        $color={props.color}
        $active={props.active}>
        {children}
      </Styled.Root>
    )
  }
)
ListItem.defaultProps = {
  component: 'li',
  color: 'default',
  // swiping: false,
  active: false,
  button: true
}
ListItem.displayName = 'ListItemEVG'
export default ListItem
