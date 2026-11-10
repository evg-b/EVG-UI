import { Children, cloneElement, isValidElement } from 'react'

import Scroll from '../Scroll/Scroll'
import type { ListItemProps } from '../ListItem/ListItem.types'

import type { ListProps } from './List.types'

import * as Styled from './List.styled'

// Списки представляют собой множество компонентов с однородными типами данных в вертикальной плоскости.
// Элементы списка поддерживают события взаимодействия мыши и жестов.

const List = ({
  ref,
  className,
  children,
  color = 'default',
  ...otherProps
}: ListProps) => {
  return (
    <Styled.Root
      as={Scroll}
      ref={ref}
      color={color === 'default' ? '#000000' : color}
      {...otherProps}
      className={className}>
      {Children.map(children, (child) =>
        isValidElement<ListItemProps>(child)
          ? cloneElement(child, {
              color: child.props.color ?? color
            })
          : child
      )}
    </Styled.Root>
  )
}

List.displayName = 'ListEVG'
export default List
