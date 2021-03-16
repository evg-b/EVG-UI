import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles'
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

/**
 * Базовый компонент который реализует общую логику checked в Checkbox, Radio, Switch.
*/

const SwitchBase = React.forwardRef(function SwitchBase(props, ref) {
    const {
        classes,
        className,
        children,
        color,
        size,
        type,
        icon: Icon,
        iconChecked: IconChecked,
        rippleOff,
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
                    classes.input,
                    classes.checked,
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
     * Название цвета в разных форматах. Подробнее <a>link</a>
    */
    color: PropTypes.string,

    /**
     * Размер компонента.
    */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),

    /**
     * Тип input.
    */
    type: PropTypes.oneOf(['checkbox', 'radio']),

    /**
     * Иконка которая отображается всегда.
    */
    icon: PropTypes.node,

    /**
     * Иконка которая отображается при Checked=true.
    */
    iconChecked: PropTypes.node,

    /**
     * Если true, Ripple эффект отключен.
    */
    rippleOff: PropTypes.bool,
}
SwitchBase.defaultProps = {
    color: 'default',
    size: 'medium',
    rippleOff: false,
}
SwitchBase.displayName = 'SwitchBaseEVG'
export default withStyles(styles)(SwitchBase)