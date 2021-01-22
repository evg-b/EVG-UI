import React, { useRef } from 'react';
import { withStyles } from 'react-jss';
import { Button, Popup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
// TODO: переосмыслить autiHide
const TooltipBase = (props) => {
    const { classes } = props
    const btn1_ref = useRef()
    const btn2_ref = useRef()
    return (
        <div className={classes.base}>
            <Button ref={btn1_ref} variant='outlined' >Popup</Button>
            <Button ref={btn2_ref} variant='outlined' >Popup</Button>
            <Popup target={btn1_ref}>
                Popup
            </Popup>
            <Popup target={btn2_ref} autoHide={false}>
                Popup
            </Popup>
        </div>
    )
}

export default withStyles(styles)(TooltipBase)