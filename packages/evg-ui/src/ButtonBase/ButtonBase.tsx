import React, { useState, useRef, forwardRef } from 'react'
import Ripple from '../Ripple/Ripple'
import type { ButtonBaseProps } from './ButtonBase.types'
import * as Styled from './ButtonBase.styled'

// Базовая кнопка в котором реализуется Ripple.
const ButtonBase = forwardRef<HTMLElement, ButtonBaseProps>(
  function ButtonBase(props, ref) {
    const {
      className,
      children,
      component,
      uppercase,
      disabled,
      tabIndex,
      rippleCenter,
      rippleOff,
      color,
      active,
      contrast,
      ...otherProps
    } = props
    const RippleRef = useRef(null)
    const [isFocus, setIsFocus] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    let Component = otherProps.href ? 'a' : component

    const handlerFocus = () => {
      setIsFocus(true)
    }

    const handlerBlur = () => {
      setIsFocus(false)
    }

    const handleKeyPress = () => {
      if (!isPressed) {
        setIsPressed(true)
      }
    }

    const handleKeyUp = () => {
      if (isPressed) {
        setIsPressed(false)
      }
    }

    return (
      <Styled.Root
        as={Component}
        tabIndex={tabIndex}
        ref={ref}
        type={Component}
        disabled={disabled}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        {...otherProps}
        className={className}>
        {children}
        {rippleOff || disabled ? null : (
          <Ripple
            ref={RippleRef}
            rippleCenter={rippleCenter}
            color={color}
            contrast={contrast}
            isFocus={isFocus}
            isPressed={isPressed}
            isActive={active}
            scrollable
          />
        )}
      </Styled.Root>
    )
  }
)
ButtonBase.defaultProps = {
  component: 'button',
  color: 'default',
  uppercase: true,
  disabled: false,
  contrast: true,
  tabIndex: 0,
  active: false,
  rippleCenter: false,
  rippleOff: false
}
ButtonBase.displayName = 'ButtonBaseEVG'
export default ButtonBase
