import { useRef } from 'react'

import { Button, Popup, Scroll } from '@evg-b/evg-ui'

import * as Styled from './Popup.styled'

const PopupScrollable = () => {
  const target = useRef<HTMLElement>(null)

  return (
    <Styled.Viewport as={Scroll} autoHide={false}>
      <Styled.ScrollContent>
        <Button ref={target} type="button" variant="outlined">Цель</Button>
        <Popup open target={target}>Popup</Popup>
      </Styled.ScrollContent>
    </Styled.Viewport>
  )
}

PopupScrollable.displayName = 'PopupScrollable'

export default PopupScrollable
