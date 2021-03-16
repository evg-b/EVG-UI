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
const TooltipPosition = (props) => {
    const { classes } = props
    const btnBig_ref = useRef()
    return (
        <div>
            <Button
                ref={btnBig_ref}
                variant='outlined'
                style={{ width: 250, margin: 20 }}
            >
                position
            </Button>
            <Tooltip open position='top' target={btnBig_ref}>
                top
            </Tooltip>
            <Tooltip open position='top-left' target={btnBig_ref}>
                top-left
            </Tooltip>
            <Tooltip open position='top-right' target={btnBig_ref}>
                top-right
            </Tooltip>
        </div>

    )
}

export default withStyles(styles)(TooltipPosition)