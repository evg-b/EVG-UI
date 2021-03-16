import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles'

const styles = {
    base: {
        zIndex: 1,
    },
    start: {
        order: -1,
        marginLeft: 0,
        marginRight: '32px',
    },
    end: {
        order: 1,
    },
}

/**
 * Компонент для правильного позиционирования и отображения action в list.
 * Таких как Button, Checkbox, Radio, Switch и др.
*/

const ListItemAction = React.forwardRef(function ListItemAction(props, ref) {
    const {
        classes,
        className,
        children,
        component,
        position,
        ...otherProps
    } = props

    let Component = component

    return (
        <Component
            className={classNames(
                classes.base,
                classes[position],
                className
            )}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Component>
    )
})
ListItemAction.propTypes = {

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
     * Позиционирование внутри родительского  компонента.
    */
    position: PropTypes.oneOf(['start', 'end']),
}
ListItemAction.defaultProps = {
    component: 'span',
    position: 'end'
}
ListItemAction.displayName = 'ListItemActionEVG'
export default withStyles(styles)(ListItemAction)