
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import SwitchBase from '../SwitchBase'
import { RadioButtonUnchecked } from '@evg-b/evg-icons';
import RadioButtonCircle from '@evg-b/evg-icons/src/internal/RadioButtonCircle'
const styles = {
    base: {
        position: 'relative',
    },
    iconChecked: {
        position: 'absolute',
        transform: 'scale(0)',
        transition: 'transform 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    checked: {
        '&:checked + $iconChecked': {
            transform: 'scale(1)',
        },
    },
}

const Radio = React.forwardRef(function Radio(props, ref) {
    const {
        classes,
        className,
        children,
        name = 'radio',
        size = 'medium',
        color = 'default',
        ...otherProps
    } = props

    const RadioIcon = (
        <RadioButtonUnchecked
            size={size}
        />
    )
    const RadioCheckedIcon = (
        <RadioButtonCircle
            size={size}
            color={color}
            className={classNames(
                classes.iconChecked,
            )}
        />
    )

    return (
        <SwitchBase
            type='radio'
            ref={ref}
            name={name}
            color={color}
            className={className}
            classes={{
                checked: classes.checked,
            }}
            icon={RadioIcon}
            iconChecked={RadioCheckedIcon}
            {...otherProps}
        />
    )
})
Radio.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
    color: PropTypes.string,
}
Radio.defaultProps = {
    color: 'default',
    size: 'medium',
}
Radio.displayName = 'RadioEVG'
export default withStyles(styles)(Radio)