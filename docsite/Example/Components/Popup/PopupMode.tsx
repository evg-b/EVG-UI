import type { PopupModeProps } from './PopupMode.types'

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
const PopupMode = (props: PopupModeProps) => {
  const { classes } = props
  const btn1_ref = useRef<HTMLElement | null>(null)
  const btn2_ref = useRef<HTMLElement | null>(null)
  return (
    <div className={classes.base}>
      <Button ref={btn1_ref} variant="outlined">
        hover
      </Button>
      <Button ref={btn2_ref} variant="outlined">
        click
      </Button>
      <Popup target={btn1_ref} mode="hover">
        Popup
      </Popup>
      <Popup target={btn2_ref} mode="click">
        Popup
      </Popup>
    </div>
  )
}

PopupMode.displayName = 'PopupMode'

export default withStyles(styles)(PopupMode)
