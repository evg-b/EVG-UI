import SwitchBase from '../SwitchBase/SwitchBase'
import {
  CheckBoxCheck,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox
} from '../internal/icons/Checkbox'

import type { CheckboxProps } from './Checkbox.types'

import * as Styled from './Checkbox.styled'

const CHECKMARK_SIZES = {
  small: 12,
  medium: 14,
  large: 24,
  extra: 34
}

const Checkbox = ({
  ref,
  className,
  children,
  name = 'checkbox',
  size = 'medium',
  color = 'default',
  indeterminate = false,
  disabled = false,
  ...otherProps
}: CheckboxProps) => {
  const CheckIcon = indeterminate ? IndeterminateCheckBox : CheckBoxCheck
  return (
    <Styled.Root
      as={SwitchBase}
      type="checkbox"
      ref={ref}
      name={name}
      size={size}
      color={color}
      className={className}
      icon={<CheckBoxOutlineBlank size={size} />}
      iconChecked={
        <Styled.Checkmark
          as={CheckIcon}
          size={indeterminate ? size : CHECKMARK_SIZES[size]}
          color={color}
          $color={color}
          $indeterminate={indeterminate}
          $disabled={disabled}
        />
      }
      disabled={disabled}
      {...otherProps}
    />
  )
}

Checkbox.displayName = 'CheckboxEVG'
export default Checkbox
