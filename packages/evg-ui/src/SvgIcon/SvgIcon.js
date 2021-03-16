import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles'

const svgSizeNumberAndTemplate = (size) => {
    if (typeof size === 'number') {
        return `${size}px`
    } else {
        return MapSize[size] ? MapSize[size] : MapSize['medium']
    }
}
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
        color: props => props.color === 'default' ? 'currentColor' : props.Color.Base(),
        fontSize: props => svgSizeNumberAndTemplate(props.size),
    },
}

/**
 * Компонент обертка над path svg который реализует функционал color и size.
*/

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
     * Размер компонента. Так же принимает положительное число.
    */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
        PropTypes.number,
    ]),

    /**
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,

    /**
     * Размер viewBox. Применяется к width и height.
    */
    viewBox: PropTypes.number,
}
SvgIcon.defaultProps = {
    color: 'default',
    size: 'medium',
    viewBox: 24,
}
SvgIcon.displayName = 'SvgIconEVG'
export default withStyles(styles)(SvgIcon)