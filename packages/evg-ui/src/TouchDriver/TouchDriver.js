import React from 'react';
import PropTypes from 'prop-types';

const moveCoordTemp = {
    startItXorY: '',
    itXorY: '',
    startDirection: '', // top | bottom | left | right
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
const prevDeltaTemp = { x: 0, y: 0 }
const EventSettings = {
    capture: true, // запускаемся на погружении
    passive: false,
}
const directionX = { '-1': 'left', '1': 'right' }
const directionY = { '-1': 'top', '1': 'bottom' }

/**
 * Вычисляет взаимодействие с компонентом в двумерной координатной плоскости. 
 * С его помощью можно вычислять начало, конец, реальное положение, инерцию жестов. Используется во многих компонентах.
*/

class TouchDriver extends React.Component {
    constructor(props) {
        super(props);
        this.slip = 0
        this.slipSensitivity = 2
        this.touchRef = this.props.innerRef || React.createRef();
        this.isTouch = React.createRef(false);
        this.prevDelta = React.createRef();
        this.moveCoord = React.createRef();
        this.moveCoordInit = this.moveCoordInit.bind(this)
        this.getInCoord = this.getInCoord.bind(this)
        this.moveStartMouseOrTouch = this.moveStartMouseOrTouch.bind(this)
        this.move = this.move.bind(this)
        this.moveDetectEnd = this.moveDetectEnd.bind(this)
        this.moveHome = this.moveHome.bind(this)
    }
    componentDidMount() {
        this.moveCoordInit()
        // mouse
        this.touchRef.current.addEventListener('mousedown', this.moveStartMouseOrTouch, EventSettings)
        window.addEventListener('mousemove', this.move, EventSettings)
        window.addEventListener('mouseup', this.moveDetectEnd, EventSettings)
        // touch
        this.touchRef.current.addEventListener('touchstart', this.moveStartMouseOrTouch, EventSettings)
        this.touchRef.current.addEventListener('touchmove', this.move, EventSettings)
        this.touchRef.current.addEventListener('touchend', this.moveDetectEnd, EventSettings)
    }
    componentWillUnmount() {
        // mouse
        this.touchRef.current.removeEventListener('mousedown', this.moveStartMouseOrTouch, EventSettings)
        window.removeEventListener('mousemove', this.move, EventSettings)
        window.removeEventListener('mouseup', this.moveDetectEnd, EventSettings)
        // touch
        this.touchRef.current.removeEventListener('touchstart', this.moveStartMouseOrTouch, EventSettings)
        this.touchRef.current.removeEventListener('touchmove', this.move, EventSettings)
        this.touchRef.current.removeEventListener('touchend', this.moveDetectEnd, EventSettings)
    }
    moveCoordInit() {
        this.moveCoord.current = { ...moveCoordTemp }
        this.prevDelta.current = { ...prevDeltaTemp }
        this.slip = 0
    }
    getInCoord(e) {
        let tch_ref = this.touchRef.current
        let clientX = 0, clientY = 0

        // 1 - находим координаты нажатия относительно экрана
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
            //     break
        }

        // 2 - находим координаты ref родителя относительно экрана
        let { x, y } = tch_ref.getBoundingClientRect()

        // 3 - в итоге получаем координаты нажатия внутри родительского элемента
        let nowX, nowY
        if (this.props.autoMove) {
            nowX = clientX
            nowY = clientY
        } else {
            nowX = clientX - x
            nowY = clientY - y
        }
        return { nowX, nowY }
    }
    moveStartMouseOrTouch(e) {
        const moveCoord_ref = this.moveCoord.current
        // if (moveCoord_ref.startTime !== 0) {
        //     console.log('dubleClick!!!')
        // }
        const { moveStart } = this.props
        this.isTouch.current = true
        let { nowX, nowY } = this.getInCoord(e)
        moveCoord_ref.startX = nowX
        moveCoord_ref.startY = nowY
        moveCoord_ref.nowX = nowX
        moveCoord_ref.nowY = nowY
        moveCoord_ref.startTime = Date.now()
        moveStart && moveStart(moveCoord_ref)
    }
    move(e) {
        const { moveXY, autoMove, scrollable } = this.props
        !scrollable && e.preventDefault()
        const mc = this.moveCoord.current
        let prevDelta = this.prevDelta.current
        let tch_ref = this.touchRef.current
        if (this.isTouch.current) {
            let { nowX, nowY } = this.getInCoord(e)
            // формируем дельты
            if (mc.nowX !== 0) { mc.deltaX = nowX - mc.nowX }
            if (mc.nowY !== 0) { mc.deltaY = nowY - mc.nowY }

            mc.nowX = nowX
            mc.nowY = nowY

            if (mc.deltaX === mc.deltaY && mc.nowX !== 0 && mc.nowY !== 0) {
                mc.deltaY = prevDelta.y
                mc.deltaX = prevDelta.x
            }
            prevDelta = { x: mc.deltaX, y: mc.deltaY }

            mc.itXorY = Math.abs(mc.deltaX) > Math.abs(mc.deltaY) ? 'x' : 'y'
            mc.direction = mc.itXorY === 'x' ? directionX[Math.sign(mc.deltaX)] : directionY[Math.sign(mc.deltaY)]

            if (this.slip === this.slipSensitivity && mc.startItXorY === '' && mc.startDirection === '') {
                mc.startItXorY = mc.itXorY
                mc.startDirection = mc.direction
            } else if (this.slip < this.slipSensitivity + 1) {
                this.slip = this.slip + 1
            }

            mc.shiftX = mc.nowX - mc.startX
            mc.shiftY = mc.nowY - mc.startY
            if (autoMove) {
                tch_ref.style.transform = `translate3d(${mc.shiftX}px, ${mc.shiftY}px, 0px)`
                tch_ref.style.transition = `transform 0ms`
            } else {
                moveXY && moveXY(mc)
            }
        }
    }
    moveDetectEnd() {
        const { moveEnd } = this.props
        let moveCoord_ref = this.moveCoord.current
        if (moveCoord_ref.startTime === 0) {
            // выходим если событие End пришло не от нашего объекта
            return
        }
        const sensitivityTime = 300
        if (Date.now() - moveCoord_ref.startTime < sensitivityTime &&
            moveCoord_ref.shiftX !== 0 &&
            moveCoord_ref.shiftY !== 0) {
            moveCoord_ref.inertia = true
        }
        this.isTouch.current = false
        if (this.props.autoMove) {
            this.moveHome()
        } else {
            moveEnd && moveEnd(moveCoord_ref)
        }
        this.moveCoordInit()
    }
    moveHome() {
        let tch_ref = this.touchRef.current
        tch_ref.style.transform = `translate3d(0px, 0px, 0px)`
        tch_ref.style.transition = `transform 200ms ease`
    }
    render() {
        const {
            children,
            component: Component = 'div',
            innerRef,
            autoMove,
            touchpad,
            scrollable,
            moveStart,
            moveXY,
            moveEnd,
            ...otherProps
        } = this.props
        return (
            <Component
                ref={this.touchRef}
                {...otherProps}
            >
                {children}
            </Component>
        )
    }
}
TouchDriver.propTypes = {

    /**
     * Это контент между открывающим и закрывающим тегом компонента.
    */
    children: PropTypes.node,

    /**
     * Объект содержит jss стили компонента.
    */
    classes: PropTypes.object,

    /**
     * Чтобы указать CSS классы, используйте этот атрибут.
    */
    className: PropTypes.string,

    /**
     * Корневой узел. Это HTML элемент или компонент.
    */
    component: PropTypes.elementType,

    /**
     * ref ссылка компонента.
    */
    innerRef: PropTypes.object,

    /**
     * Если true, компонент перемещается сам.
    */
    autoMove: PropTypes.bool,

    /**
     * Если true, не останавливает нативный скролл при движении на поверхности TouchDriver.
    */
    scrollable: PropTypes.bool,

    /**
     * Если true, учитывается движение по touchpad.
    */
    touchpad: PropTypes.bool,

    /**
     * Вызывается при касании к области внутри компонента.
    */
    moveStart: PropTypes.func,

    /**
     * Вызывается при движении курсора или пальца по области и за ее пределами. 
     * Если до этого сработал moveStart.
    */
    moveXY: PropTypes.func,

    /**
     * Вызывается при окончании движения.
    */
    moveEnd: PropTypes.func,
}
TouchDriver.defaultProps = {
    component: 'div',
    autoMove: false,
    touchpad: false,
    scrollable: false,
}

export default TouchDriver