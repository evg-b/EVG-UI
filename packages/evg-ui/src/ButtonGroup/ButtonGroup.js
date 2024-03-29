import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Elevation, withStyles } from '../styles'

const whatBorderColor = (props) => {
    let BorderColor
    switch (props.variant) {
        case 'text':
            BorderColor = props.color === 'default' ? props.Color.Contrast() : props.Color.Base()
            break;
        case 'outlined':
            BorderColor = props.color === 'default' ? props.Color.Contrast() : props.Color.Base()
            break;
        case 'contained':
            BorderColor = props.Color.Contrast()
            break;
    }
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
            borderLeft: props => whatBorderColor(props),
        },
        '&:not(:last-child)': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 0,
        },
    },
    verticalChild: {
        '&:not(:first-child)': {
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTop: props => whatBorderColor(props),
        },
        '&:not(:last-child)': {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottom: 0,
        },
    },
}

/**
 * Этот компонент группирует button, так же его можно использовать как переключатель.
*/

const ButtonGroup = React.forwardRef(function ButtonGroup(props, ref) {
    const {
        classes,
        className,
        children,
        color,
        orientation,
        size,
        variant,
        round,
        uppercase,
        disabled,
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
                            child.props.className,
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

    /**
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,

    /**
     * Круглые края.
    */
    round: PropTypes.bool,

    /**
     * Если true, принимает состоянии disabled.
    */
    disabled: PropTypes.bool,

    /**
     * Регистр текста.
    */
    uppercase: PropTypes.bool,

    /**
     * Принимает вертикальное или горизонтальное положение.
    */
    orientation: PropTypes.oneOf(['horizontal', 'vertical',]),

    /**
     * Все потомки принимают указанный размер.
    */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),

    /**
     * Все потомки принимают указанный вид.
    */
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}
ButtonGroup.defaultProps = {
    color: 'default',
    size: 'medium',
    uppercase: true,
    disabled: false,
    round: false, // true - круглые края
    variant: 'text',
    orientation: 'horizontal',
}
ButtonGroup.displayName = 'ButtonGroupEVG'
export default withStyles(styles)(ButtonGroup)