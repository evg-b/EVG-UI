import { Children, cloneElement, isValidElement } from 'react'

import ButtonBase from '../ButtonBase/ButtonBase'
import type { SvgIconProps } from '../SvgIcon/SvgIcon.types'

import type { IconButtonProps } from './IconButton.types'

import * as Styled from './IconButton.styled'

// Button компонент который модифицирован под icons.

const IconButton = ({
  ref,
  className,
  children,
  component = 'button',
  color = 'default',
  rippleCenter = true,
  size = 'medium',
  ...otherProps
}: IconButtonProps) => {
  let Component = otherProps.href ? 'a' : component
  return (
    <Styled.Root
      as={ButtonBase}
      ref={ref}
      component={Component}
      rippleCenter={rippleCenter}
      color={color}
      contrast={color === 'default' ? true : false}
      disabled={otherProps.disabled}
      {...otherProps}
      className={className}>
      {Children.map(children, (child) =>
        isValidElement<SvgIconProps>(child)
          ? cloneElement(child, {
              color: child.props.color ?? color,
              size: child.props.size ?? size
            })
          : child
      )}
    </Styled.Root>
  )
}

IconButton.displayName = 'IconButtonEVG'
export default IconButton
