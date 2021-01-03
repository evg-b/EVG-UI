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
Notify.defaultProps = {
}
Notify.displayName = 'NotifyEVG'
export default withStyles(styles)(Notify)