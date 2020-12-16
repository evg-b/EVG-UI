import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Color from '../utils/Color'
import Elevation from '../utils/Elevation'

const styles = {
    base: {
        ...Elevation(2),
        zIndex: 999,
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '56px',
        width: '100%',
        backgroundColor: props => Color(props.color).Color,
        color: props => Color(props.color).Contrast,
    },
    positionTop: {
        top: 0,
    },
    positionBottom: {
        bottom: 0,
    },
    case: {
        display: 'flex',
    },
    left: {
        justifyContent: 'flex-start',
        paddingLeft: '16px',
        '& *:first-child': {
            paddingLeft: '0',
        },
        '& *:last-child': {
            paddingRight: '0',
        },
        '& *': {
            padding: '0 12px',
        },
    },
    title: {
        flex: 1,
        paddingLeft: '32px',
        '& *:not(:first-child)': {
            paddingLeft: '24px',
        },
    },
    right: {
        justifyContent: 'flex-end',
        paddingRight: '16px',
        '& *:last-child': {
            paddingRight: '0',
        },
        '& *': {
            padding: '0 12px',
        },
    },
    titleCenter: {
        justifyContent: 'center',
    },
    name: 'TestName',
}
const metaThemeColor = (color) => {
    let metaColor = document.querySelector('meta[name="theme-color"]')
    let meta = document.createElement('meta');
    if (metaColor && metaColor.content !== color) {
        metaColor.setAttribute('content', color);
    } else {
        meta.name = 'theme-color';
        meta.setAttribute('content', color);
        document.getElementsByTagName('head')[0].appendChild(meta);
    }
}
const AppBar = React.forwardRef(function AppBar(props, ref) {
    const {
        classes,
        className,
        children,
        color = 'default',
        left,
        title,
        right,
        position = 'fixed', // absolute || fixed || relative || static || sticky
        titleCenter = false,
        SystemColorBar = true,
        ...otherProps
    } = props

    useEffect(() => {
        if (SystemColorBar) {
            // metaThemeColor(Color(color).Color)
        }
    })

    return (
        <div className={classes.base}
            style={{ position: position }}
            ref={ref}
            {...otherProps}
        >
            <div className={classNames(classes.case, classes.left)}>
                {left}
            </div>
            <div className={classNames(
                classes.case,
                classes.title,
                {
                    [classes.titleCenter]: titleCenter,
                }
            )}>
                {title}
            </div>
            <div className={classNames(classes.case, classes.right)}>
                {right}
            </div>
        </div>
    )
})
AppBar.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
    color: PropTypes.string,
    left: PropTypes.node,
    title: PropTypes.node,
    right: PropTypes.node,
    titleCenter: PropTypes.bool,
    SystemColorBar: PropTypes.bool,
}
AppBar.defaultProps = {
    color: 'default',
    position: 'fixed',
    titleCenter: false,
    SystemColorBar: true,
}
AppBar.displayName = 'AppBarEVG'
export default withStyles(styles)(AppBar)