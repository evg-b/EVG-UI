import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { withStyles } from '../styles'
import ButtonBase from '../ButtonBase/ButtonBase'

const styles = {
    base: {
        backgroundColor: 'transparent',
        color: 'inherit',
        borderRadius: '50%',
        padding: '10px',
        '&:disabled,&[disabled]': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
        }
    },
}

/**
 * Button компонент который модифицирован под icons.
*/

const IconButton = React.forwardRef(function IconButton(props, ref) {
    const {
        classes,
        className,
        children,
        component,
        color,
        rippleCenter,
        size,
        ...otherProps
    } = props

    let Component = otherProps.href ? 'a' : component

    return (
        <ButtonBase
            className={classNames(
                classes.base,
                classes.color,
                className,
            )}
            ref={ref}
            component={Component}
            rippleCenter
            color={color}
            contrast={color === 'default' ? true : false}
            disabled={otherProps.disabled}
            {...otherProps}
        >
            {
                React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        color: child.props.color || color,
                        size: child.props.size || size,
                    })
                )
            }
        </ButtonBase >
    )
})
IconButton.propTypes = {

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
     * Если true, Ripple эффект стартует в центре.
    */
    rippleCenter: PropTypes.bool,
}
IconButton.defaultProps = {
    color: 'default',
    component: 'button',
    rippleCenter: true,
    size: 'medium',
}
IconButton.displayName = 'IconButtonEVG'
export default withStyles(styles)(IconButton)