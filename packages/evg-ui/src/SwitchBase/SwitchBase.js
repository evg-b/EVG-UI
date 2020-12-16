import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import IconButton from '../IconButton'

const styles = {
    base: {
        position: 'relative',
    },
    input: {
        opacity: 0,
        cursor: 'inherit',
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
    },
    checked: {},
}

const SwitchBase = React.forwardRef(function SwitchBase(props, ref) {
    const {
        classes,
        className,
        children,
        color = 'default',
        size = 'medium',
        type,
        icon: Icon,
        iconChecked: IconChecked,
        rippleOff = false,
        ...otherProps
    } = props

    const iconChecked = IconChecked && (
        React.cloneElement(IconChecked, {
            className: classNames(
                IconChecked.props.className,
                classes.iconChecked,
            ),
        })
    )

    return (
        <IconButton
            tabIndex={null}
            component='label'
            className={classNames(classes.base, className)}
            color={color}
            disabled={otherProps.disabled}
            rippleCenter
            rippleOff={rippleOff}
        >
            <input
                className={classNames(
                    classes.checked,
                    classes.input,
                )}
                tabIndex={0}
                ref={ref}
                type={type}
                readOnly
                {...otherProps}
            />
            {iconChecked}
            {Icon}
        </IconButton>
    )
})
SwitchBase.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
    type: PropTypes.oneOf(['checkbox', 'radio']),
    icon: PropTypes.node,
    iconChecked: PropTypes.node,
    rippleOff: PropTypes.bool,
}
SwitchBase.defaultProps = {
    color: 'default',
    size: 'medium',
    rippleOff: false,
}
SwitchBase.displayName = 'SwitchBaseEVG'
export default withStyles(styles)(SwitchBase)