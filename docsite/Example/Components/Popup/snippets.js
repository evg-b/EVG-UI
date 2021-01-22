export default {
'PopupAnimation' : `import React, { useRef } from 'react';
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

export default withStyles(styles)(PopupAnimation)`,'PopupAutoHide' : `import React, { useRef } from 'react';
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

export default withStyles(styles)(TooltipBase)`,'PopupBase' : `import React, { useRef } from 'react';
import { Button, Popup } from '@evg-b/evg-ui';

const PopupBase = () => {
    const btn_ref = useRef()
    return (
        <>
            <Button ref={btn_ref} variant='outlined' style={{ margin: 30 }} >hover</Button>
            <Popup target={btn_ref}>
                Popup
            </Popup>
        </>
    )
}

export default PopupBase`,'PopupMode' : `import React, { useRef } from 'react';
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

export default withStyles(styles)(PopupMode)`,'PopupPosition' : `import React, { useRef } from 'react';
import { Button, Popup } from '@evg-b/evg-ui';

const PopupPosition = () => {
    const btn_ref = useRef()
    return (
        <>
            <Button ref={btn_ref} variant='outlined' style={{ width: 250, margin: 30 }} >Position</Button>
            <Popup open position='top' target={btn_ref}>
                top
            </Popup>
            <Popup open position='top-left' target={btn_ref}>
                top-left
            </Popup>
            <Popup open position='top-right' target={btn_ref}>
                top-right
            </Popup>
        </>
    )
}

export default PopupPosition`,'PopupScrollable' : `import React, { useRef } from 'react';
import { withStyles } from 'react-jss';
import { Button, Popup, Scroll } from '@evg-b/evg-ui';

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
        // <>
        //     <Button ref={btn_ref} variant='outlined' >Popup</Button>
        //     <Popup target={btn_ref}>
        //         Popup
        //     </Popup>
        // </>
        <Scroll
            autoHide={false}
            style={{ width: 200, maxHeight: 200, backgroundColor: 'rgba(0,0,0,.1)' }}
        >
            {
                // [...Array(25)].map((n, i) =>
                //     blockScroll(i + 1)
                // )

            }
            <div style={{ height: 600, width: 600 }}>
                <Button ref={btn_ref} variant='outlined' style={{ margin: '75px 0 0 60px' }}>Popup</Button>
                <Popup open target={btn_ref}>
                    Popup
                </Popup>

            </div>
        </Scroll>
    )
}

export default withStyles(styles)(TooltipBase)`,'PopupShift' : `import React, { useRef } from 'react';
import { Button, Popup } from '@evg-b/evg-ui';

const sPop = {
    backgroundColor: 'rgba(211,211,211,0.7)',
    borderRadius: 6,
    padding: 10
}

const PopupShift = () => {
    const btn_ref = useRef()
    return (
        <>
            <Button ref={btn_ref} variant='outlined' style={{ width: 250, margin: 30 }} >Position</Button>
            <Popup
                open
                target={btn_ref}
                style={sPop}
                position='top'
            >
                0
            </Popup>
            <Popup
                open
                target={btn_ref}
                style={sPop}
                position='left'
                shift={10}
            >
                10
            </Popup>
            <Popup
                open
                target={btn_ref}
                style={sPop}
                position='right'
                shift={-15}
            >
                -15
            </Popup>
        </>
    )
}

export default PopupShift`,
}