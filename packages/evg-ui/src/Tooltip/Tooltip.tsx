import Popup from '../Popup/Popup'

import type { TooltipProps } from './Tooltip.types'

import * as Styled from './Tooltip.styled'

// Всплывающая подсказка когда пользователь наводит курсор на элемент.

const Tooltip = ({
  ref,
  className,
  children,
  specs = 'desktop',
  ...otherProps
}: TooltipProps) => {
  return (
    <Popup ref={ref} shift={8} {...otherProps}>
      <Styled.Root className={className} $specs={specs}>
        {children}
      </Styled.Root>
    </Popup>
  )
}

Tooltip.displayName = 'TooltipEVG'
export default Tooltip
