import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles'
import TouchDriver from '../TouchDriver'

const styles = {
    base: {
        '--evg-scroller-size-y': 0,
        '--evg-scroller-size-x': 0,
        '--evg-scroller-y': 0,
        '--evg-scroller-x': 0,
        position: 'relative',
    },
    wrapper: {
        overflow: 'scroll',
        maxHeight: 'inherit',
        height: 'inherit',
        minHeight: 'inherit',
        maxWidth: 'inherit',
        width: 'inherit',
        minWidth: 'inherit',
        '-ms-overflow-style': 'none',  /* IE and Edge */
        scrollbarWidth: 'none',  /* Firefox */
        '&::-webkit-scrollbar': { /* chrome */
            display: 'none',
        },
    },
    scrollVisible: {
        opacity: '1!important',
    },
    autoHide: {
        opacity: 0,
        transition: props => `opacity ${props.autoHideDuration}ms linear`,
    },
    track: {
        zIndex: 1,
        cursor: 'pointer',
        position: 'absolute',
        backgroundColor: props => props.Color.Base('rgba', 0.1),
        borderRadius: '5px 5px',
        '&:after': {
            content: '""',
            position: 'absolute',
            backgroundColor: props => props.Color.Base('rgba', 0.6),
            borderRadius: '5px 5px',
        },
        '&:hover': {
            opacity: 1,
        }
    },
    trackY: {
        top: 0,
        right: 0,
        width: props => `${props.trackSize}px`,
        height: '100%',
        '&:after': {
            transform: 'translateY(var(--evg-scroller-y))',
            right: '0px',
            width: props => `${props.trackSize}px`,
            height: 'var(--evg-scroller-size-y)',
            willChange: 'transform',
        }
    },
    trackX: {
        left: 0,
        bottom: 0,
        width: '100%',
        height: props => `${props.trackSize}px`,
        '&:after': {
            transform: 'translateX(var(--evg-scroller-x))',
            bottom: '0px',
            height: props => `${props.trackSize}px`,
            width: 'var(--evg-scroller-size-x)',
            willChange: 'transform',
        }
    },
}

/**
 * Кроссбраузерный скроллбар.
*/

const Scroll = React.forwardRef(function Scroll(props, ref) {
    const {
        classes,
        className,
        children,
        component: Component = 'div',
        color,
        vertical,
        horizontal,
        autoHide,
        autoHideDuration,
        autoHideTimeout,
        trackSize,
        onScroll,
        onScrollStart,
        onScrollStop,
        style,
        ...otherProps
    } = props

    let ScrollBase_ref = useRef()
    ScrollBase_ref = ref || ScrollBase_ref
    const ScrollSpace_ref = useRef()
    const ScrollWrapper_ref = useRef()

    const observer_ref = useRef()

    const [satisfactoryHeight, setSatisfactoryHeight] = useState(false)
    const [satisfactoryWidth, setSatisfactoryWidth] = useState(false)
    const [scrollVisible, setScrollVisible] = useState(false);

    const touchTrack = useRef(false)
    const prevNow = useRef({ x: 0, y: 0 })
    const lastMove = useRef(false)

    const setEvgVar = (key, val) => {
        // установка css var
        const S_B_S = ScrollBase_ref.current
        S_B_S.style.setProperty(key, val)
    }

    const getSpace = () => {
        // const { offsetWidth, offsetHeight } = ScrollBase_ref.current
        const { offsetWidth, offsetHeight } = ScrollWrapper_ref.current
        const { scrollWidth, scrollHeight } = ScrollSpace_ref.current
        return {
            offset: {
                x: offsetWidth,
                y: offsetHeight,
            },
            scroll: {
                x: scrollWidth,
                y: scrollHeight,
            }
        }
    }

    const calcScrollerSize = () => {
        const { offset, scroll } = getSpace()
        return {
            x: (offset.x / scroll.x) * offset.x | 0,
            y: (offset.y / scroll.y) * offset.y | 0,
        }
    }

    function satisfactorySize(e) {
        const { offset, scroll } = getSpace()

        if (offset.y < scroll.y) {
            setSatisfactoryHeight(true)
        } else {
            setSatisfactoryHeight(false)
        }
        if (offset.x < scroll.x) {
            setSatisfactoryWidth(true)
        } else {
            setSatisfactoryWidth(false)
        }
        setEvgVar('--evg-scroller-size-y', `${calcScrollerSize().y}px`)
        setEvgVar('--evg-scroller-size-x', `${calcScrollerSize().x}px`)
    }

    const calcPosition = (newPositionScroller = 0, mod = 'y') => {
        const { offset, scroll } = getSpace()
        let barSize = mod === 'y' ? calcScrollerSize().y : calcScrollerSize().x

        let workSpace = mod === 'y' ? offset.y : offset.x
        let allSpace = mod === 'y' ? scroll.y : scroll.x
        let ratioShift = allSpace / workSpace

        let startScroll = 0
        let endScroll = workSpace - barSize

        let scrollToY = ScrollWrapper_ref.current.scrollTop
        let scrollToX = ScrollWrapper_ref.current.scrollLeft
        if (newPositionScroller >= 0 && newPositionScroller < endScroll) {
            mod === 'y' ? scrollToY = ratioShift * newPositionScroller : scrollToX = ratioShift * newPositionScroller
            setEvgVar(`--evg-scroller-${mod}`, `${newPositionScroller}px`)
        } else {
            if (Math.sign(newPositionScroller) === -1) {
                mod === 'y' ? scrollToY = startScroll : scrollToX = startScroll
                setEvgVar(`--evg-scroller-${mod}`, `${startScroll}px`)
            } else {
                mod === 'y' ? scrollToY = ratioShift * endScroll : scrollToX = ratioShift * endScroll
                setEvgVar(`--evg-scroller-${mod}`, `${endScroll}px`)
            }
        }
        ScrollWrapper_ref.current.scrollTo(scrollToX, scrollToY)
    }

    const createAutoHideTimer = () => {
        lastMove.current = setTimeout(() => {
            onScrollStop && onScrollStop(true)
            setScrollVisible(false);
            lastMove.current = false
        }, autoHideTimeout)
    }

    const moveScroll = (e) => {
        if (!touchTrack.current) {
            const { offset, scroll } = getSpace()

            let scrollPercentageY = Number((e.target.scrollTop / scroll.y).toFixed(2))
            let scrollPercentageX = Number((e.target.scrollLeft / scroll.x).toFixed(2))

            let positionY = scrollPercentageY * offset.y
            let positionX = scrollPercentageX * offset.x

            prevNow.current.y = positionY
            prevNow.current.x = positionX
            setEvgVar('--evg-scroller-y', `${positionY}px`)
            setEvgVar('--evg-scroller-x', `${positionX}px`)
        }

        if (lastMove.current) {
            clearTimeout(lastMove.current)
        } else {
            onScrollStart && onScrollStart(true)
            setScrollVisible(true)
        }
        if (touchTrack.current) {
            if (!lastMove.current) { lastMove.current = true }
        }
        onScroll && onScroll(e)
        if (!touchTrack.current && autoHide) {
            createAutoHideTimer()
        }
    }

    const onMoveStart = (e, mod) => {
        const { nowY, nowX } = e
        touchTrack.current = true
        let barSize = mod === 'y' ? calcScrollerSize().y : calcScrollerSize().x
        let Now = mod === 'y' ? nowY : nowX
        if (Now < prevNow.current[mod] || Now > (prevNow.current[mod] + barSize)) {
            let correction = barSize / 2
            /*
                correction - корректируем позицию трекера, чтобы курсор оказался хотя бы в центре, а не с краю
            */
            prevNow.current[mod] = Now - correction
            calcPosition(prevNow.current[mod], mod)
        }
    }

    const onMoveY = ({ deltaY }) => {
        prevNow.current.y += deltaY
        calcPosition(prevNow.current.y, 'y')
    }

    const onMoveX = ({ deltaX }) => {
        prevNow.current.x += deltaX
        calcPosition(prevNow.current.x, 'x')
    }

    const onMoveEnd = () => {
        touchTrack.current = false
        createAutoHideTimer()
    }

    useEffect(() => {
        if (observer_ref.current === undefined) {
            satisfactorySize()

            observer_ref.current = new ResizeObserver(satisfactorySize)
            observer_ref.current.observe(ScrollSpace_ref.current)
        }
    })

    useEffect(() => {
        return () => {
            observer_ref.current.disconnect()
        }
    }, [])

    const trackY = (
        <TouchDriver moveStart={(e) => onMoveStart(e, 'y')} moveXY={onMoveY} moveEnd={onMoveEnd} className={classNames(
            classes.track, classes.trackY,
            {
                [classes.autoHide]: autoHide,
                [classes.scrollVisible]: scrollVisible && autoHide,
            })}
        />
    )
    const trackX = (
        <TouchDriver moveStart={(e) => onMoveStart(e, 'x')} moveXY={onMoveX} moveEnd={onMoveEnd} className={classNames(
            classes.track, classes.trackX,
            {
                [classes.autoHide]: autoHide,
                [classes.scrollVisible]: scrollVisible && autoHide,
            })}
        />
    )

    return (
        <Component
            ref={ScrollBase_ref}
            className={classNames(classes.base, className)}
            style={style}
        >
            {satisfactoryHeight && vertical ? trackY : null}
            {satisfactoryWidth && horizontal ? trackX : null}
            <div
                className={classes.wrapper}
                ref={ScrollWrapper_ref}
                onScroll={moveScroll}
            >
                <div
                    ref={ScrollSpace_ref}
                    style={{
                        display: 'inline-block',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {children}
                </div>

            </div>
        </Component>
    )
})
Scroll.propTypes = {

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
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,

    /**
     * Если true, вертикальный Scrollbar включен.
    */
    vertical: PropTypes.bool,

    /**
     * Если true, горизонтальный Scrollbar включен.
    */
    horizontal: PropTypes.bool,

    /**
     * Если true, Scrollbar будет скрываться через время.
    */
    autoHide: PropTypes.bool,

    /**
     * Время выполнения анимации в ms
    */
    autoHideDuration: PropTypes.number,

    /**
     * Время через которое скроется Scrollbar из-за бездействия.
    */
    autoHideTimeout: PropTypes.number,

    /**
     * Размер track.
    */
    trackSize: PropTypes.number,

    /**
     * Вызывается по время скрола.
    */
    onScroll: PropTypes.func,

    /**
     * Вызывается при старте скрола.
    */
    onScrollStart: PropTypes.func,

    /**
     * Вызывается в конце скрола.
    */
    onScrollStop: PropTypes.func,

    /**
     * Style css.
    */
    style: PropTypes.object,
}
Scroll.defaultProps = {
    component: 'div',
    color: '#000000',
    vertical: true,
    horizontal: true,
    autoHide: true,
    autoHideDuration: 500,
    autoHideTimeout: 800,
    trackSize: 6,
    style: {},
}
Scroll.displayName = 'ScrollEVG'
export default withStyles(styles)(Scroll)