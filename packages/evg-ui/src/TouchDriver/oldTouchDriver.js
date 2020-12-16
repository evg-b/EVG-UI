import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TouchDriver = React.forwardRef(function TouchDriver(props, ref) {
    const {
        children,
        component = 'div',
        autoMove = false,
        touchpad = false,
        moveStart,
        moveX,
        moveY,
        moveXY,
        moveEnd,
        ...otherProps
    } = props

    const moveCoordTemp = {
        startItXorY: '',
        itXorY: '',
        direction: '', // top | bottom | left | right
        startX: 0,
        startY: 0,
        startTime: 0,
        nowX: 0,
        nowY: 0,
        shiftX: 0,
        shiftY: 0,
        deltaX: 0,
        deltaY: 0,
        inertia: false,
    }
    const moveCoord = useRef({ ...moveCoordTemp })
    const touch = ref ? ref : useRef()
    const isTouch = useRef(false)

    const getInCoord = (e) => {
        let tch_ref = touch.current
        let clientX = 0, clientY = 0

        // 1 - находим координаты нажаия относительно экрана
        switch (e.type) {
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
                clientX = e.clientX
                clientY = e.clientY
                break
            case 'touchstart':
            case 'touchmove':
            case 'touchend':
                clientX = e.touches[0].clientX
                clientY = e.touches[0].clientY
                break;
            // case 'wheel':
            //     prevDeltaX += e.deltaX
            //     prevDeltaY += e.deltaY
            //     clientX = e.clientX + prevDeltaX
            //     clientY = e.clientY + prevDeltaY
            //     break
        }

        // 2 - находим координаты ref родителя относительно экрана
        let { x, y } = tch_ref.getBoundingClientRect()

        // 3 - в итоге получаем координаты нажатия внутри родительского элемента
        let nowX, nowY
        if (autoMove) {
            nowX = clientX
            nowY = clientY
        } else {
            nowX = clientX - x
            nowY = clientY - y
        }
        return { nowX, nowY }
    }

    const move = (e) => {
        const mc = moveCoord.current
        let tch_ref = touch.current
        if (isTouch.current) {
            let { nowX, nowY } = getInCoord(e)
            // формируем дельты
            if (mc.nowX !== 0) { mc.deltaX = nowX - mc.nowX }
            if (mc.nowY !== 0) { mc.deltaY = nowY - mc.nowY }

            mc.nowX = nowX
            mc.nowY = nowY

            mc.itXorY = Math.abs(mc.deltaX) >= Math.abs(mc.deltaY) ? 'x' : 'y'
            if (mc.startItXorY == '') {
                mc.startItXorY = mc.itXorY
            }
            console.log('TouchDriver[move] itXorY:', mc.itXorY, 'start:', mc.startItXorY);

            mc.shiftX = mc.nowX - mc.startX
            mc.shiftY = mc.nowY - mc.startY
            if (autoMove) {
                tch_ref.style.transform = `translate3d(${mc.shiftX}px, ${mc.shiftY}px, 0px)`
                tch_ref.style.transition = `transform 0ms`
            } else {
                if (moveX) moveX(mc)
                if (moveY) moveY(mc)
                if (moveXY) moveXY(mc)
                // moveX(mc)
                // moveY(mc)
                // moveXY(mc)
            }
        }
    }
    const moveStartMouseOrTouch = (e) => {
        const moveCoord_ref = moveCoord.current
        e.preventDefault()
        isTouch.current = true
        let { nowX, nowY } = getInCoord(e)
        moveCoord_ref.startX = nowX
        moveCoord_ref.startY = nowY
        moveCoord_ref.nowX = nowX
        moveCoord_ref.nowY = nowY
        moveCoord_ref.startTime = Date.now()
        moveStart(moveCoord_ref)
    }
    //-------------------------------touch
    const moveDetectEnd = () => {
        let moveCoord_ref = moveCoord.current
        if (moveCoord_ref.startTime === 0) {
            // выходим если событие End пришлои не от нашего объекта
            return
        }
        const sensitivityTime = 300
        if (Date.now() - moveCoord_ref.startTime < sensitivityTime &&
            moveCoord_ref.shiftX !== 0 &&
            moveCoord_ref.shiftY !== 0) {
            moveCoord_ref.inertia = true
        }
        isTouch.current = false
        if (autoMove) {
            moveHome()
        } else {
            moveEnd(moveCoord_ref)
        }
        moveCoord.current = { ...moveCoordTemp }
    }
    const moveHome = () => {
        let tch_ref = touch.current
        tch_ref.style.transform = `translate3d(0px, 0px, 0px)`
        tch_ref.style.transition = `transform 200ms ease`
    }
    const EventSettings = {
        passive: false,
        // capture: false,
    }
    useEffect(() => {
        window.addEventListener('mouseup', moveDetectEnd)
        // window.addEventListener('mousemove', move)
        // window.addEventListener('touchmove', move)
        touch.current.addEventListener('touchstart', moveStartMouseOrTouch, EventSettings)
        return () => {
            window.removeEventListener('mouseup', moveDetectEnd)
            // window.removeEventListener('mousemove', move)
            // window.removeEventListener('touchmove', move)
            touch.current.removeEventListener('touchstart', moveStartMouseOrTouch, EventSettings)
        }
    }, [])
    // React.useLayoutEffect(() => {
    //     console.log('[touchDriver]useLayoutEffect');
    // })
    // useEffect(() => {
    //     console.log('[touchDriver]useEffect');
    // })
    let Component = component
    return (
        <Component
            ref={touch}
            // onTouchStart={moveStartMouseOrTouch}
            onTouchMove={move}
            onTouchEnd={moveDetectEnd}
            onMouseDown={moveStartMouseOrTouch}
            onMouseMove={move}
            // onMouseUp={moveDetectEnd}
            {...otherProps}
        >
            {children}
        </Component>
    )
})

TouchDriver.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    autoMove: PropTypes.bool,
    touchpad: PropTypes.bool,
    moveStart: PropTypes.func,
    moveX: PropTypes.func,
    moveY: PropTypes.func,
    moveXY: PropTypes.func,
    moveEnd: PropTypes.func,
}
TouchDriver.defaultProps = {
    component: 'div',
    autoMove: false,
    touchpad: false,
}

export default TouchDriver