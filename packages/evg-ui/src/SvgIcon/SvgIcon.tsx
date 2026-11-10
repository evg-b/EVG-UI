import React, { forwardRef } from 'react'
import type { SvgIconProps } from './SvgIcon.types'
import * as Styled from './SvgIcon.styled'

// Компонент обертка над path svg который реализует функционал color и size.
const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  function SvgIcon(props, ref) {
    const { className, children, color, size, viewBox, ...otherProps } = props
    return (
      <Styled.Root
        ref={ref}
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        {...otherProps}
        className={className}
        $color={props.color}
        $size={props.size}>
        {children}
      </Styled.Root>
    )
  }
)
SvgIcon.defaultProps = {
  color: 'default',
  size: 'medium',
  viewBox: 24
}
SvgIcon.displayName = 'SvgIconEVG'
export default SvgIcon
