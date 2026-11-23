import { useRef } from 'react'

import { Button, Popup } from '@evg-b/evg-ui'

import * as Styled from './Popup.styled'

const PopupPosition = () => {
  const target = useRef<HTMLElement>(null)

  return (
    <>
      <Styled.WideTarget as={Button} ref={target} type="button" variant="outlined">
        Положение
      </Styled.WideTarget>
      <Popup open position="top" target={target}>top</Popup>
      <Popup open position="top-left" target={target}>top-left</Popup>
      <Popup open position="top-right" target={target}>top-right</Popup>
    </>
  )
}

PopupPosition.displayName = 'PopupPosition'

export default PopupPosition
