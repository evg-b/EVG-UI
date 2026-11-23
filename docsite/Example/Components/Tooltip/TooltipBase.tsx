import { useRef } from 'react'
import { Button, Tooltip } from '@evg-b/evg-ui'

const TooltipBase = () => {
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

TooltipBase.displayName = 'TooltipBase'

export default TooltipBase
