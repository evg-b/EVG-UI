import React, { forwardRef, useState, useEffect, useRef } from 'react'

import IconButton from '../IconButton/IconButton'

import type { SwitchProps } from './Switch.types'

import * as Styled from './Switch.styled'

const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, children, onChange, color = 'default', ...otherProps },
  ref
) {
  let inputRef = useRef<HTMLInputElement>(null)
  inputRef = ref || inputRef

  const [isActive, setIsActive] = useState(
    otherProps.defaultChecked || otherProps.checked || false
  )

  useEffect(() => {
    setIsActive(inputRef.current.checked)
  }, [])

  const onChangeChecked: SwitchProps['onChange'] = (event) => {
    onChange?.(event)
    setIsActive(inputRef.current.checked)
  }

  return (
    <Styled.Root
      className={className}
      $color={color}
      $disabled={otherProps.disabled}>
      <Styled.Track $active={isActive} />
      <Styled.Thumb
        as={IconButton}
        component="label"
        tabIndex={-1}
        color={color}
        disabled={otherProps.disabled}
        $active={isActive}>
        <Styled.Input
          type="checkbox"
          ref={inputRef}
          onChange={onChangeChecked}
          readOnly
          {...otherProps}
        />
        <Styled.ThumbIcon />
      </Styled.Thumb>
    </Styled.Root>
  )
})

Switch.displayName = 'SwitchEVG'

export default Switch
