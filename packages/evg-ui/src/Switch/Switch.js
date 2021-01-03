
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Color from '../utils/Color'
import IconButton from '../IconButton'
import Elevation from '../utils/Elevation'

// const MapSize = {
//     'small': '18px',
//     'medium': '24px',
//     'large': '36px',
//     'extra': '48px',
// }
const styles = {
    base: {
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        '--evg-switch-thumb-color': props => props.color === 'default' ? '#FFFFFF' : Color(props.color).Color,
        '--evg-switch-track-color': props => props.color === 'default' ? '#000000' : Color(props.color).Color,
        '&[disabled] > $track, &[disabled] > $thumb > $thumbIcon': {
            cursor: 'default',
            pointerEvents: ' none',
            backgroundColor: '#bdbdbd',
        }
    },
    input: {
        opacity: 0,
        cursor: 'inherit',
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        '&:checked ~ $thumbIcon': {
            backgroundColor: 'var(--evg-switch-thumb-color)',
        },

    },
    thumb: {
        transform: 'translateX(-10px)',
        transition: 'transform 100ms cubic-bezier(0.4, 0, 0.2, 1) 20ms',
    },
    thumbChecked: {
        transform: 'translateX(10px)',
    },
    thumbIcon: {
        width: '20px',
        height: '20px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxSizing: 'border-box',
        ...Elevation(1),
    },
    track: {
        position: 'absolute',
        width: '32px',
        height: '14px',
        backgroundColor: '#000000',
        borderRadius: '7px',
        opacity: '.38',
        boxSizing: 'border-box',
    },
    active: {
        backgroundColor: 'var(--evg-switch-track-color)',
    },
}

const Switch = React.forwardRef(function Switch(props, ref) {
    const {
        classes,
        className,
        children,
        // size = 'medium',
        onChange,
        color,
        ...otherProps
    } = props

    let Switch_ref = useRef()
    Switch_ref = ref || Switch_ref

    const [isActive, SetIsActive] = useState(otherProps.defaultChecked || otherProps.checked || false)
    useEffect(() => {
        SetIsActive(Switch_ref.current.checked)
    }, [])
    const onChangeChecked = (e) => {
        onChange && onChange(e)
        SetIsActive(Switch_ref.current.checked)
    }
    return (
        <div className={classNames(classes.base, className)} disabled={otherProps.disabled}>
            <span className={classNames(classes.track, {
                [classes.active]: isActive,
            })} />
            <IconButton
                tabIndex={-1}
                component='label'
                color={color}
                disabled={otherProps.disabled}
                className={classNames(classes.thumb, {
                    [classes.thumbChecked]: isActive,
                })}
            >
                <input
                    type='checkbox'
                    className={classNames(
                        classes.input,
                    )}
                    ref={Switch_ref}
                    onChange={onChangeChecked}
                    readOnly
                    {...otherProps}
                />
                <span className={classes.thumbIcon} />
            </IconButton>
        </div>
    )
})
Switch.propTypes = {
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
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,

    /**
     * Вызывается при изменении состояния.
    */
    onChange: PropTypes.func,
    // size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
}
Switch.defaultProps = {
    color: 'default',
    // size: 'medium',
}
Switch.displayName = 'SwitchEVG'
export default withStyles(styles)(Switch)