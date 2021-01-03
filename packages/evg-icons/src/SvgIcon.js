import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Color from '@evg-b/evg-ui/dist/utils/Color'

const MapSize = {
    'small': '18px',
    'medium': '24px',
    'large': '36px',
    'extra': '48px',
}
const styles = {
    base: {
        display: 'inline-flex',
        boxSizing: 'content-box',
        justifyContent: 'center',
        userSelect: 'none',
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        color: props => Color(props.color).Color,
        fontSize: props => `${MapSize[props.size]}`,
    },
}

const SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
    const {
        classes,
        className,
        children,
        color,
        size,
        viewBox,
        ...otherProps
    } = props

    return (
        <svg
            ref={ref}
            className={classNames(
                classes.base,
                className,
            )}
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            {...otherProps}
        >
            {children}
        </svg>
    )
})
SvgIcon.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
    color: PropTypes.string,
    viewBox: PropTypes.number,
}
SvgIcon.defaultProps = {
    color: 'default',
    size: 'medium',
    viewBox: 24,
}
SvgIcon.displayName = 'SvgIconEVG'
export default withStyles(styles)(SvgIcon)