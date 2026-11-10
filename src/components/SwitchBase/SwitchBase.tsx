import IconButton from '../IconButton/IconButton'

import type { SwitchBaseProps } from './SwitchBase.types'

import * as Styled from './SwitchBase.styled'

const SwitchBase = ({
  ref,
  className,
  children,
  color = 'default',
  size = 'medium',
  type,
  icon,
  iconChecked,
  rippleOff = false,
  ...otherProps
}: SwitchBaseProps) => (
  <Styled.Root
    as={IconButton}
    component="label"
    tabIndex={-1}
    className={className}
    color={color}
    size={size}
    disabled={otherProps.disabled}
    rippleCenter
    rippleOff={rippleOff}>
    <Styled.Input tabIndex={0} ref={ref} type={type} readOnly {...otherProps} />
    {iconChecked}
    {icon}
  </Styled.Root>
)

SwitchBase.displayName = 'SwitchBaseEVG'
export default SwitchBase
