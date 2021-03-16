export default {TouchDriverBase: `import React, { useEffect, useRef } from 'react';
import { Elevation, Color, TouchDriver, withStyles } from '@evg-b/evg-ui';

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
}

const TouchDriverBase = (props) => {
    const { classes } = props
    const circle_ref = useRef()
    const sizeCircke = 150 / 2
    const onMoveStar = ({ startX, startY }) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = \`translate3d(\${startX - sizeCircke}px, \${startY - sizeCircke}px, 0px)\`
    }
    const onMove = ({ startX, shiftX, startY, shiftY }) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = \`translate3d(\${startX + shiftX - sizeCircke}px, \${startY + shiftY - sizeCircke}px, 0px)\`
    }
    useEffect(() => {
        const circle_S = circle_ref.current
        circle_S.style.transform = \`translate3d(\${250 - sizeCircke}px, \${200 - sizeCircke}px, 0px)\`
    }, [])
    return (
        <TouchDriver
            className={classes.touch}
            moveStart={onMoveStar}
            moveXY={onMove}
        >
            <div ref={circle_ref} className={classes.touchCircle}>MOVE</div>
        </TouchDriver>
    )
}

export default withStyles(styles)(TouchDriverBase)`,
TouchDriverDirection: `import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Elevation, Color, TouchDriver, withStyles } from '@evg-b/evg-ui';

const styles = {
    touch: {
        position: 'relative',
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
    },
    direction: {
        position: 'absolute',
        fontWeight: 500,
        color: Color('gray300').Base(),
        transition: 'color 300ms ease'
    },
    directionTop: {
        top: 10,
        left: '50%',
        transform: 'translateX(-50%)',
    },
    directionBottom: {
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
    },
    directionLeft: {
        top: '50%',
        left: 10,
        transform: 'translateY(-50%)',
    },
    directionRight: {
        top: '50%',
        right: 10,
        transform: 'translateY(-50%)',
    },
    directionActive: {
        color: Color('primary').Base(),
    },
    coordX: {
        bottom: 10,
        right: 10,
    },
    coordY: {
        left: 10,
        top: 10,
    },
}

const TouchDriverDirection = (props) => {
    const { classes: cl } = props
    const circle_ref = useRef()
    const [params, setParams] = useState({})
    const sizeCircke = 150 / 2
    const onMoveStar = (e) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = \`translate3d(\${e.startX - sizeCircke}px, \${e.startY - sizeCircke}px, 0px)\`
        setParams(e)
    }
    const onMove = (e) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = \`translate3d(\${e.startX + e.shiftX - sizeCircke}px, \${e.startY + e.shiftY - sizeCircke}px, 0px)\`
        setParams({ ...e })
    }
    useEffect(() => {
        const circle_S = circle_ref.current
        circle_S.style.transform = \`translate3d(\${250 - sizeCircke}px, \${200 - sizeCircke}px, 0px)\`
    }, [])
    return (
        <div>
            <div className={cl.info}>
                <div><span>startItXorY: </span>{params.startItXorY}</div>
                <div><span>itXorY: </span>{params.itXorY}</div>
                <div><span>startDirection: </span>{params.startDirection}</div>
                <div><span>direction: </span>{params.direction}</div>
            </div>
            <TouchDriver
                className={cl.touch}
                moveStart={onMoveStar}
                moveXY={onMove}
            >
                <div className={classNames(cl.direction, cl.directionTop, { [cl.directionActive]: params.direction === 'top' })}>TOP</div>
                <div className={classNames(cl.direction, cl.directionBottom, { [cl.directionActive]: params.direction === 'bottom' })}>BOTTOM</div>
                <div className={classNames(cl.direction, cl.directionLeft, { [cl.directionActive]: params.direction === 'left' })}>LEFT</div>
                <div className={classNames(cl.direction, cl.directionRight, { [cl.directionActive]: params.direction === 'right' })}>RIGHT</div>
                <div className={classNames(cl.direction, cl.coordX, { [cl.directionActive]: params.itXorY === 'x' })}>X</div>
                <div className={classNames(cl.direction, cl.coordY, { [cl.directionActive]: params.itXorY === 'y' })}>Y</div>
                <div ref={circle_ref} className={cl.touchCircle}>MOVE</div>
            </TouchDriver>
        </div>
    )
}

export default withStyles(styles)(TouchDriverDirection)`,
TouchDriverInertia: `import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { Elevation, Color, TouchDriver, Switch, withStyles } from '@evg-b/evg-ui';

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
        backgroundColor: Color('primary').Base(),
        color: Color('primary').Contrast(),
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
        border: \`4px dashed \${Color('primary').Base()}\`,
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
        backgroundColor: Color('gray300').Base(),
        transition: 'background-color 300ms ease',
    },
    active: {
        backgroundColor: Color('primary').Base(),

    },
    controlPanel: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 20,
        color: Color('gray300').Base(),
        '&>label': {
            marginLeft: '10px',
            fontWeight: 500,
        }
    },
    controlPanelActive: {
        color: Color('primary').Base(),
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
        circle_S.style.transition = \`none\`
        position.current = position.current + deltaX
        circle_S.style.transform = \`translate(\${position.current}px,-50%)\`
        Math.abs(shiftX) > (width - sizeCircle) * sensitivity ? setActive(true) : setActive(false)
    }
    const onMoveEnd = ({ startX, shiftX, inertia }) => {
        const circle_S = circle_ref.current
        let { width } = touch_ref.current.getBoundingClientRect()
        const widthContainer = width - sizeCircle
        circle_S.style.transition = \`transform 300ms cubic-bezier(0.4, 0, 0.2, 1)\`
        if (inertia && useInertia) {
            position.current = startX > widthContainer * sensitivity ? 0 : widthContainer
        } else {
            position.current = shiftX > widthContainer * sensitivity ? widthContainer : 0
        }
        circle_S.style.transform = \`translate(\${position.current}px,-50%)\`
        setActive(false)
    }
    return (
        <TouchDriver
            innerRef={touch_ref}
            className={classes.touch}
            moveXY={onMove}
            moveEnd={onMoveEnd}
        >
            <div ref={circle_ref} className={classes.touchCircle}>MOVE</div>
            <div className={classNames(classes.hole, classes.holeLeft)}></div>
            <div className={classNames(classes.hole, classes.holeRight)}></div>
            <div className={classNames(classes.rubicon, { [classes.active]: active })}></div>
            <div className={classNames(classes.controlPanel, { [classes.controlPanelActive]: useInertia })}>
                <Switch onChange={onChangeInertia} id='switch' color='primary' />
                <label htmlFor="switch">INERTIA</label>
            </div>
        </TouchDriver>
    )
}

export default withStyles(styles)(TouchDriverInertia)`,
TouchDriverParams: `import React, { useEffect, useRef, useState } from 'react';
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
        circle_S.style.transform = \`translate3d(\${e.startX - sizeCircke}px, \${e.startY - sizeCircke}px, 0px)\`
        setParams(e)
    }
    const onMove = (e) => {
        const circle_S = circle_ref.current
        circle_S.style.transform = \`translate3d(\${e.startX + e.shiftX - sizeCircke}px, \${e.startY + e.shiftY - sizeCircke}px, 0px)\`
        setParams({ ...e })
    }
    useEffect(() => {
        const circle_S = circle_ref.current
        circle_S.style.transform = \`translate3d(\${250 - sizeCircke}px, \${200 - sizeCircke}px, 0px)\`
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

export default withStyles(styles)(TouchDriverParams)`,
}