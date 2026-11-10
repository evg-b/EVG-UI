import { useState } from 'react'

import Ripple from '../Ripple/Ripple'

import type { ButtonBaseProps } from './ButtonBase.types'

import * as Styled from './ButtonBase.styled'

// Базовая кнопка в котором реализуется Ripple.

const ButtonBase = ({
  ref,
  className,
  children,
  component = 'button',
  type = 'button',
  uppercase = true,
  disabled = false,
  tabIndex = 0,
  rippleCenter = false,
  rippleOff = false,
  color = 'default',
  active = false,
  contrast = true,
  ...otherProps
}: ButtonBaseProps) => {
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
      type={Component === 'button' ? type : undefined}
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

ButtonBase.displayName = 'ButtonBaseEVG'
export default ButtonBase
