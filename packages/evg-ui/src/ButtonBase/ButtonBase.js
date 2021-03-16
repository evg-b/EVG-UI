import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles'
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
        appearance: 'none',
        tapHighlightColor: 'transparent',
        boxSizing: 'border-box',
        transition: 'background-color 200ms linear',
        '&:disabled, &[disabled]': {
            cursor: 'default',
            pointerEvents: ' none',
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
            color: '#b4b4b4',
        }
    },
}

/**
 * Базовая кнопка в котором реализуется Ripple. 
*/

const ButtonBase = React.forwardRef(function ButtonBase(props, ref) {
    const {
        classes,
        className,
        children,
        component,
        uppercase,
        disabled,
        tabIndex,
        rippleCenter,
        rippleOff,
        color,
        active,
        contrast,
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
                className,
                classes.base,
            )}
            ref={ref}
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
                        scrollable
                    />
            }
        </Component>
    )
})

ButtonBase.propTypes = {

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
     * Если true, принимает состоянии disabled.
    */
    disabled: PropTypes.bool,

    /**
     * Регистр текста.
    */
    uppercase: PropTypes.bool,

    /**
     * Текст ссылки.
    */
    href: PropTypes.string,

    /**
     * Атрибут tabindex определяет последовательность перехода между ссылками при нажатии на кнопку Tab.
    */
    tabIndex: PropTypes.number,

    /**
     * Если true, Ripple эффект стартует в центре.
    */
    rippleCenter: PropTypes.bool,

    /**
     * Если true, Ripple эффект отключен.
    */
    rippleOff: PropTypes.bool,

    /**
     * Если true, цвет текста будет белым или черным автоматически. 
     * Для лучшего восприятия в зависимости от основного цвета. 
    */
    contrast: PropTypes.bool,

    /**
     * Активное состояние.
    */
    active: PropTypes.bool,
}

ButtonBase.defaultProps = {
    component: 'button',
    color: 'default',
    uppercase: true,
    disabled: false,
    contrast: true,
    tabIndex: 0,
    active: false,
    rippleCenter: false,
    rippleOff: false,
}
ButtonBase.displayName = 'ButtonBaseEVG'
export default withStyles(styles)(ButtonBase)