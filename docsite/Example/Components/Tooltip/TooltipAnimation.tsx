import { useRef } from 'react'
import { Button, Tooltip } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const TooltipAnimation = () => {
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
      <Tooltip target={btn1_ref} animation="fade">
        fade
      </Tooltip>
      <Tooltip target={btn2_ref} animation="zoom">
        zoom
      </Tooltip>
      <Tooltip target={btn3_ref} animation="docking">
        docking
      </Tooltip>
    </Styled.Row>
  )
}

TooltipAnimation.displayName = 'TooltipAnimation'

export default TooltipAnimation
