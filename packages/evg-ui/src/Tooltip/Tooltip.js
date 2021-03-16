import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, withStyles } from '../styles'
import Popup from '../Popup'

const styles = {
    base: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px',
        fontSize: '12px',
        boxSizing: 'border-box',
        backgroundColor: Color('gray700').Base('rgba', 0.9),
        color: Color('gray700').Contrast(),
        transition: 'opacity 100ms ease-in 50ms',
    },
    desktop: {
        height: '24px',
        padding: '0 8px',
    },
    mobile: {
        height: '32px',
        padding: '0 16px',
    },
};

/**
 * Всплывающая подсказка когда пользователь наводит курсор на элемент.
*/

const Tooltip = React.forwardRef(function Tooltip(props, ref) {
    const {
        classes,
        className,
        children,
        specs,
        ...otherProps
    } = props

    return <Popup ref={ref} shift={8} {...otherProps}>
        <div className={classNames(classes.base, classes[specs], className)}>
            {children}
        </div>
    </Popup>
})
Tooltip.propTypes = {

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
     * Размер для mobile и desktop.
    */
    specs: PropTypes.oneOf(['desktop', 'mobile']),
}
Tooltip.defaultProps = {
    specs: 'desktop',
}
Tooltip.displayName = 'TooltipEVG'
export default withStyles(styles)(Tooltip)