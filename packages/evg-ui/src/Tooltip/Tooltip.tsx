import React, { forwardRef } from 'react'
import Popup from '../Popup/Popup'
import type { TooltipProps } from './Tooltip.types'
import * as Styled from './Tooltip.styled'

// Всплывающая подсказка когда пользователь наводит курсор на элемент.
const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const { className, children, specs, ...otherProps } = props
    return (
      <Popup ref={ref} shift={8} {...otherProps}>
        <Styled.Root className={className} $specs={specs}>
          {children}
        </Styled.Root>
      </Popup>
    )
  }
)
Tooltip.defaultProps = {
  specs: 'desktop'
}
Tooltip.displayName = 'TooltipEVG'
export default Tooltip
