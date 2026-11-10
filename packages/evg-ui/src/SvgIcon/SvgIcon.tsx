import type { SvgIconProps } from './SvgIcon.types'

import * as Styled from './SvgIcon.styled'

// Компонент обертка над path svg который реализует функционал color и size.

const SvgIcon = ({
  ref,
  className,
  children,
  color = 'default',
  size = 'medium',
  viewBox = 24,
  ...otherProps
}: SvgIconProps) => {
  return (
    <Styled.Root
      ref={ref}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      {...otherProps}
      className={className}
      $color={color}
      $size={size}>
      {children}
    </Styled.Root>
  )
}

SvgIcon.displayName = 'SvgIconEVG'
export default SvgIcon
