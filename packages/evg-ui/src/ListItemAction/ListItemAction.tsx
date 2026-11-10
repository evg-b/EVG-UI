import React, { forwardRef } from 'react'
import type { ListItemActionProps } from './ListItemAction.types'
import * as Styled from './ListItemAction.styled'

// Компонент для правильного позиционирования и отображения action в list.

// Таких как Button, Checkbox, Radio, Switch и др.
const ListItemAction = forwardRef<HTMLElement, ListItemActionProps>(
  function ListItemAction(props, ref) {
    const { className, children, component, position, ...otherProps } = props
    let Component = component
    return (
      <Styled.Root
        as={Component}
        {...otherProps}
        ref={ref}
        className={className}
        $position={position}>
        {children}
      </Styled.Root>
    )
  }
)
ListItemAction.defaultProps = {
  component: 'span',
  position: 'end'
}
ListItemAction.displayName = 'ListItemActionEVG'
export default ListItemAction
