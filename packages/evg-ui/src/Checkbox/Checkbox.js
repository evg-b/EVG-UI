import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, withStyles } from '../styles'
import SwitchBase from '../SwitchBase'
import {
    CheckBoxCheck,
    CheckBoxOutlineBlank,
    IndeterminateCheckBox
} from '../internal/icons/Checkbox'

const MapSize = {
    'small': 12,
    'medium': 14,
    'large': 24,
    'extra': 34,
}

const styles = {
    base: {
        position: 'relative',
    },
    iconChecked: {
        position: 'absolute',
        opacity: 0,
        transition: 'opacity 100ms linear,stroke-dashoffset 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        userSelect: 'none',
        fill: 'currentColor',
        stroke: props => props.color === 'default' ? Color('#000000').Contrast() : props.Color.Contrast(),
        strokeWidth: 2.5,
        strokeDasharray: 24,
        strokeDashoffset: 24,
        backgroundColor: props => props.color === 'default' ? Color('#000000').Base() : props.Color.Base(),
        '&:disabled,&[disabled]': {
            cursor: 'default',
            pointerEvents: ' none',
            backgroundColor: '#b4b4b4',
        }
    },
    indeterminateChecked: {
        position: 'absolute',
        opacity: 0,
        transition: 'opacity 100ms linear',
    },
    checked: {
        '&:checked + $indeterminateChecked': {
            opacity: 1,
        },
        '&:checked + $iconChecked': {
            opacity: 1,
            strokeDashoffset: 0,
        },
    },
}

/**
 * Компонент позволяющий управлять параметром с двумя состояниями. 
 * Полное соответствие функционала что и у нативной версии.
*/

const Checkbox = React.forwardRef(function Checkbox(props, ref) {
    const {
        classes,
        className,
        children,
        name,
        size,
        color,
        indeterminate,
        disabled,
        ...otherProps
    } = props

    const CheckBoxIcon = indeterminate ? IndeterminateCheckBox : CheckBoxCheck
    const CheckBoxCheckedIcon = (
        <CheckBoxIcon
            size={!indeterminate ? MapSize[size] : size}
            color={color}
            disabled={disabled}
            className={classNames({
                [classes.iconChecked]: !indeterminate,
                [classes.indeterminateChecked]: indeterminate,
            })}
        />

    )
    return (
        <SwitchBase
            type='checkbox'
            ref={ref}
            name={name}
            color={color}
            className={className}
            classes={{
                checked: classes.checked,
            }}
            icon={<CheckBoxOutlineBlank size={size} />}
            iconChecked={CheckBoxCheckedIcon}
            disabled={disabled}
            {...otherProps}
        />
    )
})
Checkbox.propTypes = {

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
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,

    /**
     * Название компонента.
    */
    name: PropTypes.string,

    /**
     * Размер компонента.
    */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),

    /**
     * indeterminate состояние.
    */
    indeterminate: PropTypes.bool,

    /**
     * Если true, принимает состоянии disabled.
    */
    disabled: PropTypes.bool,
}
Checkbox.defaultProps = {
    name: 'checkbox',
    color: 'default',
    size: 'medium',
    indeterminate: false,
    disabled: false,
}
Checkbox.displayName = 'CheckboxEVG'
export default withStyles(styles)(Checkbox)