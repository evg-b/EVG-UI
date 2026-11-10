import React, { forwardRef } from 'react'
import ButtonBase from '../ButtonBase/ButtonBase'
import Loader from '../Loader/Loader'
import type { ButtonProps } from './Button.types'
import * as Styled from './Button.styled'
const MapSizeLoader = {
  small: 18,
  medium: 24,
  large: 36,
  extra: 48
}
// Кнопки позволяют пользователям выполнять действия и делать выбор одним нажатием.
// Является `<button>` или `<a>` элементом с ripple эффектом от Material Design.

const Button = forwardRef<HTMLElement, ButtonProps>(
  function Button(props, ref) {
    const {
      className,
      children,
      component,
      color,
      // default || primary || warn || success || fail
      size,
      uppercase,
      round,
      // true - круглые края
      variant,
      //  text | contained | outlined
      elevation,
      loading,
      startIcon: StartIcon,
      endIcon: EndIcon,
      ...otherProps
    } = props
    let Component = otherProps.href ? 'a' : component
    const startIcon = StartIcon && (
      <Styled.StartIcon $color={props.color}>
        {React.cloneElement(StartIcon, {
          size: size
        })}
      </Styled.StartIcon>
    )
    const endIcon = EndIcon && (
      <Styled.EndIcon $color={props.color}>
        {React.cloneElement(EndIcon, {
          size: size
        })}
      </Styled.EndIcon>
    )
    const buttonLabel = (
      <Styled.Label
        $hidden={Boolean(loading && !StartIcon && !EndIcon)}
        $color={props.color}>
        {loading && StartIcon ? (
          <Styled.StartLoader
            as={Loader}
            size={MapSizeLoader[size]}
            depth={size === 'small' ? 2 : 3}
            $color={props.color}
          />
        ) : (
          startIcon
        )}
        {children}
        {endIcon}
      </Styled.Label>
    )
    return (
      <Styled.Root
        as={ButtonBase}
        color={color}
        contrast={variant === 'contained' || color === 'default' ? true : false}
        ref={ref}
        type={Component}
        {...otherProps}
        className={className}
        $uppercase={Boolean(uppercase)}
        $round={Boolean(round)}
        $elevation={Boolean(elevation && variant === 'contained')}
        $variant={variant}
        $size={size}
        $color={props.color}>
        {loading && !StartIcon && !EndIcon ? (
          <Styled.LoadingIndicator
            as={Loader}
            size={MapSizeLoader[size]}
            $color={props.color}
          />
        ) : null}
        {buttonLabel}
      </Styled.Root>
    )
  }
)
Button.defaultProps = {
  color: 'default',
  component: 'button',
  size: 'medium',
  uppercase: true,
  round: false,
  // true - круглые края
  variant: 'text',
  elevation: true,
  loading: false
}
Button.displayName = 'ButtonEVG'
export default Button
