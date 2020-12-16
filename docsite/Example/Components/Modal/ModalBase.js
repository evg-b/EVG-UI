import React, { useState } from 'react';
import { withStyles } from 'react-jss';
import { Modal, Button, IconButton } from '@evg-b/evg-ui';
import { Close } from '@evg-b/evg-icons'

const styles = {
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
const ModalBase = (props) => {
    const { classes } = props
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
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
            <Button variant='contained' onClick={handleOpen}>Open Modal</Button>
            <Modal
                className={classes.modalBackground}
                open={open}
                onClose={handleClose}
            >
                {ModalBlock}
            </Modal>
        </div>
    )
}

export default withStyles(styles)(ModalBase)