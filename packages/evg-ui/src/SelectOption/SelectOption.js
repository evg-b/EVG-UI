import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import ListItem from '../ListItem'
import ListItemText from '../ListItemText'

const styles = {
    base: {

    },


};
const SelectOption = React.forwardRef(function SelectOption(props, ref) {
    const {
        classes,
        className,
        children,
        onClick,
        value,
        ...otherProps
    } = props
    const handleClick = (e) => {
        onClick && onClick(value)
    }
    return (
        <ListItem
            ref={ref}
            onClick={handleClick}
            value={value}
            {...otherProps}
        >
            <ListItemText>
                {children}
            </ListItemText>
        </ListItem>
    )
})
SelectOption.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
SelectOption.defaultProps = {
}
SelectOption.displayName = 'SelectOptionEVG'
export default withStyles(styles)(SelectOption)