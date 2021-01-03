import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';

const styles = {
    base: {
        height: '56px',
        order: -1,
        marginLeft: 0,
        marginRight: '16px',
        display: 'inline-flex',
        alignItems: 'center',
    },
}

const ListItemAvatar = React.forwardRef(function ListItemAvatar(props, ref) {
    const {
        classes,
        className,
        children,
        component,
        ...otherProps
    } = props

    let Component = component
    return (
        <Component
            className={classNames(classes.base, className)}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Component>
    )
})
ListItemAvatar.propTypes = {
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
}
ListItemAvatar.defaultProps = {
    component: 'span',
}
ListItemAvatar.displayName = 'ListItemAvatarEVG'
export default withStyles(styles)(ListItemAvatar)