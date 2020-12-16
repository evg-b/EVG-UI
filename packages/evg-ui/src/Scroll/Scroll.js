import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import hexToRGBA from '../utils/hexToRGBA'
import Color from '../utils/Color'
import TouchDriver from '../TouchDriver'

const styles = {
    base: {
        overflow: 'hidden',
        '--evg-scroller-size-y': 0,
        '--evg-scroller-size-x': 0,
        '--evg-scroller-y': 0,
        '--evg-scroller-x': 0,
        position: 'relative',
    },
    wrapper: {
        overflow: 'scroll',
        marginRight: '-17px',
        marginBottom: '-17px',
        '&::-webkit-scrollbar': {
            width: '17px',
        }
    },
    scrollVisible: {
        opacity: '1!important',
    },
    autoHide: {
        opacity: 0,
        transition: props => `opacity ${props.autoHideDuration}ms linear`,
    },
    track: {
        cursor: 'pointer',
        position: 'absolute',
        backgroundColor: props => hexToRGBA(Color(props.color).Color, 0.1),
        borderRadius: '5px 5px',
        margin: '1px',
        '&:after': {
            content: '""',
            position: 'absolute',
            backgroundColor: props => hexToRGBA(Color(props.color).Color, 0.6),
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

const Scroll = React.forwardRef(function Scroll(props, ref) {
    const {
        classes,
        className,
        children,
        component: Component = 'div',
        color,
        vertical = true,
        horizontal = true,
        autoHide = true,
        autoHideDuration = 500,
        autoHideTimeout = 800,
        trackSize,
        onScroll,
        onScrollStart,
        onScrollStop,
        ...otherProps
    } = props
    const observer_ref = useRef()
    const ScrollBase_ref = useRef()
    const ScrollWrapper_ref = ref || useRef()

    const [satisfactoryHeight, setSatisfactoryHeight] = useState(false)
    const [satisfactoryWidth, setSatisfactoryWidth] = useState(false)
    const [scrollVisible, setScrollVisible] = useState(false);

    const touchTrack = useRef(false)
    const prevNowY = useRef(0)
    const prevNowX = useRef(0)
    const lastMove = useRef(false)

    const setEvgVar = (key, val) => {
        // установка css var
        const S_B_S = ScrollBase_ref.current
        S_B_S.style.setProperty(key, val)
    }

    const calcScrollerSize = () => {
        let workSpaceY = ScrollBase_ref.current.offsetHeight
        let workSpaceX = ScrollBase_ref.current.offsetWidth

        let allSpaceY = ScrollWrapper_ref.current.scrollHeight
        let allSpaceX = ScrollWrapper_ref.current.scrollWidth

        let visibleRatioY = workSpaceY / allSpaceY
        let visibleRatioX = workSpaceX / allSpaceX

        let barSizeY = visibleRatioY * workSpaceY
        let barSizeX = visibleRatioX * workSpaceX

        return { y: barSizeY, x: barSizeX }
    }
    function satisfactorySize(e) {
        console.log('satisfactorySize go', e);
        let workSpaceY = ScrollBase_ref.current.offsetHeight
        let workSpaceX = ScrollBase_ref.current.offsetWidth
        let allSpaceY = ScrollWrapper_ref.current.scrollHeight
        let allSpaceX = ScrollWrapper_ref.current.scrollWidth
        if (workSpaceY < allSpaceY) {
            setSatisfactoryHeight(true)
        } else {
            setSatisfactoryHeight(false)
        }
        if (workSpaceX < allSpaceX) {
            setSatisfactoryWidth(true)
        } else {
            setSatisfactoryWidth(false)
        }
        setEvgVar('--evg-scroller-size-y', `${calcScrollerSize().y}px`)
        setEvgVar('--evg-scroller-size-x', `${calcScrollerSize().x}px`)
    }
    const calcPosition = (newPositionScroller = 0, mod = 'y') => {
        let barSize = mod === 'y' ? calcScrollerSize().y : calcScrollerSize().x

        let workSpace = mod === 'y' ? ScrollBase_ref.current.offsetHeight : ScrollBase_ref.current.offsetWidth
        let allSpace = mod === 'y' ? ScrollWrapper_ref.current.scrollHeight : ScrollWrapper_ref.current.scrollWidth
        let ratioShift = allSpace / workSpace

        let startScroll = 0
        let endScroll = workSpace - barSize

        let scrollToY = ScrollWrapper_ref.current.scrollTop
        let scrollToX = ScrollWrapper_ref.current.scrollLeft
        if (newPositionScroller > 0 && newPositionScroller < endScroll) {
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
            onScrollStart && onScrollStop(true)
            setScrollVisible(false);
            lastMove.current = false
        }, autoHideTimeout)
    }
    const moveScroll = (e) => {
        if (!touchTrack.current) {
            let scrollPercentageY = e.target.scrollTop / ScrollWrapper_ref.current.scrollHeight;
            let scrollPercentageX = e.target.scrollLeft / ScrollWrapper_ref.current.scrollWidth;

            let positionY = scrollPercentageY * (ScrollBase_ref.current.offsetHeight - 4);
            let positionX = scrollPercentageX * (ScrollBase_ref.current.offsetWidth - 4);

            prevNowY.current = positionY
            prevNowX.current = positionX
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
        let prevNow = mod === 'y' ? prevNowY : prevNowX
        let Now = mod === 'y' ? nowY : nowX

        if (Now < prevNow.current || Now > (prevNow.current + barSize)) {
            let correction = barSize / 2
            /*
                correction - корректируем позицию трекера, чтобы курсор оказался хотябы в центре, а не с краю
            */
            prevNow.current = Now - correction
            calcPosition(prevNow.current, mod)
        }
    }
    const onMoveY = ({ startY, nowY, shiftY, deltaY, itXorY }) => {
        prevNowY.current = prevNowY.current + deltaY
        calcPosition(prevNowY.current, 'y')
    }
    const onMoveX = ({ startY, nowY, shiftY, deltaX, itXorY }) => {
        prevNowX.current = prevNowX.current + deltaX
        calcPosition(prevNowX.current, 'x')
    }
    const onMoveEnd = ({ startY, nowY }) => {
        touchTrack.current = false
        createAutoHideTimer()
    }

    useEffect(() => {
        // console.log('Scroll[useEffect]', observer_ref);
        if (observer_ref.current === undefined) {
            satisfactorySize()

            observer_ref.current = new MutationObserver(satisfactorySize)
            observer_ref.current.observe(ScrollWrapper_ref.current, {
                'childList': true,
                'subtree': true,
                'attributes': true,
                'characterData': true,
            })
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
            className={classNames(
                classes.base,
                className,
            )}
        >
            <div
                ref={ScrollWrapper_ref}
                className={classes.wrapper}
                style={{ ...otherProps }}
                onScroll={moveScroll}
            >
                {children}
            </div>
            {satisfactoryHeight && vertical ? trackY : null}
            {satisfactoryWidth && horizontal ? trackX : null}


        </Component>
    )
})
Scroll.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
    color: PropTypes.string,
    vertical: PropTypes.bool,
    horizontal: PropTypes.bool,
    autoHide: PropTypes.bool,
    autoHideDuration: PropTypes.number,
    autoHideTimeout: PropTypes.number,
    trackSize: PropTypes.number,
    onScroll: PropTypes.func,
    onScrollStart: PropTypes.func,
    onScrollStop: PropTypes.func,
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
}
Scroll.displayName = 'ScrollEVG'
export default withStyles(styles)(Scroll)