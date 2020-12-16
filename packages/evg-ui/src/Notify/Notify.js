import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';

const styles = {
    base: {

    }
};
const Notify = React.forwardRef(function Notify(props, ref) {
    const {
        classes,
        className,
        children,
        ...otherProps
    } = props


    return (
        <div>

        </div>
    )
})
Notify.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
}
Notify.defaultProps = {
}
Notify.displayName = 'NotifyEVG'
export default withStyles(styles)(Notify)