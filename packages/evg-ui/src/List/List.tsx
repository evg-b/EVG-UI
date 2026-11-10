import React, { forwardRef } from 'react'
import Scroll from '../Scroll/Scroll'
import type { ListProps } from './List.types'
import * as Styled from './List.styled'

// Списки представляют собой множество компонентов с однородными типами данных в вертикальной плоскости.

// Элементы списка поддерживают события взаимодействия мыши и жестов.
const List = forwardRef<HTMLElement, ListProps>(function List(props, ref) {
  const { className, children, color, ...otherProps } = props
  return (
    <Styled.Root
      as={Scroll}
      ref={ref}
      color={color === 'default' ? '#000000' : color}
      {...otherProps}
      className={className}>
      {React.Children.map(
        children,
        (child) =>
          child &&
          React.cloneElement(child, {
            color: child.props.color || color
          })
      )}
    </Styled.Root>
  )
})
List.defaultProps = {
  color: 'default'
}
List.displayName = 'ListEVG'
export default List
