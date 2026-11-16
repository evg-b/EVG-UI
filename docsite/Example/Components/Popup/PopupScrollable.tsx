import type { TooltipBaseProps } from './TooltipBase.types'

import { useRef } from 'react'
import { Button, Popup, Scroll, withStyles } from '@evg-b/evg-ui'

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
    <Scroll
      autoHide={false}
      style={{ width: 200, maxHeight: 200, backgroundColor: 'rgba(0,0,0,.1)' }}>
      <div style={{ height: 600, width: 600 }}>
        <Button
          ref={btn_ref}
          variant="outlined"
          style={{ margin: '75px 0 0 60px' }}>
          Popup
        </Button>
        <Popup open target={btn_ref}>
          Popup
        </Popup>
      </div>
    </Scroll>
  )
}

TooltipBase.displayName = 'TooltipBase'

export default withStyles(styles)(TooltipBase)
