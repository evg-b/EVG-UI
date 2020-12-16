import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames'
import Ripple from '../Ripple';

const styles = {
    base: {
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: 'transparent',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 0,
        padding: 0,
        outline: 0,
        overflow: 'hidden',
        textDecoration: 'none',
        userSelect: 'none',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        tapHighlightColor: 'transparent',
        '-webkit-tap-highlight-color': 'transparent',
        boxSizing: 'border-box',
        transition: 'background-color 200ms linear',
        '&:disabled,&[disabled]': {
            cursor: 'default',
            pointerEvents: ' none',
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
            color: '#b4b4b4',
        }
    },
}

const ButtonBase = React.forwardRef(function ButtonBase(props, ref) {
    const {
        classes,
        className,
        children,
        component = 'button',
        uppercase = true,
        disabled = false,
        onClick,
        tabIndex = 0,
        rippleCenter = false,
        rippleOff = false,
        color,
        active,
        contrast = true,
        ...otherProps
    } = props
    const RippleRef = useRef(null)

    const [isFocus, setIsFocus] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    let Component = otherProps.href ? 'a' : component

    const handlerFocus = () => {
        setIsFocus(true)
    }
    const handlerBlur = () => {
        setIsFocus(false)
    }
    const handleKeyPress = () => {
        if (!isPressed) {
            setIsPressed(true)
        }
    }
    const handleKeyUp = () => {
        if (isPressed) {
            setIsPressed(false)
        }
    }
    return (
        <Component
            tabIndex={tabIndex}
            className={classNames(
                classes.base,
                className,
            )}
            ref={ref}
            onClick={onClick}
            type={Component}
            disabled={disabled}
            onFocus={handlerFocus}
            onBlur={handlerBlur}
            onKeyPress={handleKeyPress}
            onKeyUp={handleKeyUp}
            {...otherProps}
        >
            {children}
            {
                rippleOff || disabled ?
                    null :
                    <Ripple
                        ref={RippleRef}
                        rippleCenter={rippleCenter}
                        color={color}
                        contrast={contrast}
                        isFocus={isFocus}
                        isPressed={isPressed}
                        isActive={active}
                    />
            }
        </Component >
    )
})

ButtonBase.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
    disabled: PropTypes.bool,
    uppercase: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    rippleCenter: PropTypes.bool,
    color: PropTypes.string,
    contrast: PropTypes.bool,
    active: PropTypes.bool,
}

ButtonBase.defaultProps = {
    // color: '#FFFFFF',
    color: 'default',
    contrast: true,
    active: false,
}
ButtonBase.displayName = 'ButtonBaseEVG'
export default withStyles(styles)(ButtonBase)