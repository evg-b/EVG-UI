import React from 'react';
import PropTypes from 'prop-types';
import { Color, withStyles } from '../styles'

const styles = {
    base: {
        width: '100%',
        height: '100%',
    },
}
const config = {
    sizeCub: 40,
    minLevel: 30,
    maxLevel: 200,
    speedDefault: 1,
    colorBase: '#E0E0E0', // 300
    factorRejection: 0.3,
}
const mapFrontColorCache = new Map()
const mapSideColorCache = new Map()

function getShift(x, y, w, h) {
    const [centerX, centerY] = [w / 2, h / 2]
    const [difX, difY] = [Math.abs(centerX - x), Math.abs(centerY - y)]
    return { x: Number((difX / centerX).toFixed(2)), y: Number((difY / centerY).toFixed(2)) }
}
function getDirection(x, y, w, h) {
    const [centerX, centerY] = [w / 2, h / 2]
    let directionX, directionY
    /* 
        direction - в какую сторону направлять движение
        1 ####### 2
        # \     / #
        # /     \ #
        4 ####### 3
        
        x = 1 -> 2 и 3 стороны иначе наоборот 
        y = 1 -> 3 и 4 стороны иначе наоборот 
    */
    return [directionX, directionY] = [x > centerX ? 1 : -1, y > centerY ? 1 : -1]
}
class Cub {
    constructor(ctx, x, y, directionX = 1, directionY = 1, shiftX = 1, shiftY = 1, colorBase, levelMin, levelMax, size) {
        this.ctx = ctx
        this.startX = x
        this.startY = y
        this.x = x
        this.y = y
        this.shiftX = shiftX
        this.shiftY = shiftY
        this.colorBase = colorBase
        this.size = size
        this.directionX = directionX
        this.directionY = directionY
        // this.levelMax = Math.random() * config.maxLevel
        this.levelMaxGlobal = levelMax
        this.levelMax = Math.floor(Math.random() * (levelMax - levelMin)) + levelMin
        this.level = 0
        this.levelTarget = 0
        this.levelFreez = -1
        this.levelDirect = 1
        // this.water = true
        this.autopilot = false
        this.speed = config.speedDefault
        this.speedTarget = config.speedDefault
        // this.speed = 1
    }
    setLevelTarget(level, speed = this.speed) {
        this.levelTarget = level
        this.speedTarget = speed
    }
    // onFreez(levelFreez, speed = this.speed) {
    //     this.levelFreez = levelFreez
    //     this.speed = speed
    // }
    // offFreez() {
    //     this.levelFreez = -1
    //     this.speed = this.speed
    // }
    setSpeed(speed = this.speed) {
        this.speed = speed
    }
    setColor(color) {
        this.colorBase = color
    }
    setAutopilot(autopilot) {
        this.autopilot = autopilot
    }
    changeLevelDirect(maxLevel, speed) {
        let newLevel = this.level + this.levelDirect * speed
        if (newLevel >= maxLevel) {
            this.levelDirect = -1
        }
        if (newLevel <= 0) {
            this.levelDirect = 1
        }
        this.level = newLevel < 0 ? 0 : newLevel
    }
    move() {
        let shiftNowX = +(this.level * this.directionX * this.shiftX * (this.level === 0 ? 0 : config.factorRejection)).toFixed(1)
        let shiftNowY = +(this.level * this.directionY * this.shiftY * (this.level === 0 ? 0 : config.factorRejection)).toFixed(1)
        this.x = this.startX + shiftNowX
        this.y = this.startY + shiftNowY
    }
    autopilotAnimation() {
        this.changeLevelDirect(this.levelMax, this.speed)
        this.move()
    }
    targetAnimation() {
        this.changeLevelDirect(this.levelTarget, this.speedTarget)

        if (this.levelDirect === -1) {
            this.levelTarget = this.levelTarget - 1 * this.speedTarget
        }
        this.levelTarget = this.levelTarget < 0 ? 0 : this.levelTarget
        this.move()
    }
    // freezAnimation() {
    //     if (this.level !== this.levelFreez) {
    //         this.changeLevelDirect(this.levelFreez)
    //         this.move()
    //     }
    // }
    renderSides() {
        const centeringBySize = (this.size / 2)
        const [startX1, startX2] = [this.startX - centeringBySize, this.startX + centeringBySize]
        const [startY1, startY2] = [this.startY - centeringBySize, this.startY + centeringBySize]
        const [nowX1, nowX2] = [this.x - centeringBySize, this.x + centeringBySize]
        const [nowY1, nowY2] = [this.y - centeringBySize, this.y + centeringBySize]

        let levelPercent = (this.level / this.levelMaxGlobal) * 50

        const [keySideX, keySideY] = [`X${levelPercent * this.shiftX}`, `Y${levelPercent * this.shiftY}`]
        let colorSideX, colorSideY

        if (mapSideColorCache.has(keySideX)) {
            colorSideX = mapSideColorCache.get(keySideX)
        } else {
            let colorSidetoFront = Color(this.colorBase).Bright('rgb', -20)
            colorSideX = Color(colorSidetoFront).Bright('rgb', levelPercent * this.shiftX)

            // кэшируем значение цвета для каждого уровня
            mapSideColorCache.set(keySideX, colorSideX)
        }

        if (mapSideColorCache.has(keySideY)) {
            colorSideY = mapSideColorCache.get(keySideY)
        } else {
            let colorSidetoFront = Color(this.colorBase).Bright('rgb', -20)
            colorSideY = Color(colorSidetoFront).Bright('rgb', levelPercent * this.shiftY)

            // кэшируем значение цвета для каждого уровня
            mapSideColorCache.set(keySideY, colorSideY)
        }

        if (this.directionY === 1) {
            // top
            this.ctx.beginPath();
            this.ctx.fillStyle = colorSideY
            this.ctx.moveTo(startX1, startY1);
            this.ctx.lineTo(startX2, startY1)
            this.ctx.lineTo(nowX2, nowY1)
            this.ctx.lineTo(nowX1, nowY1)
            this.ctx.closePath()
            this.ctx.fill()
        } else {
            // bottom
            this.ctx.beginPath();
            this.ctx.fillStyle = colorSideY
            this.ctx.moveTo(startX1, startY2);
            this.ctx.lineTo(startX2, startY2);
            this.ctx.lineTo(nowX2, nowY2)
            this.ctx.lineTo(nowX1, nowY2)
            this.ctx.closePath()
            this.ctx.fill()
        }
        if (this.directionX === 1) {
            // right
            this.ctx.beginPath();
            this.ctx.fillStyle = colorSideX
            this.ctx.moveTo(startX1, startY1);
            this.ctx.lineTo(nowX1, nowY1);
            this.ctx.lineTo(nowX1, nowY2);
            this.ctx.lineTo(startX1, startY2);
            this.ctx.closePath()
            this.ctx.fill()
        } else {
            // left
            this.ctx.beginPath();
            this.ctx.fillStyle = colorSideX
            this.ctx.moveTo(startX2, startY1);
            this.ctx.lineTo(nowX2, nowY1);
            this.ctx.lineTo(nowX2, nowY2);
            this.ctx.lineTo(startX2, startY2);
            this.ctx.closePath()
            this.ctx.fill()
        }
    }
    renderFront() {
        // mapFrontColorCache
        let levelPercent = (this.level / this.levelMaxGlobal) * 50
        let keyFront = `${levelPercent},${this.shiftX * this.shiftY}`
        if (mapFrontColorCache.has(keyFront)) {
            this.ctx.fillStyle = mapFrontColorCache.get(keyFront)
        } else {
            let colorFrontToCenter = Color(this.colorBase).Bright('rgb', -(this.shiftX * this.shiftY) * 10)
            const colorFront = Color(colorFrontToCenter).Bright('rgb', levelPercent)
            this.ctx.fillStyle = colorFront

            // кэшируем значение цвета для каждого уровня
            mapFrontColorCache.set(keyFront, colorFront)
        }
        this.ctx.fillRect(this.x - (this.size / 2), this.y - (this.size / 2), this.size, this.size);
    }
    render() {
        // if (this.levelFreez === -1) {
        //     if (this.levelTarget === 0 && this.autopilot) {
        //         this.speed !== 1 ? this.speed = 1 : null
        //         this.autopilotAnimation()
        //     }
        //     if (this.levelTarget !== 0) {
        //         this.targetAnimation()
        //     }
        // } else {
        //     this.freezAnimation()
        // }
        if (this.levelTarget === 0 && this.autopilot) {
            // this.speed !== 1 ? this.speed = 1 : null
            this.autopilotAnimation()
        }
        if (this.levelTarget !== 0) {
            this.targetAnimation()
        }
        this.renderSides()
        this.renderFront()
    }
}
class OverseerCubs {
    constructor(ctx, OverseerId, width, height, color = config.colorBase, speed = config.speedDefault) {
        this.ctx = ctx
        this.OverseerId = OverseerId
        this.w = width
        this.h = height
        this.cubs = []
        this.step = 0
        // this.stepMax = 5
        this.timeAnimationSpeed = 60
        this.mapInWork = new Map()
        this.mapInRipple = new Map()
        this.mapInFreez = new Map()
        this.ripple = false
        this.rippleLevel = 0
        this.rippleSpeed = 1
        this.color = color
        this.sped = speed
        this.render = this.render.bind(this)
    }

    setRipple(rippleLevel = 0, rippleSpeed = 1) {
        this.ripple = true
        this.rippleLevel = rippleLevel
        this.rippleSpeed = rippleSpeed
    }
    filling(fillingX, fillingY, levelMin, levelMax, sizeCub) {
        const cubsCounX = fillingX === 0 ? 2 + (this.w / sizeCub | 0) : fillingX
        const cubsCounY = fillingY === 0 ? 2 + (this.h / sizeCub | 0) : fillingY

        const startX = (sizeCub + this.w - cubsCounX * sizeCub) / 2
        const startY = (sizeCub + this.h - cubsCounY * sizeCub) / 2

        for (let j = 0; j < cubsCounY; j++) {
            let y = startY + j * sizeCub // found y
            for (let i = 0; i < cubsCounX; i++) {
                let x = startX + i * sizeCub // found x

                let dif = getShift(x, y, this.w, this.h)
                // let dif = { x: 0.37, y: 0.5 } // заглушка
                this.cubs.push(new Cub(this.ctx, x, y, ...getDirection(x, y, this.w, this.h), dif.x, dif.y, this.color, levelMin, levelMax, sizeCub))
            }
        }
        this.cubs = this.cubs.sort((a, b) => a.shiftX + a.shiftY < b.shiftX + b.shiftY ? 1 : -1)
        // this.stepMax = Math.max(...this.cubs.map(cub => cub.shiftX * cub.shiftX + cub.shiftY * cub.shiftY))
    }
    // centerFreez() {
    //     this.cubs.forEach((cub, index) => {
    //         let w = cub.shiftX * cub.shiftX + cub.shiftY * cub.shiftY
    //         if (w > 0 && w < 0.01) {
    //             this.mapInFreez.set(index, cub)
    //         }
    //     })
    //     this.mapInFreez.forEach((cub) => {
    //         cub.onFreez(0, 1)
    //         cub.setColor(config.colorPurple)
    //     })
    // }
    // offFreez() {
    //     this.mapInFreez.forEach(cub => cub.offFreez())
    //     this.mapInFreez = new Map()
    // }
    rippleAnimation() {
        const colorDev = false
        let stepSize = 0.01
        let thickWave = 0.07

        let step = this.step * 3

        let newMap = new Map()
        this.cubs.forEach((cub, index) => {
            let w = cub.shiftX * cub.shiftX + cub.shiftY * cub.shiftY
            if (w > step && w < step + thickWave) {
                newMap.set(index, cub)
            }
        })

        // 1) убираем из старого Map тех кого нету и при удалении даем им команду 
        this.mapInWork.forEach((cub, index) => {
            if (!newMap.has(index)) {
                // этих кубов нету в новой Map
                // cub.setLevelTarget(1, 6)
                // colorDev && cub.setColor(config.colorBase)
                this.mapInWork.delete(index)
            }
        })

        // 2) находим новых в новой Map и даем им команду
        newMap.forEach((cub, index) => {
            if (!this.mapInWork.has(index)) {
                // colorDev && cub.setColor(config.colorRed)
                cub.setLevelTarget(this.rippleLevel, this.rippleSpeed)
                this.mapInRipple.set(index, index)
            }
        })

        // 3) заменяем старую мапу на новую
        this.mapInWork = newMap

        if (this.cubs.length === this.mapInRipple.size) {
            // заканчиваем ripple т.к все уже получили команду на новый Level
            this.ripple = false
            // clear
            this.mapInRipple.clear()
            this.mapInWork.clear()
            this.step = 0

        } else {
            this.step += stepSize
        }
    }
    autopilot(switchBool = false) {
        this.cubs.forEach(cub => cub.setAutopilot(switchBool))
    }
    setColor(color = this.color) {
        let newColor = color ? Color(color).Base() : config.colorBase
        mapFrontColorCache.clear()
        mapSideColorCache.clear()
        this.cubs.forEach(cub => cub.setColor(newColor))
    }
    setSpeed(newSpeed = this.speed) {
        this.cubs.forEach(cub => cub.setSpeed(newSpeed))
    }
    render() {
        this.cubs.forEach(cub => cub.render()) // render
        this.ripple && this.rippleAnimation()
        this.OverseerId.id = requestAnimationFrame(this.render)
    }
    renderTest() {
        setInterval(() => {
            this.cubs.forEach(cub => cub.render()) // render
            if (this.ripple) {
                this.rippleAnimation()
            }
        }, 500)
    }
}

/**
 * Cubes - интерактивный живой фон из кубов. Работает все с помощью `canvas` 2d без сторонних зависимостей. 
 * Удивляйте своих пользователей красивой фоновой анимацией.
*/

class Cubes extends React.Component {
    constructor(props) {
        super(props);
        this.CanvasWrapper_Ref = React.createRef();
        this.Canvas_Ref = this.props.innerRef || React.createRef();
        this.OverseerId = { id: 0 }
        this.renderIsStart = false
        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
        this.ripple = this.ripple.bind(this);
    }
    componentDidMount() {
        // 1) init
        const ctx = this.Canvas_Ref.current
        setTimeout(() => {
            let { width, height } = ctx.parentNode.getBoundingClientRect()
            ctx.width = width
            ctx.height = height

            this.Overseer = new OverseerCubs(ctx.getContext('2d', { alpha: false }), this.OverseerId, ctx.width, ctx.height)
            this.Overseer.filling(this.props.fillingX, this.props.fillingY, this.props.levelMin, this.props.levelMax, this.props.size)
            // // 2) start requestAnimationFrame
            this.Overseer.autopilot(this.props.autopilot)
            this.Overseer.setColor(this.props.color)
            this.Overseer.setSpeed(this.props.speed)

            this.start()
        }, 0)
    }
    componentDidUpdate(prevProps) {
        const { autopilot, color, speed, size } = prevProps
        const { autopilot: newAutopilot, color: newColor, speed: newSpeed, size: newSize } = this.props
        // autopilot
        if (autopilot !== newAutopilot) {
            this.Overseer.autopilot(newAutopilot)
        }
        // color
        if (color !== newColor) {
            this.Overseer.setColor(newColor)
        }
        // speed
        if (speed !== newSpeed) {
            this.Overseer.setSpeed(newSpeed)
        }
        // size
        if (size !== newSize) {
            this.Overseer.cubs = []
            this.Overseer.filling(this.props.fillingX, this.props.fillingY, this.props.levelMin, this.props.levelMax, newSize)
            this.Overseer.autopilot(this.props.autopilot)
        }
    }
    stop() {
        this.renderIsStart = false
        let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
        cancelAnimationFrame(this.OverseerId.id)
    }
    ripple(level, speed) {
        this.Overseer.setRipple(level, speed)
    }
    start() {
        if (!this.renderIsStart) {
            this.renderIsStart = true
            this.Overseer.render()
        }
    }
    render() {
        const {
            children,
            classes,
            className,
            autopilot,
            innerRef,
            color,
            fillingX,
            fillingY,
            levelMin,
            levelMax,
            speed,
            size,
            ...otherProps
        } = this.props
        return (
            <canvas ref={this.Canvas_Ref} {...otherProps}></canvas>
        );
    }
    componentWillUnmount() {
        this.stop()
    }

}
Cubes.propTypes = {

    /**
     * Объект содержит jss стили компонента.
    */
    classes: PropTypes.object,

    /**
     * Чтобы указать CSS классы, используйте этот атрибут.
    */
    className: PropTypes.string,

    /**
     * Это свойство не реализуется.
    */
    children: PropTypes.any,

    /**
     * ref ссылка компонента.
    */
    innerRef: PropTypes.object,

    /**
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,

    /**
     * Если true, кубы начинают двигаться сами по себе.
    */
    autopilot: PropTypes.bool,

    /**
     * Заполнение области по X. Если 0 то полное заполнение до краев.
    */
    fillingX: PropTypes.number,

    /**
     * Заполнение области по Y. Если 0 то полное заполнение до краев.
    */
    fillingY: PropTypes.number,

    /**
     * Минимальный уровень высоты до которого может опускаться один куб.
    */
    levelMin: PropTypes.number,

    /**
     * Максимальный уровень высоты до которого может опускаться один куб.
    */
    levelMax: PropTypes.number,

    /**
     * Размер куба.
    */
    size: PropTypes.number,

    /**
     * Скорость изменения высоты куба.
    */
    speed: PropTypes.number,
}
Cubes.defaultProps = {
    autopilot: true,
    color: '#E0E0E0',
    fillingX: 0,
    fillingY: 0,
    levelMin: 30,
    levelMax: 100,
    size: 40,
    speed: 1,
}
Cubes.displayName = 'CubesEVG'
export default withStyles(styles)(Cubes)