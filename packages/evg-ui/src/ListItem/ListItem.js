

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import TouchDriver from '../TouchDriver'
import ButtonBase from '../ButtonBase'
import Color from '../utils/Color'
import hexToRGBA from '../utils/hexToRGBA'
import Ripple from '../Ripple'

const styles = {
    base: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',

        padding: '0 16px', // 0 16
        // margin: 0,
        color: props => props.active && Color(props.color).Color,
        // color: props => props.color === 'default' ? 'inherit' : Color(props.color).Color,
    },
    avatarLine: {
        height: '56px',
    },
    swipingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: '#adadad',
    },
}

const ListItem = React.forwardRef(function ListItem(props, ref) {
    const {
        classes,
        className,
        children,
        component = 'li',
        color,
        // swiping = false,
        button = true,
        active = false,
        // secondaryText: SecondaryTextProp,
        ...otherProps
    } = props
    console.log('[ListItem] color', color);
    const Component = button ? ButtonBase : component
    const componentProp = button ? component : null
    // const Component = swiping ? TouchDriver : component
    // const componentSwiping = swiping ? { component: TouchDriver } : null
    // const swipingSettings = swiping ? { autoMove: true, strict: 'v' } : null
    const isButtonSettings = button ? { active, color: color, contrast: color === 'default' } : null
    console.log('isButtonSettings:', isButtonSettings);
    // const swipingContainer = (
    //     <div
    //         className={classes.swipingContainer}
    //     >
    //         swiping
    //     </div>
    // )
    return (
        <Component
            ref={ref}
            component={componentProp}
            className={classNames(
                classes.base,
            )}
            // {...swipingSettings}
            {...isButtonSettings}
            {...otherProps}
        >
            {children}
            {/* {
                !button ? <Ripple color={otherProps.color} isActive={otherProps.active} /> : null
            } */}
            {/* {swipingContainer} */}
        </Component>
    )
})
ListItem.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.string,
    component: PropTypes.elementType,
    // swiping: PropTypes.bool,
    active: PropTypes.bool,
}
ListItem.defaultProps = {
    component: 'li',
    // swiping: false,
    active: false,
    color: 'default',
}
ListItem.displayName = 'ListItemEVG'
export default withStyles(styles)(ListItem)

