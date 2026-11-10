import React, { forwardRef } from 'react'
import type { ListItemAvatarProps } from './ListItemAvatar.types'
import * as Styled from './ListItemAvatar.styled'

// Компонент для правильного позиционирования и отображения Avatar в list.
const ListItemAvatar = forwardRef<HTMLElement, ListItemAvatarProps>(
  function ListItemAvatar(props, ref) {
    const { className, children, component, ...otherProps } = props
    let Component = component
    return (
      <Styled.Root
        as={Component}
        {...otherProps}
        ref={ref}
        className={className}>
        {children}
      </Styled.Root>
    )
  }
)
ListItemAvatar.defaultProps = {
  component: 'span'
}
ListItemAvatar.displayName = 'ListItemAvatarEVG'
export default ListItemAvatar
