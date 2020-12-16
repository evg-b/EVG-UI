
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import { Person } from '@evg-b/evg-icons'
import Color from '../utils/Color'

const styles = {
    base: {
        position: 'relative',
        display: 'inline-block',
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: props => `${props.size}px`,
        height: props => `${props.size}px`,
        fontSize: '1.5em',
        borderRadius: '50%',
        overflow: 'hidden',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: 'normal',
        backgroundColor: props => Color(props.color === 'default' ? '#8a8a8a' : props.color).Color,
        color: props => Color(props.color === 'default' ? '#8a8a8a' : props.color).Contrast,
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0,
            transition: 'opacity 100ms ease-out',
        }
    },
    loaded: {
        '& img': {
            opacity: 1,
        }
    },
    spare: {
        textTransform: 'uppercase',
        position: 'absolute',
    },
    status: {
        '&:after': {
            content: '""',
            pointerEvents: 'none',
            position: 'absolute',
            width: '8px',
            height: '8px',
            border: '2px solid #fff',
            borderRadius: '50%',
            right: '2%',
            bottom: '2%',
            backgroundColor: props => Color(props.statusColor).Color,
        },
    }
}

const Avatar = React.forwardRef(function Avatar(props, ref) {
    const {
        classes,
        className,
        children,
        src = '',
        srcArr = [],
        alt = '',
        size = 40,
        status = false,
        color = 'default',
        statusColor = 'success',
        ...otherProps
    } = props

    const [loaded, setLoaded] = useState(false)

    const handOnLoad = () => {
        setLoaded(true)
    }
    const SpareImg = alt === "" ? <Person /> : alt[0]
    // const SpareImg = alt === "" ? '<Person />' : alt[0]

    const AvatarImg = (
        <div
            className={classNames(classes.avatar,
                {
                    [classes.loaded]: loaded,
                })}
        >
            <img src={src} alt={alt} onLoad={handOnLoad} />
            {
                !loaded ?
                    <span className={classes.spare}>
                        {SpareImg}
                    </span> : null
            }
        </div>
    )

    return (
        <div
            ref={ref}
            className={classNames(classes.base,
                {
                    [classes.status]: status,
                })}
            {...otherProps}
        >
            {AvatarImg}
        </div>
    )
})
Avatar.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.string,
    src: PropTypes.string,
    srcArr: PropTypes.arrayOf(PropTypes.string),
    alt: PropTypes.string,
    size: PropTypes.number,
    status: PropTypes.bool,
    statusColor: PropTypes.string,
}
Avatar.defaultProps = {
    color: 'default',
    size: 40,
    status: false,
    statusColor: 'success',
}
Avatar.displayName = 'AvatarEVG'
export default withStyles(styles)(Avatar)