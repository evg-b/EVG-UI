import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import { gray } from '../colors'
import Color from '../utils/Color'
import hexToRGBA from '../utils/hexToRGBA'
import Popup from '../Popup'

const styles = {
    base: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px',
        fontSize: '12px',
        boxSizing: 'border-box',
        backgroundColor: hexToRGBA(Color(gray[700]).Color, 0.9),
        color: Color(gray[700]).Contrast,
        transition: 'opacity 100ms ease-in 50ms',
    },
    desktop: {
        height: '24px',
        padding: '0 8px',
    },
    mobile: {
        height: '32px',
        padding: '0 16px',
    },
};
const Tooltip = React.forwardRef(function Tooltip(props, ref) {
    const {
        classes,
        className,
        children,
        titel,
        specs,
        animation,
        ...otherProps
    } = props

    return <Popup ref={ref} animation={animation} shift={8} {...otherProps}>
        <div className={classNames(classes.base, classes[specs])}>
            {children}
        </div>
    </Popup>
})
Tooltip.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    specs: PropTypes.oneOf(['desktop', 'mobile']),
    animation: PropTypes.string,
}
Tooltip.defaultProps = {
    specs: 'desktop',
    animation: 'fade',
}
Tooltip.displayName = 'TooltipEVG'
export default withStyles(styles)(Tooltip)