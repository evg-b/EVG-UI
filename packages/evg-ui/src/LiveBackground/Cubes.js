import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import brightChange from '../utils/brightChange'

const styles = {
    base: {
        width: 'inherit',
        height: 'inherit',
    },
}
const config = {
    sizeCub: 40,
    minLevel: 30,
    maxLevel: 200,
    speedDefault: 1,
    colorFront: '#E0E0E0', // 300
    colorOrange: '#EF6C00',// orange
    colorBlue: '#0277BD',// blue
    colorPurple: '#4527A0',// Deep Purple
    colorRed: '#C62828',// red
    factorRejection: 0.3,
}
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
    constructor(ctx, x, y, directionX = 1, directionY = 1, shiftX = 1, shiftY = 1, colorBase = config.colorFront) {
        this.ctx = ctx
        this.startX = x
        this.startY = y
        this.x = x
        this.y = y
        this.shiftX = shiftX
        this.shiftY = shiftY
        this.colorBase = colorBase
        this.size = config.sizeCub
        this.directionX = directionX
        this.directionY = directionY
        // this.levelMax = Math.random() * config.maxLevel
        this.levelMax = Math.floor(Math.random() * (config.maxLevel - config.minLevel)) + config.minLevel
        this.level = 0
        this.levelTarget = 0
        this.levelFreez = -1
        this.levelDirect = 1
        this.water = true
        this.autopilot = false
        this.speed = config.speedDefault
    }
    setLevelTarget(level, speed = config.speedDefault) {
        this.levelTarget = level
        this.speed = speed
    }
    onFreez(levelFreez, speed = config.speedDefault) {
        this.levelFreez = levelFreez
        this.speed = speed
    }
    offFreez() {
        this.levelFreez = -1
        this.speed = config.speedDefault
    }
    setColor(color) {
        this.colorBase = color
    }
    setAutopilot(autopilot) {
        this.autopilot = autopilot
    }
    changeLevelDirect(maxLevel) {
        let newLevel = this.level + this.levelDirect * this.speed
        if (newLevel >= maxLevel) {
            this.levelDirect = -1
        }
        if (newLevel <= 0) {
            this.levelDirect = 1
        }
        this.level = newLevel < 0 ? 0 : newLevel
    }
    move() {
        this.x = this.startX + (this.level * this.directionX * this.shiftX * (this.level === 0 ? 0 : config.factorRejection))
        this.y = this.startY + (this.level * this.directionY * this.shiftY * (this.level === 0 ? 0 : config.factorRejection))
    }
    autopilotAnimation() {
        this.changeLevelDirect(this.levelMax)
        this.move()
    }
    targetAnimation() {
        this.changeLevelDirect(this.levelTarget)

        if (this.levelDirect === -1) {
            this.levelTarget = this.levelTarget - 1 * this.speed
        }
        this.levelTarget = this.levelTarget < 0 ? 0 : this.levelTarget
        this.move()
    }
    freezAnimation() {
        if (this.level !== this.levelFreez) {
            this.changeLevelDirect(this.levelFreez)
            this.move()
        }
    }
    renderSides() {
        const centeringBySize = (this.size / 2)
        const [startX1, startX2] = [this.startX - centeringBySize, this.startX + centeringBySize]
        const [startY1, startY2] = [this.startY - centeringBySize, this.startY + centeringBySize]
        const [nowX1, nowX2] = [this.x - centeringBySize, this.x + centeringBySize]
        const [nowY1, nowY2] = [this.y - centeringBySize, this.y + centeringBySize]

        // let levelPercent = (this.level / config.maxLevel) * 50
        // let colorSidetoFront = brightChange(this.colorBase, -20)
        // let colorSideX = brightChange(colorSidetoFront, levelPercent * this.shiftX * 1)
        // let colorSideY = brightChange(colorSidetoFront, levelPercent * this.shiftY * 1)

        let colorSideX = '#E0E0E0'
        let colorSideY = '#E0E0E0'

        if (this.directionY === 1) {
            // top
            this.ctx.beginPath();
            this.ctx.fillStyle = colorSideY
            // this.ctx.strokeStyle = colorSideY
            this.ctx.moveTo(startX1, startY1);
            this.ctx.lineTo(startX2, startY1)
            this.ctx.lineTo(nowX2, nowY1)
            this.ctx.lineTo(nowX1, nowY1)
            this.ctx.closePath()
            this.ctx.fill()

            // this.ctx.stroke()
        } else {
            // bottom
            this.ctx.beginPath();
            this.ctx.fillStyle = colorSideY
            // this.ctx.strokeStyle = colorSideY
            this.ctx.moveTo(startX1, startY2);
            this.ctx.lineTo(startX2, startY2);
            this.ctx.lineTo(nowX2, nowY2)
            this.ctx.lineTo(nowX1, nowY2)
            this.ctx.closePath()
            this.ctx.fill()

            // this.ctx.stroke()
        }
        if (this.directionX === 1) {
            // right
            this.ctx.beginPath();
            this.ctx.fillStyle = colorSideX
            // this.ctx.strokeStyle = colorSideX
            this.ctx.moveTo(startX1, startY1);
            this.ctx.lineTo(nowX1, nowY1);
            this.ctx.lineTo(nowX1, nowY2);
            this.ctx.lineTo(startX1, startY2);
            this.ctx.closePath()
            this.ctx.fill()

            // this.ctx.stroke()
        } else {
            // left
            this.ctx.beginPath();
            this.ctx.fillStyle = colorSideX
            // this.ctx.strokeStyle = colorSideX
            this.ctx.moveTo(startX2, startY1);
            this.ctx.lineTo(nowX2, nowY1);
            this.ctx.lineTo(nowX2, nowY2);
            this.ctx.lineTo(startX2, startY2);
            this.ctx.closePath()
            this.ctx.fill()

            // this.ctx.stroke()
        }
    }
    renderFront() {
        let levelPercent = (this.level / config.maxLevel) * 50
        let colorFrontToCenter = brightChange(this.colorBase, -(this.shiftX * this.shiftY) * 10)
        this.ctx.fillStyle = brightChange(colorFrontToCenter, levelPercent)
        // this.ctx.strokeStyle = brightChange(colorFrontToCenter, levelPercent)
        // this.ctx.closePath()
        this.ctx.fillRect(this.x - (this.size / 2), this.y - (this.size / 2), this.size, this.size);
    }
    render() {
        if (this.levelFreez === -1) {
            if (this.levelTarget === 0 && this.autopilot) {
                this.speed !== 1 ? this.speed = 1 : null
                this.autopilotAnimation()
            }
            if (this.levelTarget !== 0) {
                this.targetAnimation()
            }
        } else {
            this.freezAnimation()
        }

        this.renderSides()
        this.renderFront()
        // console.log(`x:${this.x} y:${this.y}`)
    }
}
class OverseerCubs {
    constructor(ctx, OverseerId, width, height) {
        this.ctx = ctx
        this.OverseerId = OverseerId
        this.w = width
        this.h = height
        this.cubs = []
        this.step = 0
        this.stepMax = 5
        this.timeAnimationSpeed = 60
        this.mapInWork = new Map()
        this.mapInFreez = new Map()
        this.ripple = false
        this.render = this.render.bind(this)
    }
    setRipple(ripple) {
        this.ripple = ripple
    }
    filling(fillingX, fillingY) {
        const cubsCounX = fillingX === 0 ? 2 + (this.w / config.sizeCub | 0) : fillingX
        const cubsCounY = fillingY === 0 ? 2 + (this.h / config.sizeCub | 0) : fillingY
        // const [cubsCounX, cubsCounY] = [8, 8]

        const startX = (config.sizeCub + this.w - cubsCounX * config.sizeCub) / 2
        const startY = (config.sizeCub + this.h - cubsCounY * config.sizeCub) / 2

        for (let j = 0; j < cubsCounY; j++) {
            let y = startY + j * config.sizeCub // found y
            for (let i = 0; i < cubsCounX; i++) {
                let x = startX + i * config.sizeCub // found x

                let dif = getShift(x, y, this.w, this.h)
                this.cubs.push(new Cub(this.ctx, x, y, ...getDirection(x, y, this.w, this.h), dif.x, dif.y))
            }
        }
        this.cubs = this.cubs.sort((a, b) => a.shiftX + a.shiftY < b.shiftX + b.shiftY ? 1 : -1)
        this.stepMax = Math.max(...this.cubs.map(cub => cub.shiftX * cub.shiftX + cub.shiftY * cub.shiftY))
    }
    centerFreez() {
        this.cubs.forEach((cub, index) => {
            let w = cub.shiftX * cub.shiftX + cub.shiftY * cub.shiftY
            if (w > 0 && w < 0.01) {
                this.mapInFreez.set(index, cub)
            }
        })
        this.mapInFreez.forEach((cub) => {
            cub.onFreez(0, 1)
            cub.setColor(config.colorPurple)
        })
    }
    offFreez() {
        this.mapInFreez.forEach(cub => cub.offFreez())
        this.mapInFreez = new Map()
    }
    rippleAnimation() {
        const colorDev = false
        let stepSize = 0.01
        let thickWave = 0.05

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
                colorDev && cub.setColor(config.colorFront)
                this.mapInWork.delete(index)
            }
        })

        // 2) находим новых в новой Map и даем им команду
        newMap.forEach((cub, index) => {
            if (!this.mapInWork.has(index)) {
                colorDev && cub.setColor(config.colorRed)
                cub.setLevelTarget(100, 8)
            }
        })

        // 3) заменяем старую мапу на новую
        this.mapInWork = newMap

        if (this.step > this.stepMax) {
            this.step = 0
        } else {
            this.step = (this.step + stepSize)
        }
    }
    autopilot(switchBool = false) {
        this.cubs.forEach(cub => cub.setAutopilot(switchBool))
    }
    render() {
        // this.ctx.clearRect(0, 0, this.w, this.h) // clear
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
class Cubes extends React.Component {
    constructor(props) {
        super(props);
        this.CanvasWrapper_Ref = React.createRef();
        this.Canvas_Ref = React.createRef();
        this.OverseerId = { id: 0 }
        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
    }
    componentDidMount() {
        // 1) init
        const ctx = this.Canvas_Ref.current
        console.log('ctx:', this.Canvas_Ref);
        ctx.width = ctx.offsetParent.clientWidth
        ctx.height = ctx.offsetParent.clientHeight
        this.Overseer = new OverseerCubs(ctx.getContext('2d', { alpha: false }), this.OverseerId, ctx.width, ctx.height)
        this.Overseer.filling(this.props.fillingX, this.props.fillingY)
        // 2) start requestAnimationFrame
        this.Overseer.render()
        setTimeout(() => {
            this.Overseer.autopilot(true)
        }, 1000 * 2)
        setTimeout(() => {
            this.Overseer.setRipple(true)
        }, 1000 * 4)
        setTimeout(() => {
            this.Overseer.setRipple(false)
        }, 1000 * 6)
        // console.log('hi')
    }
    stop() {
        let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
        cancelAnimationFrame(this.OverseerId.id)
    }
    start() {
        this.Overseer.render()
    }
    render() {
        const {
            children,
            classes,
            className,
            fillingX,
            fillingY,
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

    fillingX: PropTypes.number,
    fillingY: PropTypes.number,
}
Cubes.defaultProps = {
    fillingX: 0,
    fillingY: 0,
}
Cubes.displayName = 'CubesEVG'
export default withStyles(styles)(Cubes)