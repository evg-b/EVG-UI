import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import ButtonBase from '../ButtonBase'
import Color from '../utils/Color'

const styles = {
    base: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px', // 0 16
        color: props => props.active && Color(props.color).Color,
    },
    avatarLine: {
        height: '56px',
    },
    swipingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: '#adadad',
    },
}

const ListItem = React.forwardRef(function ListItem(props, ref) {
    const {
        classes,
        className,
        children,
        component,
        color,
        // swiping = false,
        button = true,
        active = false,
        // secondaryText: SecondaryTextProp,
        ...otherProps
    } = props
    const Component = button ? ButtonBase : component
    const componentProp = button ? component : null
    const isButtonSettings = button ? { active, color: color, contrast: color === 'default' } : null
    // const swipingContainer = (
    //     <div
    //         className={classes.swipingContainer}
    //     >
    //         swiping
    //     </div>
    // )
    return (
        <Component
            ref={ref}
            component={componentProp}
            className={classNames(classes.base, className)}
            // {...swipingSettings}
            {...isButtonSettings}
            {...otherProps}
        >
            {children}

        </Component>
    )
})
ListItem.propTypes = {
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
     * Корнево узел. Это HTML элемент или компонент.
    */
    component: PropTypes.elementType,

    /**
     * Название цвета в разных форматах. Подробнее <a>link</a>
    */
    color: PropTypes.string,

    /**
     * Активное состояние.
    */
    active: PropTypes.bool,

    /**
     * Если true, ListItem наследует поведение Button.
    */
    button: PropTypes.bool,

    // swiping: PropTypes.bool,
}
ListItem.defaultProps = {
    component: 'li',
    color: 'default',
    // swiping: false,
    active: false,
    button: true,
}
ListItem.displayName = 'ListItemEVG'
export default withStyles(styles)(ListItem)

