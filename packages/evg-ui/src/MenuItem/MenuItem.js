import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import ListItem from '../ListItem'
import ListItemText from '../ListItemText'

const styles = {
    base: {

    },
};
const MenuItem = React.forwardRef(function MenuItem(props, ref) {
    const {
        classes,
        className,
        children,
        ...otherProps
    } = props
    return (
        <ListItem
            ref={ref}
            button
        >
            <ListItemText {...otherProps}>
                {children}
            </ListItemText>
        </ListItem>
    )
})
MenuItem.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
}
MenuItem.defaultProps = {
}
MenuItem.displayName = 'MenuItemEVG'
export default withStyles(styles)(MenuItem)