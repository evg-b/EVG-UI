import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import TouchDriver from '../TouchDriver';
import Color from '../utils/Color'

const ArrayStates = {
    'white': {
        'hover': 0.04,
        'focus': 0.12,
        'selected': 0.08,
        'activated': 0.12,
        'pressed': 0.12,
        'dragged': 0.08,
    },
    'gray': {
        'hover': 0.12,
        'focus': 0.36,
        'selected': 0.24,
        'activated': 0.36,
        'pressed': 0.48,
        'dragged': 0.32,
    },
    'color': {
        'hover': 0.08,
        'focus': 0.24,
        'selected': 0.16,
        'activated': 0.24,
        'pressed': 0.32,
        'dragged': 0.16,
    },
}
const OverlayColor = (color, contrast = true) => {
    return contrast ? Color(color).Contrast : Color(color).Color
}
const OpacityFromColor = (color, effect) => {
    let opacity
    switch (color) {
        case '#000000':
            opacity = ArrayStates['white'][effect]
            break;
        case '#FFFFFF':
            opacity = ArrayStates['gray'][effect]
            break;
        default:
            opacity = ArrayStates['color'][effect]
            break;
    }
    return opacity
}

const absolutePosition = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
}
const styles = {
    base: {
        ...absolutePosition,
        overflow: 'hidden',
        outline: 'none',
        '&:before': {
            content: '""',
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            width: 'var(--evg-ripple-size,100%)',
            height: 'var(--evg-ripple-size,100%)',
            borderRadius: '50%',
            backgroundColor: props => OverlayColor(props.color, props.contrast),
            transformOrigin: 'center center',
            transform: 'scale(1)',
            willChange: 'transform,opacity',
        },
        '&:after': {
            content: '""',
            pointerEvents: 'none',
            position: 'absolute',
            opacity: 0,
            width: '100%',
            height: '100%',
            backgroundColor: props => OverlayColor(props.color, props.contrast),
            ...absolutePosition,
        },
        '&:hover:after': {
            opacity: props => OpacityFromColor(OverlayColor(props.color, props.contrast), 'hover'),
        },
    },
    rippleFocus: {
        '&:after,&:hover:after': {
            opacity: props => OpacityFromColor(OverlayColor(props.color, props.contrast), 'focus'),
        }
    },
    rippleActive: {
        '&:after,&:hover:after': {
            opacity: props => OpacityFromColor(OverlayColor(props.color, props.contrast), 'activated'),
        }
    },
    rippleStart: {
        '&:before': {
            animation: `$startRipple 225ms both`,
        }
    },
    rippleEnd: {
        '&:before': {
            animation: `$startRipple 225ms both,$endRipple 225ms linear both 50ms`,
        }
    },
    '@keyframes startRipple': {
        '0%': {
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: 0,
            transform: 'translate(var(--evg-ripple-coord-start)) scale(.6,.6)',
        },
        '50%': {
            opacity: 'var(--evg-ripple-opacity)',
        },
        '100%': {
            opacity: 'var(--evg-ripple-opacity)',
            transform: 'translate(var(--evg-ripple-coord-end)) scale(1,1)',
        },
    },
    '@keyframes endRipple': {
        '0%': {
            opacity: 'var(--evg-ripple-opacity)',
        },
        '100%': {
            opacity: 0,
        },
    },

}

const Ripple = React.forwardRef(function Ripple(props, ref) {
    const {
        classes,
        className,
        component: Component = 'span',
        rippleCenter = false,
        isFocus = false,
        isPressed = false,
        isActive = false,
        color,
        contrast = true,
        ...otherProps
    } = props
    const RippleRef = ref || useRef(null)
    const [startRipple, setStartRipple] = useState(false)
    const [endRipple, setEndRipple] = useState(false)
    const isEndTouch = useRef(false)
    const startRippleDone = useRef(false)

    const startTouch = ({ startX, startY }) => {
        RippleStartAnimation(startX, startY, rippleCenter)
    }
    const RippleStartAnimation = (startX, startY, center) => {
        isEndTouch.current = false
        const RippleRef_S = RippleRef.current
        let { width, height } = RippleRef_S.getBoundingClientRect()

        let rippleSize = Math.sqrt((width ** 2) + (height ** 2))
        let coordY, coordX, coordEndY, coordEndX

        if (center) {
            coordX = width / 2 - (rippleSize / 2)
            coordY = height / 2 - (rippleSize / 2)
        } else {
            coordX = startX - (rippleSize / 2)
            coordY = startY - (rippleSize / 2)
        }

        coordEndX = width / 2 - rippleSize / 2
        coordEndY = height / 2 - rippleSize / 2

        RippleRef_S.style.setProperty('--evg-ripple-size', `${rippleSize}px`)
        RippleRef_S.style.setProperty('--evg-ripple-coord-start', `${coordX}px,${coordY}px`)
        RippleRef_S.style.setProperty('--evg-ripple-coord-end', `${coordEndX}px,${coordEndY}px`)
        RippleRef_S.style.setProperty('--evg-ripple-opacity', OpacityFromColor(OverlayColor(color, contrast), 'pressed'))

        setStartRipple(true)
    }
    const endTouch = () => {
        isEndTouch.current = true
        animationStartRippleDone()
    }
    const animationStartRippleDone = () => {
        if (isEndTouch.current && startRippleDone.current) {
            setEndRipple(true)
        }
    }
    const onAnimationEnd = (e) => {
        if (e.animationName.includes('startRipple')) {
            startRippleDone.current = true
            animationStartRippleDone()
        }
        if (e.animationName.includes('endRipple')) { // end
            DefaultSetState()
        }
    }
    const DefaultSetState = () => {
        setStartRipple(false)
        setEndRipple(false)
        isEndTouch.current = false
        startRippleDone.current = false
    }
    useEffect(() => {
        if (isPressed) {
            RippleStartAnimation(0, 0, true)
        } else {
            isEndTouch.current = true
            animationStartRippleDone()
        }
    }, [isPressed])

    return (
        <TouchDriver
            className={classNames(
                classes.base,
                {
                    [classes.rippleStart]: startRipple,
                    [classes.rippleEnd]: endRipple,
                    [classes.rippleFocus]: isFocus,
                    [classes.rippleActive]: isActive,
                }
            )}
            onAnimationEnd={onAnimationEnd}
            ref={RippleRef}
            component={Component}
            moveStart={startTouch}
            moveEnd={endTouch}
            {...otherProps}
        />
    )
})
Ripple.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
    rippleCenter: PropTypes.bool,
    isFocus: PropTypes.bool,
    isPressed: PropTypes.bool,
    isActive: PropTypes.bool,
    color: PropTypes.string,
    contrast: PropTypes.bool,
}
Ripple.defaultProps = {
    rippleCenter: false,
    isFocus: false,
    isPressed: false,
    isActive: false,
    color: 'default',
    contrast: true,
}
Ripple.displayName = 'RippleEVG'
export default withStyles(styles)(Ripple)