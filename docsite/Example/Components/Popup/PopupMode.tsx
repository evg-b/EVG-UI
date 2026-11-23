import { useRef } from 'react'
import { Button, Popup } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const PopupMode = () => {
  const btn1_ref = useRef<HTMLElement | null>(null)
  const btn2_ref = useRef<HTMLElement | null>(null)
  return (
    <Styled.Row>
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
    </Styled.Row>
  )
}

PopupMode.displayName = 'PopupMode'

export default PopupMode
