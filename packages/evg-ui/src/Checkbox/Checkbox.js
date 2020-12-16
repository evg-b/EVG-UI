
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import SwitchBase from '../SwitchBase'
import Color from '../utils/Color'

import {
    CheckBoxOutlineBlank,
    IndeterminateCheckBox
} from '@evg-b/evg-icons';
import CheckBox from '@evg-b/evg-icons/src/internal/CheckBox'

const MapSize = {
    'small': '12px',
    'medium': '14px',
    'large': '24px',
    'extra': '34px',
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
        stroke: props => props.color === 'default' ? Color('#000000').Contrast : Color(props.color).Contrast,
        strokeWidth: 2.5,
        strokeDasharray: 24,
        strokeDashoffset: 24,
        fontSize: props => `${MapSize[props.size]}`,
        backgroundColor: props => props.color === 'default' ? Color('#000000').Color : Color(props.color).Color,
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
const Checkbox = React.forwardRef(function Checkbox(props, ref) {
    const {
        classes,
        className,
        children,
        name = 'checkbox',
        size,
        color = 'default',
        indeterminate = false,
        disabled,
        ...otherProps
    } = props

    const CheckBoxIcon = indeterminate ? IndeterminateCheckBox : CheckBox
    const CheckBoxCheckedIcon = (
        <CheckBoxIcon
            size={size}
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
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
}
Checkbox.defaultProps = {
    color: 'default',
    size: 'medium',
    indeterminate: false,
    disabled: false,
}
Checkbox.displayName = 'CheckboxEVG'
export default withStyles(styles)(Checkbox)