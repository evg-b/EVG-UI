import React, { useEffect, useRef, useState } from 'react';
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
    info: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        padding: '10px',
        // backgroundColor: Color('--ifm-color-primary').Contrast,
        boxSizing: 'border-box',
        '& >* span': {
            color: Color('--ifm-color-primary').Color,
            fontWeight: 'bold',
        }
    }
}

const TouchDriverParams = (props) => {
    const { classes } = props
    const circle_ref = useRef()
    const [params, setParams] = useState({})
    const sizeCircke = 150 / 2
    const onMoveStar = (e) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = `translate3d(${e.startX - sizeCircke}px, ${e.startY - sizeCircke}px, 0px)`
        setParams(e)
    }
    const onMove = (e) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = `translate3d(${e.startX + e.shiftX - sizeCircke}px, ${e.startY + e.shiftY - sizeCircke}px, 0px)`
        setParams({ ...e })
    }
    useEffect(() => {
        const circle_S = circle_ref.current
        circle_S.style.transform = `translate3d(${250 - sizeCircke}px, ${200 - sizeCircke}px, 0px)`
    }, [])
    useEffect(() => {
        // console.log('params:', params)
    })
    return (
        <div>
            <div className={classes.info}>
                {/* <div><span>startTime: </span>{params.startTime}</div> */}
                {/* <div><span>startItXorY: </span>{params.startItXorY}</div> */}
                {/* <div><span>itXorY: </span>{params.itXorY}</div> */}
                {/* <div><span>startDirection: </span>{params.startDirection}</div> */}
                {/* <div><span>direction: </span>{params.direction}</div> */}
                <div><span>startX: </span>{params.startX}</div>
                <div><span>startY: </span>{params.startY}</div>
                <div><span>nowX: </span>{params.nowX}</div>
                <div><span>nowY: </span>{params.nowY}</div>
                <div><span>shiftX: </span>{params.shiftX}</div>
                <div><span>shiftY: </span>{params.shiftY}</div>
                <div><span>deltaX: </span>{params.deltaX}</div>
                <div><span>deltaY: </span>{params.deltaY}</div>
                {/* <div><span>inertia: </span>{params.inertia}</div> */}
            </div>
            <TouchDriver
                className={classes.touch}
                moveStart={onMoveStar}
                moveXY={onMove}
            // moveEnd={onMoveEnd}
            >
                <div ref={circle_ref} className={classes.touchCircle}>MOVE</div>
            </TouchDriver>
        </div>
    )
}

export default withStyles(styles)(TouchDriverParams)