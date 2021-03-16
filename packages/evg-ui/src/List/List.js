import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, withStyles } from '../styles'
import Scroll from '../Scroll'

const styles = {
    base: {
        display: 'block',
        listStyle: 'none',
        padding: '8px 0',
        margin: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundColor: props => Color('surface').Base(),
        fontSize: '1rem',
        '& > li': {
            margin: 0,
        }
    },
}

/**
 * Списки представляют собой множество компонентов с однородными типами данных в вертикальной плоскости. 
 * Элементы списка поддерживают события взаимодействия мыши и жестов.
*/

const List = React.forwardRef(function List(props, ref) {
    const {
        classes,
        className,
        children,
        color,
        ...otherProps
    } = props

    return (
        <Scroll
            ref={ref}
            className={classNames(classes.base, className)}
            color={color === 'default' ? '#000000' : color}
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

    /**
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,
}
List.defaultProps = {
    color: 'default',
}
List.displayName = 'ListEVG'
export default withStyles(styles)(List)