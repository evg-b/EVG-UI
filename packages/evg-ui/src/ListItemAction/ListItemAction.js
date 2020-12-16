import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';

const styles = {
    base: {
        '&:hover': {
            // zIndex: 999,
        }
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

const ListItemAction = React.forwardRef(function ListItemAction(props, ref) {
    const {
        classes,
        className,
        children,
        component = 'span',
        position = 'end',
        ...otherProps
    } = props

    let Component = component
    return (
        <Component
            className={classNames(
                classes.base,
                classes[position],
            )}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Component>
    )
})
ListItemAction.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
}
ListItemAction.defaultProps = {
    component: 'span',
}
ListItemAction.displayName = 'ListItemActionEVG'
export default withStyles(styles)(ListItemAction)

