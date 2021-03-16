import React, { useRef } from 'react';
import { Button, Popup, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const PopupMode = (props) => {
    const { classes } = props
    const btn1_ref = useRef()
    const btn2_ref = useRef()
    return (
        <div className={classes.base}>
            <Button ref={btn1_ref} variant='outlined' >hover</Button>
            <Button ref={btn2_ref} variant='outlined' >click</Button>
            <Popup target={btn1_ref} mode='hover'>
                Popup
            </Popup>
            <Popup target={btn2_ref} mode='click'>
                Popup
            </Popup>
        </div>
    )
}

export default withStyles(styles)(PopupMode)