import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Color from '../utils/Color'

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
     * Размер компонента.
    */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),

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