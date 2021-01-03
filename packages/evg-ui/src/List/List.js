import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Scroll from '../Scroll'

const styles = {
    base: {
        display: 'block',
        listStyle: 'none',
        padding: '8px 0',
        margin: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        fontSize: '1rem',
        '& > li + li': {
            margin: 0,
        }
    },
}

const List = React.forwardRef(function List(props, ref) {
    const {
        classes,
        className,
        children,
        // component: Component = 'ul',
        color,
        ...otherProps
    } = props

    return (
        <Scroll
            ref={ref}
            className={classNames(classes.base, className)}
            color={color}
            {...otherProps}
        >
            {
                React.Children.map(children, child => child &&
                    React.cloneElement(child, {
                        color: child.props.color || color,
                    })
                )
            }
        </Scroll>
    )
})
List.propTypes = {
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
    // /**
    //  * Корнево узел. Это HTML элемент или компонент.
    // */
    // component: PropTypes.elementType,
    /**
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,
}
List.defaultProps = {
    // component: 'ul',
    color: 'default',
}
List.displayName = 'ListEVG'
export default withStyles(styles)(List)

