import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import { TouchDriver, Switch } from '@evg-b/evg-ui';
import Elevation from '@evg-b/evg-ui/dist/utils/Elevation'
import Color from '@evg-b/evg-ui/dist/utils/Color'

const styles = {
    touch: {
        position: 'relative',
        width: '500px',
        height: '400px',
        overflow: 'hidden',
        ...Elevation(2),
    },
    touchCircle: {
        zIndex: 9,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: Color('--ifm-color-primary').Color,
        color: Color('--ifm-color-primary').Contrast,
        cursor: 'pointer',
        userSelect: 'none',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    hole: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: `4px dashed ${Color('--ifm-color-primary').Color}`,
    },
    holeLeft: {
        left: 0,
    },
    holeRight: {
        right: 0,
    },
    rubicon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '5px',
        height: '170px',
        backgroundColor: Color('gray300').Color,
        transition: 'background-color 300ms ease',
    },
    active: {
        backgroundColor: Color('--ifm-color-primary').Color,

    },
    controlPanel: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 20,
        color: Color('gray300').Color,
        '&>label': {
            marginLeft: '10px',
            fontWeight: 500,
        }
    },
    controlPanelActive: {
        color: Color('--ifm-color-primary').Color,
    }

}

const TouchDriverInertia = (props) => {
    const { classes } = props
    const touch_ref = useRef()
    const circle_ref = useRef()
    const position = useRef(0)
    const sensitivity = 0.5
    const sizeCircle = 100
    const [active, setActive] = useState(false)
    const [useInertia, setUseInertia] = useState(false)

    const onChangeInertia = (e) => {
        setUseInertia(e.target.checked)
    }

    const onMove = ({ shiftX, deltaX }) => {
        const circle_S = circle_ref.current
        let { width } = touch_ref.current.getBoundingClientRect()
        circle_S.style.transition = `none`
        position.current = position.current + deltaX
        circle_S.style.transform = `translate(${position.current}px,-50%)`
        Math.abs(shiftX) > (width - sizeCircle) * sensitivity ? setActive(true) : setActive(false)
    }
    const onMoveEnd = ({ startX, shiftX, inertia }) => {
        const circle_S = circle_ref.current
        let { width } = touch_ref.current.getBoundingClientRect()
        const widthContainer = width - sizeCircle
        circle_S.style.transition = `transform 300ms cubic-bezier(0.4, 0, 0.2, 1)`
        if (inertia && useInertia) {
            position.current = startX > widthContainer * sensitivity ? 0 : widthContainer
        } else {
            position.current = shiftX > widthContainer * sensitivity ? widthContainer : 0
        }
        circle_S.style.transform = `translate(${position.current}px,-50%)`
        setActive(false)
    }
    return (
        <TouchDriver
            ref={touch_ref}
            className={classes.touch}
            moveXY={onMove}
            moveEnd={onMoveEnd}
        >
            <div ref={circle_ref} className={classes.touchCircle}>MOVE</div>
            <div className={classNames(classes.hole, classes.holeLeft)}></div>
            <div className={classNames(classes.hole, classes.holeRight)}></div>
            <div className={classNames(classes.rubicon, { [classes.active]: active })}></div>
            <div className={classNames(classes.controlPanel, { [classes.controlPanelActive]: useInertia })}>
                <Switch onChange={onChangeInertia} id='switch' color='--ifm-color-primary' />
                <label htmlFor="switch">INERTIA</label>
            </div>
        </TouchDriver>
    )
}

export default withStyles(styles)(TouchDriverInertia)