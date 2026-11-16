import type { TooltipBaseProps } from './TooltipBase.types'

import { useRef } from 'react'
import { Button, Popup, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
// TODO: переосмыслить autiHide
const TooltipBase = (props: TooltipBaseProps) => {
  const { classes } = props
  const btn1_ref = useRef<HTMLElement | null>(null)
  const btn2_ref = useRef<HTMLElement | null>(null)
  return (
    <div className={classes.base}>
      <Button ref={btn1_ref} variant="outlined">
        Popup
      </Button>
      <Button ref={btn2_ref} variant="outlined">
        Popup
      </Button>
      <Popup target={btn1_ref}>Popup</Popup>
      <Popup target={btn2_ref} autoHide={false}>
        Popup
      </Popup>
    </div>
  )
}

TooltipBase.displayName = 'TooltipBase'

export default withStyles(styles)(TooltipBase)
