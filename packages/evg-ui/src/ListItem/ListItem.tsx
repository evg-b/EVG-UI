import ButtonBase from '../ButtonBase/ButtonBase'

import type { ListItemProps } from './ListItem.types'

import * as Styled from './ListItem.styled'

// Компонент для отображения содержимого в List.

const ListItem = ({
  ref,
  className,
  children,
  component = 'li',
  color = 'default',
  // swiping = false,
  button = true,
  active = false,
  // secondaryText: SecondaryTextProp,
  ...otherProps
}: ListItemProps) => {
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
      $color={color}
      $active={active}>
      {children}
    </Styled.Root>
  )
}

ListItem.displayName = 'ListItemEVG'
export default ListItem
