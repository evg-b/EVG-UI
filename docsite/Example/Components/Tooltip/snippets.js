export default {
'TooltipAnimation' : `// TooltipAnimation
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

export default withStyles(styles)(TooltipAnimation)`,'TooltipAutoHide' : `import React, { useRef } from 'react';
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

export default withStyles(styles)(TooltipAutoHide)`,'TooltipBase' : `import React, { useRef } from 'react';
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
const TooltipBase = (props) => {
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

export default withStyles(styles)(TooltipBase)`,'TooltipPosition' : `import React, { useRef } from 'react';
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
                style={{ height: '150px', width: '150px' }}
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

export default withStyles(styles)(TooltipPosition)`,
}