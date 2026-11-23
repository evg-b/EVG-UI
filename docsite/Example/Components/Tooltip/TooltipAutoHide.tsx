import { useRef } from 'react'
import { Button, Tooltip } from '@evg-b/evg-ui'

const TooltipAutoHide = () => {
  const btn_ref = useRef<HTMLElement | null>(null)
  return (
    <>
      <Button ref={btn_ref} variant="outlined">
        Tooltip
      </Button>
      <Tooltip target={btn_ref}>tooltip</Tooltip>
    </>
  )
}

TooltipAutoHide.displayName = 'TooltipAutoHide'

export default TooltipAutoHide
