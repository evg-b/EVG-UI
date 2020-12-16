import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames'
import Color from '../utils/Color'
import ButtonBase from '../ButtonBase/ButtonBase'

const styles = {
    base: {
        backgroundColor: 'transparent',
        color: 'inherit',
        borderRadius: '50%',
        padding: '10px',
        '&:disabled,&[disabled]': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
        }
    },
}

const IconButton = React.forwardRef(function IconButton(props, ref) {
    const {
        classes,
        className,
        children,
        component = 'button',
        color = 'default',
        rippleCenter = true,
        tabIndex = 0,
        size,
        ...otherProps
    } = props

    let Component = otherProps.href ? 'a' : component
    return (
        <ButtonBase
            className={classNames(
                classes.base,
                classes.color,
                className,
            )}
            ref={ref}
            component={Component}
            tabIndex={tabIndex}
            rippleCenter
            color={Color(color).Color}
            contrast={color === 'default' ? true : false}
            disabled={otherProps.disabled}
            {...otherProps}
        >
            {
                React.Children.map(children, (child, index) =>
                    React.cloneElement(child, {
                        color: child.props.color || color,
                        size: child.props.size || size,
                    })
                )
            }
        </ButtonBase >
    )
})
IconButton.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
    color: PropTypes.string,
}
IconButton.defaultProps = {
    color: 'default',
    component: 'button',
    rippleCenter: false,
    size: 'medium',
}
IconButton.displayName = 'IconButtonEVG'
export default withStyles(styles)(IconButton)