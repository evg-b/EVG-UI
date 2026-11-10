import type { ListItemAvatarProps } from './ListItemAvatar.types'

import * as Styled from './ListItemAvatar.styled'

// Компонент для правильного позиционирования и отображения Avatar в list.

const ListItemAvatar = ({
  ref,
  className,
  children,
  component = 'span',
  ...otherProps
}: ListItemAvatarProps) => {
  let Component = component
  return (
    <Styled.Root as={Component} {...otherProps} ref={ref} className={className}>
      {children}
    </Styled.Root>
  )
}

ListItemAvatar.displayName = 'ListItemAvatarEVG'
export default ListItemAvatar
