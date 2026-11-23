import type { ChangeEvent } from 'react'

import { useState } from 'react'
import { Modal, Button, IconButton, Switch, Icon } from '@evg-b/evg-ui'

import * as Styled from './Modal.styled'

const ModalEsc = () => {
  const [open, setOpen] = useState(false)
  const [isEsc, setIsEsc] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEsc(e.target.checked)
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
      <Styled.Option>
        <label htmlFor="labelIsEsc">isEsc</label>
        <Switch onChange={handleChange} id="labelIsEsc" color="primary" />
      </Styled.Option>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Styled.Backdrop
        as={Modal}
        open={open}
        onClose={handleClose}
        isEsc={isEsc}>
        {ModalBlock}
      </Styled.Backdrop>
    </div>
  )
}

ModalEsc.displayName = 'ModalEsc'

export default ModalEsc
