import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { Elevation, withStyles } from '../styles'
import ButtonBase from '../ButtonBase'
import Loader from '../Loader'

const styles = {
    base: {
        borderRadius: 4,
        '&:disabled': {
            ...Elevation(0),
        }
    },
    buttonLabel: {
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '.09em',
        lineHeight: '1.7',
        fontWeight: 500,
    },
    // variant
    text: {
        color: props => props.color === 'default' ? props.Color.Contrast() : props.Color.Base(),
    },
    outlined: {
        border: props => `1px solid ${props.color === 'default' ? props.Color.Contrast('hexa', 0.6) : props.Color.Base('hexa', 0.6)}`,
        color: props => props.color === 'default' ? props.Color.Contrast('hexa', 0.6) : props.Color.Base(),
    },
    contained: props => ({
        backgroundColor: props.Color.Base(),
        color: props.Color.Contrast(),
    }),

    elevation: {
        ...Elevation(2),
        '&:hover': {
            ...Elevation(4),
        },
        '&:active': {
            ...Elevation(8),
        },
    },
    // variant
    // size
    small: {
        height: '28px',
        minWidth: '56px',
        fontSize: '.815rem',
        padding: '0 10px',
    },
    medium: {
        height: '36px',
        minWidth: '64px',
        fontSize: '.875rem',
        padding: '0 16px',
    },
    large: {
        height: '42px',
        minWidth: '72px',
        fontSize: '1.2rem',
        padding: '0 24px',
    },
    extra: {
        height: '48px',
        fontSize: '1.6rem',
        padding: '0 24px',
        width: '100%',
    },
    // size
    uppercase: {
        textTransform: 'uppercase',
    },
    round: {
        borderRadius: '999px',
    },
    startIcon: {
        display: 'inline-flex',
        marginRight: '8px',
        marginLeft: '-4px',
    },
    endIcon: {
        display: 'inline-flex',
        marginLeft: '8px',
        marginRight: '-4px',
    },
    loaderFull: {
        position: 'absolute',
    }
}
const MapSizeLoader = {
    'small': 18,
    'medium': 24,
    'large': 36,
    'extra': 48,
}

/**
 * Кнопки позволяют пользователям выполнять действия и делать выбор одним нажатием. 
 * Является `<button>` или `<a>` элементом с ripple эффектом от Material Design.
*/

const Button = React.forwardRef(function Button(props, ref) {
    const {
        classes,
        className,
        children,
        component,
        color, // default || primary || warn || success || fail
        size,
        uppercase,
        round, // true - круглые края
        variant, //  text | contained | outlined
        elevation,
        loading,
        startIcon: StartIcon,
        endIcon: EndIcon,
        ...otherProps
    } = props

    let Component = otherProps.href ? 'a' : component

    const startIcon = StartIcon && (
        <span className={classes.startIcon}>
            {React.cloneElement(StartIcon, {
                size: size,
            })}
        </span>
    )

    const endIcon = EndIcon && (
        <span className={classes.endIcon}>
            {React.cloneElement(EndIcon, {
                size: size,
            })}
        </span>
    )

    const buttonLabel = (
        <span className={classes.buttonLabel} style={loading && !StartIcon && !EndIcon ? { visibility: 'hidden' } : null}>
            {loading && StartIcon ? <Loader className={classes.startIcon} size={MapSizeLoader[size]} depth={size === 'small' ? 2 : 3} /> : startIcon}
            {children}
            {endIcon}
        </span>
    )

    return (
        <ButtonBase
            className={classNames(
                className,
                classes.base,
                classes[variant],
                classes[size],
                {
                    [classes.uppercase]: uppercase,
                    [classes.round]: round,
                    [classes.elevation]: elevation && variant === 'contained',
                },
            )}
            color={color}
            contrast={variant === 'contained' || color === 'default' ? true : false}
            ref={ref}
            type={Component}
            {...otherProps}
        >
            {loading && !StartIcon && !EndIcon ? <Loader className={classes.loaderFull} size={MapSizeLoader[size]} /> : null}
            {buttonLabel}
        </ButtonBase>
    )
})

Button.propTypes = {

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
     * Размер компонента.
    */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),

    /**
     * Регистр текста.
    */
    uppercase: PropTypes.bool,

    /**
     * Варианты кнопки.
    */
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),

    /**
     * Круглые края кнопки.
    */
    round: PropTypes.bool,

    /**
     * Отображение уровня высоты(тени) у кнопки.
    */
    elevation: PropTypes.bool,

    /**
     * Статус загрузки.
    */
    loading: PropTypes.bool,

    /**
     * Контейнер элементов в начале. 
    */
    startIcon: PropTypes.node,

    /**
     * Контейнер элементов в конце. 
    */
    endIcon: PropTypes.node,
}

Button.defaultProps = {
    color: 'default',
    component: 'button',
    size: 'medium',
    uppercase: true,
    round: false, // true - круглые края
    variant: 'text',
    elevation: true,
    loading: false,
}
Button.displayName = 'ButtonEVG'
export default withStyles(styles)(Button)