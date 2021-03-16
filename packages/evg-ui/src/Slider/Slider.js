import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles'

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
}
Slider.defaultProps = {
}
Slider.displayName = 'SliderEVG'
export default withStyles(styles)(Slider)