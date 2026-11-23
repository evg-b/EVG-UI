import { useRef } from 'react'

import { Button, Tooltip } from '@evg-b/evg-ui'

import * as Styled from './Tooltip.styled'

const TooltipPosition = () => {
  const target = useRef<HTMLElement>(null)

  return (
    <>
      <Styled.Target as={Button} ref={target} type="button" variant="outlined">
        Положение
      </Styled.Target>
      <Tooltip open position="top" target={target}>top</Tooltip>
      <Tooltip open position="top-left" target={target}>top-left</Tooltip>
      <Tooltip open position="top-right" target={target}>top-right</Tooltip>
    </>
  )
}

TooltipPosition.displayName = 'TooltipPosition'

export default TooltipPosition
