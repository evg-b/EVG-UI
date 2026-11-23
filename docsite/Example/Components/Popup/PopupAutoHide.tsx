import { useRef } from 'react'
import { Button, Popup } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

// TODO: переосмыслить autiHide
const TooltipBase = () => {
  const btn1_ref = useRef<HTMLElement | null>(null)
  const btn2_ref = useRef<HTMLElement | null>(null)
  return (
    <Styled.Row>
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
    </Styled.Row>
  )
}

TooltipBase.displayName = 'TooltipBase'

export default TooltipBase
