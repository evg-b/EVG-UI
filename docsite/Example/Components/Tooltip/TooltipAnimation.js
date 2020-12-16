// TooltipAnimation
import React, { useRef } from 'react';
import { withStyles } from 'react-jss';
import { Button, Tooltip } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TooltipAnimation = (props) => {
    const { classes } = props
    const btn1_ref = useRef()
    const btn2_ref = useRef()
    const btn3_ref = useRef()
    return (
        <div className={classes.base}>
            <Button ref={btn1_ref} variant='outlined' >fade</Button>
            <Button ref={btn2_ref} variant='outlined' >zoom</Button>
            <Button ref={btn3_ref} variant='outlined' >docking</Button>
            <Tooltip target={btn1_ref} animation='fade'>
                fade
            </Tooltip>
            <Tooltip target={btn2_ref} animation='zoom'>
                zoom
            </Tooltip>
            <Tooltip target={btn3_ref} animation='docking'>
                docking
            </Tooltip>
        </div>
    )
}

export default withStyles(styles)(TooltipAnimation)