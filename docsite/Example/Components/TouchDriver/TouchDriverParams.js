import React, { useEffect, useRef, useState } from 'react';
import { Color, Elevation, TouchDriver, withStyles } from '@evg-b/evg-ui';

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
        backgroundColor: Color('primary').Base(),
        color: Color('primary').Contrast(),
        cursor: 'pointer',
        userSelect: 'none',
    },
    info: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        padding: '10px',
        boxSizing: 'border-box',
        '& >* span': {
            color: Color('primary').Base(),
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

    return (
        <div>
            <div className={classes.info}>
                <div><span>startX: </span>{params.startX}</div>
                <div><span>startY: </span>{params.startY}</div>
                <div><span>nowX: </span>{params.nowX}</div>
                <div><span>nowY: </span>{params.nowY}</div>
                <div><span>shiftX: </span>{params.shiftX}</div>
                <div><span>shiftY: </span>{params.shiftY}</div>
                <div><span>deltaX: </span>{params.deltaX}</div>
                <div><span>deltaY: </span>{params.deltaY}</div>
            </div>
            <TouchDriver
                className={classes.touch}
                moveStart={onMoveStar}
                moveXY={onMove}
            >
                <div ref={circle_ref} className={classes.touchCircle}>MOVE</div>
            </TouchDriver>
        </div>
    )
}

export default withStyles(styles)(TouchDriverParams)