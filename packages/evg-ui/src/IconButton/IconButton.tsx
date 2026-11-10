import React, { forwardRef } from 'react'
import ButtonBase from '../ButtonBase/ButtonBase'
import type { IconButtonProps } from './IconButton.types'
import * as Styled from './IconButton.styled'

// Button компонент который модифицирован под icons.
const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  function IconButton(props, ref) {
    const {
      className,
      children,
      component,
      color,
      rippleCenter,
      size,
      ...otherProps
    } = props
    let Component = otherProps.href ? 'a' : component
    return (
      <Styled.Root
        as={ButtonBase}
        ref={ref}
        component={Component}
        rippleCenter
        color={color}
        contrast={color === 'default' ? true : false}
        disabled={otherProps.disabled}
        {...otherProps}
        className={className}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            color: child.props.color || color,
            size: child.props.size || size
          })
        )}
      </Styled.Root>
    )
  }
)
IconButton.defaultProps = {
  color: 'default',
  component: 'button',
  rippleCenter: true,
  size: 'medium'
}
IconButton.displayName = 'IconButtonEVG'
export default IconButton
