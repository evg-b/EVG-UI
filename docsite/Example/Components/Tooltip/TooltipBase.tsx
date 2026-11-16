import type { TooltipBaseProps } from './TooltipBase.types'

import { useRef } from 'react'
import { Button, Tooltip, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const TooltipBase = (props: TooltipBaseProps) => {
  const { classes } = props
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

export default withStyles(styles)(TooltipBase)
