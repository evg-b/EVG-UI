import { useState } from 'react'

import IconButton from '../IconButton/IconButton'

import type { SwitchProps } from './Switch.types'

import * as Styled from './Switch.styled'

const Switch = ({
  ref,
  className,
  children,
  onChange,
  checked,
  defaultChecked = false,
  color = 'default',
  ...otherProps
}: SwitchProps) => {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked)
  const isActive = checked ?? uncontrolledChecked

  const onChangeChecked: SwitchProps['onChange'] = (event) => {
    if (checked === undefined)
      setUncontrolledChecked(event.currentTarget.checked)
    onChange?.(event)
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
          ref={ref}
          checked={isActive}
          onChange={onChangeChecked}
          {...otherProps}
        />
        <Styled.ThumbIcon />
      </Styled.Thumb>
    </Styled.Root>
  )
}

Switch.displayName = 'SwitchEVG'
export default Switch
