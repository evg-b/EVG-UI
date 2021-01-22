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
const PopupAnimation = (props) => {
    const { classes } = props
    const btn1_ref = useRef()
    const btn2_ref = useRef()
    const btn3_ref = useRef()
    return (
        <div className={classes.base}>
            <Button ref={btn1_ref} variant='outlined' >fade</Button>
            <Button ref={btn2_ref} variant='outlined' >zoom</Button>
            <Button ref={btn3_ref} variant='outlined' >docking</Button>
            <Popup target={btn1_ref} animation='fade'>
                fade
            </Popup>
            <Popup target={btn2_ref} animation='zoom'>
                zoom
            </Popup>
            <Popup target={btn3_ref} animation='docking'>
                docking
            </Popup>
        </div>
    )
}

export default withStyles(styles)(PopupAnimation)