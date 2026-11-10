import type { ListItemActionProps } from './ListItemAction.types'

import * as Styled from './ListItemAction.styled'

// Компонент для правильного позиционирования и отображения action в list.
// Таких как Button, Checkbox, Radio, Switch и др.

const ListItemAction = ({
  ref,
  className,
  children,
  component = 'span',
  position = 'end',
  ...otherProps
}: ListItemActionProps) => {
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

ListItemAction.displayName = 'ListItemActionEVG'
export default ListItemAction
