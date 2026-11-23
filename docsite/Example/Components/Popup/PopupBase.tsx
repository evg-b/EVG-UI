import { useRef } from 'react'

import { Button, Popup } from '@evg-b/evg-ui'

import * as Styled from './Popup.styled'

const PopupBase = () => {
  const target = useRef<HTMLElement>(null)

  return (
    <>
      <Styled.Target as={Button} ref={target} type="button" variant="outlined">
        Наведите указатель
      </Styled.Target>
      <Popup target={target}>Popup</Popup>
    </>
  )
}

PopupBase.displayName = 'PopupBase'

export default PopupBase
