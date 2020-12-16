import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Color from '../utils/Color'

const styles = {
    base: {
        position: 'relative',
        display: 'inline-block',
        animation: `$base 2000ms linear infinite`,
    },
    '@keyframes base': {
        '100%': {
            transform: 'rotate(1turn)',
        }
    },
    circle: {
        fill: 'none',
        stroke: props => props.color === 'default' ? 'currentColor' : Color(props.color).Color,
        animation: `$circle 1500ms ease-out infinite`,
    },
    '@keyframes circle': {
        '0%': {
            strokeDasharray: `1,calc(var(--evg-stroke-dasharray))`,
            strokeDashoffset: 0
        },
        '40%': {
            strokeDashoffset: `calc(var(--evg-stroke-dasharray)*-0.2)`,
        },
        '50%': {
            strokeDasharray: `calc(var(--evg-stroke-dasharray)*0.7),calc(var(--evg-stroke-dasharray))`,
        },
        '60%': {
            strokeDashoffset: `calc(var(--evg-stroke-dasharray)*-0.3)`,
        },
        '100%': {
            strokeDasharray: `calc(var(--evg-stroke-dasharray)*0.7),calc(var(--evg-stroke-dasharray))`,
            strokeDashoffset: `calc(var(--evg-stroke-dasharray)*-0.95)`,
        }
    },
}
const Loader = React.forwardRef(function Loader(props, ref) {
    const {
        classes,
        className,
        children,
        color,
        size,
        depth,
        ...otherProps
    } = props
    const Loader_ref = ref || useRef()
    let perimeter = 2 * Math.PI * (size / 2 - depth)
    useEffect(() => {
        const Loader_S = Loader_ref.current
        perimeter = 2 * Math.PI * (size / 2 - depth)
        console.log('Loader_ref :', Loader_ref);
        Loader_S.style.setProperty('--evg-stroke-dasharray', `${perimeter}px`)
    }, [size, depth])
    return (
        <svg
            ref={Loader_ref}
            className={classNames(classes.base,
                {
                })}
            style={{ width: size, height: size }}
            {...otherProps}
        >
            <circle
                cx='50%'
                cy='50%'
                r={(size / 2) - depth}
                strokeWidth={depth}
                strokeLinecap="round"
                className={classes.circle}
            >
            </circle>
        </svg>
    )
})
Loader.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    depth: PropTypes.number,
}
Loader.defaultProps = {
    color: 'default',
    size: 48,
    depth: 3,
}
Loader.displayName = 'LoaderEVG'
export default withStyles(styles)(Loader)