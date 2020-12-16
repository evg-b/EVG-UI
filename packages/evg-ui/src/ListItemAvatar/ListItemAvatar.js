import React, { useState, useEffect, useRef } from 'react';
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
        component = 'span',
        ...otherProps
    } = props

    let Component = component
    return (
        <Component
            className={classes.base}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Component>
    )
})
ListItemAvatar.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
}
ListItemAvatar.defaultProps = {
    component: 'span',
}
ListItemAvatar.displayName = 'ListItemAvatarEVG'
export default withStyles(styles)(ListItemAvatar)