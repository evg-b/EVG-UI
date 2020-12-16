import React, { useEffect, useRef } from 'react';
import { withStyles } from 'react-jss';
import { TouchDriver } from '@evg-b/evg-ui';
import Elevation from '@evg-b/evg-ui/src/utils/Elevation'
import Color from '@evg-b/evg-ui/src/utils/Color'

const styles = {
    touch: {
        width: '500px',
        height: '400px',
        overflow: 'hidden',
        ...Elevation(2),
    },
    touchCircle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: Color('--ifm-color-primary').Color,
        color: Color('--ifm-color-primary').Contrast,
        cursor: 'pointer',
        userSelect: 'none',
    },
}

const TouchDriverBase = (props) => {
    const { classes } = props
    const circle_ref = useRef()
    const sizeCircke = 150 / 2
    const onMoveStar = ({ startX, startY }) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = `translate3d(${startX - sizeCircke}px, ${startY - sizeCircke}px, 0px)`
    }
    const onMove = ({ startX, shiftX, startY, shiftY }) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = `translate3d(${startX + shiftX - sizeCircke}px, ${startY + shiftY - sizeCircke}px, 0px)`
    }
    useEffect(() => {
        const circle_S = circle_ref.current
        circle_S.style.transform = `translate3d(${250 - sizeCircke}px, ${200 - sizeCircke}px, 0px)`
    }, [])
    return (
        <TouchDriver
            className={classes.touch}
            moveStart={onMoveStar}
            moveXY={onMove}
        // moveEnd={onMoveEnd}
        >
            <div ref={circle_ref} className={classes.touchCircle}>MOVE</div>
        </TouchDriver>
    )
}

export default withStyles(styles)(TouchDriverBase)