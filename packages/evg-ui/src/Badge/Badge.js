
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Color from '../utils/Color'

const styles = {
    base: {
        position: 'relative',
        display: 'inline-flex',
    },
    badge: {
        zIndex: 99,
        position: 'absolute',
        top: '0',
        right: '0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        boxSizing: 'border-box',
        height: '20px',
        minWidth: '20px',
        padding: '0 6px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '0.75rem',
        fontWeight: 500,
        lineHeight: 1,
        pointerEvents: 'none',
        backgroundColor: props => Color(props.color).Color,
        color: props => Color(props.color).Contrast,
        transform: 'scale(1) translate(50%, -50%)',
        // transform: props => props.ripe ? 'scale(1)' : 'scale(1) translate(50%, -50%)',
        transformOrigin: '100% 0%',
        transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    ripe: {
        position: 'initial',
        transform: 'scale(1)',
        transformOrigin: 'initial',
    },
    badgeNull: {
        transform: props => props.ripe ? 'scale(0)' : 'scale(0) translate(50%, -50%)',
    },
    dot: {
        height: '10px',
        minWidth: '10px',
        padding: 0,
    },
    circle: {
        top: '14%',
        right: '14%',
    }
}

const Badge = React.forwardRef(function Badge(props, ref) {
    const {
        classes,
        className,
        children,
        color = 'default',
        count = 0,
        max = 99,
        dot = false,
        circle = false, // overlap="circle"
        ripe = false,
        ...otherProps
    } = props

    let CountBadge = count > max ? `${max}+` : count

    const BadgeRipe = (
        <span
            className={classNames(
                classes.badge,
                {
                    [classes.ripe]: ripe,
                    [classes.badgeNull]: count == 0,
                    [classes.dot]: dot,
                    [classes.circle]: circle,
                }
            )}
        >
            {dot ? null : CountBadge}
        </span>
    )
    const Badge = (
        <div
            ref={ref}
            className={classNames(classes.base)}
            {...otherProps}
        >
            {children}
            {BadgeRipe}
        </div>
    )
    return ripe ? BadgeRipe : Badge
})
Badge.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.string,
    count: PropTypes.number,
    max: PropTypes.number,
    dot: PropTypes.bool,
    circle: PropTypes.bool,
    ripe: PropTypes.bool,
}
Badge.defaultProps = {
    color: 'fail',
    count: 0,
    max: 99,
    dot: false,
    circle: false,
    ripe: false,
}
Badge.displayName = 'BadgeEVG'
export default withStyles(styles)(Badge)