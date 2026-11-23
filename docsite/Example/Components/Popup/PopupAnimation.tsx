import { useRef } from 'react'
import { Button, Popup } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const PopupAnimation = () => {
  const btn1_ref = useRef<HTMLElement | null>(null)
  const btn2_ref = useRef<HTMLElement | null>(null)
  const btn3_ref = useRef<HTMLElement | null>(null)
  return (
    <Styled.Row>
      <Button ref={btn1_ref} variant="outlined">
        fade
      </Button>
      <Button ref={btn2_ref} variant="outlined">
        zoom
      </Button>
      <Button ref={btn3_ref} variant="outlined">
        docking
      </Button>
      <Popup target={btn1_ref} animation="fade">
        fade
      </Popup>
      <Popup target={btn2_ref} animation="zoom">
        zoom
      </Popup>
      <Popup target={btn3_ref} animation="docking">
        docking
      </Popup>
    </Styled.Row>
  )
}

PopupAnimation.displayName = 'PopupAnimation'

export default PopupAnimation
