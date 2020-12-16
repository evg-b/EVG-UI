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
const TooltipPosition = (props) => {
    const { classes } = props
    const btnBig_ref = useRef()
    return (
        <div>
            <Button
                ref={btnBig_ref}
                variant='outlined'
                style={{ height: '150px', width: '150px', margin: 20 }}
            >
                position
            </Button>
            <Tooltip open position='top' target={btnBig_ref}>
                top
            </Tooltip>
            <Tooltip open position='left' target={btnBig_ref}>
                left
            </Tooltip>
            <Tooltip open position='right' target={btnBig_ref}>
                right
            </Tooltip>
            <Tooltip open position='bottom' target={btnBig_ref}>
                bottom
            </Tooltip>
        </div>

    )
}

export default withStyles(styles)(TooltipPosition)