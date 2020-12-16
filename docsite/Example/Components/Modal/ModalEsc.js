import React, { useState } from 'react';
import { withStyles } from 'react-jss';
import { Modal, Button, IconButton, Switch } from '@evg-b/evg-ui';
import { Close } from '@evg-b/evg-icons'

const styles = {
    switchMod: {
        display: 'flex',
        alignItems: 'center',
    },
    modalBackground: {
        backgroundColor: 'rgba(0,0,0,.6)',
    },
    modal: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '20px',
        backgroundColor: 'white',
    },
    btnClose: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
}
const ModalEsc = (props) => {
    const { classes } = props
    const [open, setOpen] = useState(false)
    const [isEsc, setIsEsc] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleChange = (e) => {
        setIsEsc(e.target.checked)
    }
    const ModalBlock = (
        <div className={classes.modal}>
            <IconButton
                className={classes.btnClose}
                onClick={handleClose}
            >
                <Close />
            </IconButton>
            modal
        </div>
    )
    return (
        <div>
            <div className={classes.switchMod}>
                <label htmlFor="labelIsEsc">isEsc</label>
                <Switch onChange={handleChange} id='labelIsEsc' color='primary' />
            </div>
            <Button variant='contained' onClick={handleOpen}>Open Modal</Button>
            <Modal
                className={classes.modalBackground}
                open={open}
                onClose={handleClose}
                isEsc={isEsc}
            >
                {ModalBlock}
            </Modal>
        </div>
    )
}

export default withStyles(styles)(ModalEsc)