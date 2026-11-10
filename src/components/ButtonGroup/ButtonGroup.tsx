import { Children, cloneElement, isValidElement } from 'react'

import type { ButtonProps } from '../Button/Button.types'

import type { ButtonGroupProps } from './ButtonGroup.types'

import * as Styled from './ButtonGroup.styled'

const ButtonGroup = ({
  ref,
  className,
  children,
  color = 'default',
  orientation = 'horizontal',
  size = 'medium',
  variant = 'text',
  round = false,
  uppercase = true,
  disabled = false,
  ...otherProps
}: ButtonGroupProps) => (
  <Styled.Root
    ref={ref}
    className={className}
    $color={color}
    $orientation={orientation}
    $variant={variant}
    $round={round}
    {...otherProps}>
    {Children.map(children, (child) =>
      isValidElement<ButtonProps>(child)
        ? cloneElement(child, {
            size: child.props.size ?? size,
            color: child.props.color ?? color,
            variant: child.props.variant ?? variant,
            round: child.props.round ?? round,
            uppercase: child.props.uppercase ?? uppercase,
            disabled: child.props.disabled ?? disabled
          })
        : child
    )}
  </Styled.Root>
)

ButtonGroup.displayName = 'ButtonGroupEVG'
export default ButtonGroup
