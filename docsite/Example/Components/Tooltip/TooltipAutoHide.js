import React, { useRef } from 'react';
import { Button, Tooltip, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TooltipAutoHide = (props) => {
    const { classes } = props
    const btn_ref = useRef()
    return (
        <>
            <Button ref={btn_ref} variant='outlined' >Tooltip</Button>
            <Tooltip target={btn_ref}>
                tooltip
            </Tooltip>
        </>
    )
}

export default withStyles(styles)(TooltipAutoHide)