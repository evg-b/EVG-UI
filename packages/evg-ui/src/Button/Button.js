import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames'
import Color from '../utils/Color'
import hexToRGBA from '../utils/hexToRGBA'
import Elevation from '../utils/Elevation'
import ButtonBase from '../ButtonBase'

const styles = {
    base: {
        borderRadius: '4px',
        '&:disabled': {
            ...Elevation(0),
        }
    },
    buttonLabel: {
        display: 'inline-flex',
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '.0892857143em',
        lineHeight: '1.7',
        fontWeight: 500,
    },
    // variant
    text: {
        color: props => props.color === 'default' ? Color(props.color).Contrast : Color(props.color).Color
    },
    outlined: {
        border: props => `1px solid ${props.color === 'default' ? hexToRGBA(Color(props.color).Contrast, 0.6) : hexToRGBA(Color(props.color).Color, 0.6)}`,
        color: props => props.color === 'default' ? hexToRGBA(Color(props.color).Contrast, 0.6) : Color(props.color).Color
    },
    contained: {
        backgroundColor: props => Color(props.color).Color,
        color: props => Color(props.color).Contrast,

    },
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
        padding: '6px 10px',
    },
    medium: {
        height: '36px',
        minWidth: '64px',
        fontSize: '.875rem',
        padding: '0 16px 0 16px',
    },
    large: {
        height: '42px',
        minWidth: '72px',
        fontSize: '1.2rem',
        padding: '12px 24px',
    },
    extra: {
        height: '46px',
        fontSize: '1.4rem',
        padding: '12px 24px',
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

}

const Button = React.forwardRef(function Button(props, ref) {
    const {
        classes,
        className,
        children,
        component = 'button',
        color = 'default', // default || primary || warn || success || fail
        size = 'medium',
        uppercase = true,
        round = false, // true - круглые края
        variant = 'text', //  text | contained | outlined
        elevation = true,
        startIcon: StartIcon,
        endIcon: EndIcon,
        ...otherProps
    } = props
    const ButtonRef = ref ? ref : useRef(null)

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
    return (
        <ButtonBase
            className={classNames(
                classes.base,
                classes[variant],
                classes[size],
                {
                    [classes.uppercase]: uppercase,
                    [classes.round]: round,
                    // [classes.variantContained]: elevation && variant === 'contained',
                    [classes.elevation]: elevation && variant === 'contained',
                },
                className
            )}
            color={Color(color).Color}
            contrast={variant === 'contained' || color === 'default' ? true : false}
            ref={ButtonRef}
            type={Component}
            {...otherProps}
        >
            {startIcon}
            <span className={classes.buttonLabel}>
                {children}

            </span>
            {endIcon}
        </ButtonBase >
    )
})

Button.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
    uppercase: PropTypes.bool,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    round: PropTypes.bool,
    elevation: PropTypes.bool,
    startIcon: PropTypes.node,
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
}
Button.displayName = 'ButtonEVG'
export default withStyles(styles)(Button)