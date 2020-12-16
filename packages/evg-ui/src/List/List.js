import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';

const styles = {
    base: {
        display: 'block',
        listStyle: 'none',
        padding: '8px 0',
        margin: 0,
        width: '100%',
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
        component: Component = 'ul',
        color,
        ...otherProps
    } = props
    // console.log('[List] color', color);
    return (
        <Component
            className={classNames(classes.base, className)}
            ref={ref}
            {...otherProps}
        >
            {
                React.Children.map(children, child => child &&
                    React.cloneElement(child, {
                        color: child.props.color || color,
                    })
                )
            }
        </Component>
    )
})
List.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
    color: PropTypes.string,
}
List.defaultProps = {
    component: 'ul',
    color: 'default',
}
List.displayName = 'ListEVG'
export default withStyles(styles)(List)

