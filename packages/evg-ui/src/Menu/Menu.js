import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Popup from '../Popup'
import List from '../List'
import Elevation from '../utils/Elevation'

const styles = {
    base: {
        // display: 'flex',
        // alignItems: 'center',
        // borderRadius: '4px',
        // fontSize: '12px',
        // boxSizing: 'border-box',
        // backgroundColor: hexToRGBA(Color(gray[700]).Color, 0.9),
        // color: Color(gray[700]).Contrast,
        // transition: 'opacity 100ms ease-in 50ms',
    },

};
const Menu = React.forwardRef(function Menu(props, ref) {
    const {
        classes,
        className,
        children,
        ...otherProps
    } = props

    return <Popup ref={ref} mode='click' {...otherProps}>
        <List style={{ ...Elevation(8) }}>
            {children}
        </List>
    </Popup>
})
Menu.propTypes = {
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
}
Menu.defaultProps = {
}
Menu.displayName = 'MenuEVG'
export default withStyles(styles)(Menu)