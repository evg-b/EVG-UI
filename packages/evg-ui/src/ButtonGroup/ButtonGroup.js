
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import Color from '../utils/Color';
import Elevation from '../utils/Elevation';
import classNames from 'classnames';

const whatBorderColor = (props) => {
    let BorderColor = props.variant === 'outlined' ? Color(props.color).Color : Color(props.color).Contrast
    return `1px solid ${BorderColor}`
}
const styles = {
    base: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '4px',
        width: 'fit-content',
        height: 'fit-content',
    },
    groupContained: {
        ...Elevation(2),
        // '&:hover': {
        //     ...Elevation(4),
        // },
        // '&:active': {
        //     ...Elevation(8),
        // },
    },
    groupContainedChild: {
        boxShadow: 'none',
    },
    horizontal: {
        flexDirection: 'row',
    },
    vertical: {
        flexDirection: 'column',
    },
    round: {
        borderRadius: '999px',
    },
    horizontalChild: {
        '&:not(:first-child)': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeft: 0,
        },
        '&:not(:last-child)': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 0,
        },
        '&:first-child': {
            borderRight: props => whatBorderColor(props)
        },
        '&:last-child': {
            borderLeft: props => whatBorderColor(props)
        },
    },
    verticalChild: {
        '&:not(:first-child)': {
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTop: 0,
        },
        '&:not(:last-child)': {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottom: 0,
        },
        '&:first-child': {
            borderBottom: props => whatBorderColor(props)
        },
        '&:last-child': {
            borderTop: props => whatBorderColor(props)
        },
    },
}

const ButtonGroup = React.forwardRef(function ButtonGroup(props, ref) {
    const {
        classes,
        className,
        children,
        color = 'default',
        orientation = 'horizontal', // horizontal | vertical
        size = 'medium',
        variant = 'text', // text | outlined | contained
        round = false,
        uppercase = true,
        disabled = false,
        ...otherProps
    } = props

    return (
        <div
            className={classNames(
                classes.base,
                classes[orientation],
                className,
                {
                    [classes.groupContained]: variant === 'contained',
                    [classes.round]: round,
                }
            )}
            ref={ref}
            {...otherProps}
        >
            {
                React.Children.map(children, (child, index) =>
                    React.cloneElement(child, {
                        className: classNames(
                            classes[`${orientation}Child`],
                            className,
                            {
                                [classes.groupContainedChild]: variant === 'contained',
                            }
                        ),
                        size: child.props.size || size,
                        color: child.props.color || color,
                        variant: child.props.variant || variant,
                        round: child.props.round || round,
                        uppercase: child.props.uppercase || uppercase,
                        disabled: child.props.disabled || disabled,
                        key: index,
                    })
                )

            }
        </div>
    )
})
ButtonGroup.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    round: PropTypes.bool,
    orientation: PropTypes.oneOf(['horizontal', 'vertical',]),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
    color: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}
ButtonGroup.defaultProps = {
    color: 'default',
    size: 'medium',
    uppercase: true,
    round: false, // true - круглые края
    variant: 'text',
    orientation: 'horizontal',
}
ButtonGroup.displayName = 'ButtonGroupEVG'
export default withStyles(styles)(ButtonGroup)