import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';

const styles = {
    base: {

    }
};
const Slider = React.forwardRef(function Slider(props, ref) {
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
Slider.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
}
Slider.defaultProps = {
}
Slider.displayName = 'SliderEVG'
export default withStyles(styles)(Slider)