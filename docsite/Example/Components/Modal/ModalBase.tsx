import { useState } from 'react'
import { Modal, Button, IconButton, Icon } from '@evg-b/evg-ui'

import * as Styled from './Modal.styled'

const ModalBase = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const ModalBlock = (
    <Styled.Dialog>
      <Styled.CloseButton as={IconButton} onClick={handleClose}>
        <Icon name="Close" />
      </Styled.CloseButton>
      modal
    </Styled.Dialog>
  )
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Styled.Backdrop
        as={Modal}
        open={open}
        onClose={handleClose}>
        {ModalBlock}
      </Styled.Backdrop>
    </div>
  )
}

ModalBase.displayName = 'ModalBase'

export default ModalBase
