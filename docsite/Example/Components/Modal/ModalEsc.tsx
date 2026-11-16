import type { ChangeEvent } from 'react'

import type { ModalEscProps } from './ModalEsc.types'

import { useState } from 'react'
import {
  Modal,
  Button,
  IconButton,
  Switch,
  withStyles,
  Icon
} from '@evg-b/evg-ui'

const styles = {
  switchMod: {
    display: 'flex',
    alignItems: 'center'
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  modal: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '200px',
    borderRadius: '20px',
    backgroundColor: 'white'
  },
  btnClose: {
    position: 'absolute',
    top: 0,
    right: 0
  }
}
const ModalEsc = (props: ModalEscProps) => {
  const { classes } = props
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
    <div className={classes.modal}>
      <IconButton className={classes.btnClose} onClick={handleClose}>
        <Icon name="Close" />
      </IconButton>
      modal
    </div>
  )
  return (
    <div>
      <div className={classes.switchMod}>
        <label htmlFor="labelIsEsc">isEsc</label>
        <Switch onChange={handleChange} id="labelIsEsc" color="primary" />
      </div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        className={classes.modalBackground}
        open={open}
        onClose={handleClose}
        isEsc={isEsc}>
        {ModalBlock}
      </Modal>
    </div>
  )
}

ModalEsc.displayName = 'ModalEsc'

export default withStyles(styles)(ModalEsc)
