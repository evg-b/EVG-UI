import { useRef } from 'react'
import { Button, Popup } from '@evg-b/evg-ui'

const PopupBase = () => {
  const btn_ref = useRef<HTMLElement | null>(null)
  return (
    <>
      <Button ref={btn_ref} variant="outlined" style={{ margin: 30 }}>
        hover
      </Button>
      <Popup target={btn_ref}>Popup</Popup>
    </>
  )
}

PopupBase.displayName = 'PopupBase'

export default PopupBase
