import type { TooltipAutoHideProps } from './TooltipAutoHide.types'

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
const TooltipAutoHide = (props: TooltipAutoHideProps) => {
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

TooltipAutoHide.displayName = 'TooltipAutoHide'

export default withStyles(styles)(TooltipAutoHide)
