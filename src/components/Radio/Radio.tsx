import SwitchBase from '../SwitchBase/SwitchBase'
import {
  RadioButtonCircle,
  RadioButtonUnchecked
} from '../../internal/icons/Radio'

import type { RadioProps } from './Radio.types'

import * as Styled from './Radio.styled'

const Radio = ({
  ref,
  className,
  children,
  name = 'radio',
  color = 'default',
  size = 'medium',
  ...otherProps
}: RadioProps) => (
  <Styled.Root
    as={SwitchBase}
    type="radio"
    ref={ref}
    name={name}
    color={color}
    size={size}
    className={className}
    icon={<RadioButtonUnchecked size={size} />}
    iconChecked={
      <Styled.CheckedIcon as={RadioButtonCircle} size={size} color={color} />
    }
    {...otherProps}
  />
)

Radio.displayName = 'RadioEVG'
export default Radio
