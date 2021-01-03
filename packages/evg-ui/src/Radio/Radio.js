import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import SwitchBase from '../SwitchBase'
import { RadioButtonCircle, RadioButtonUnchecked } from '../internal/icons/Radio'

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
        name,
        color,
        size,
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
     * Название компонента.
    */
    name: PropTypes.string,

    /**
     * Размер компонента.
    */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),

    /**
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,
}
Radio.defaultProps = {
    name: 'radio',
    color: 'default',
    size: 'medium',
}
Radio.displayName = 'RadioEVG'
export default withStyles(styles)(Radio)