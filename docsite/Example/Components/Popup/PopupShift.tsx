import { useRef } from 'react'

import { Button, Popup } from '@evg-b/evg-ui'

import * as Styled from './Popup.styled'

const PopupShift = () => {
  const target = useRef<HTMLElement>(null)

  return (
    <>
      <Styled.WideTarget as={Button} ref={target} type="button" variant="outlined">
        Смещение
      </Styled.WideTarget>
      <Styled.Label as={Popup} open target={target} position="top">0</Styled.Label>
      <Styled.Label as={Popup} open target={target} position="left" shift={10}>10</Styled.Label>
      <Styled.Label as={Popup} open target={target} position="right" shift={-15}>−15</Styled.Label>
    </>
  )
}

PopupShift.displayName = 'PopupShift'

export default PopupShift
