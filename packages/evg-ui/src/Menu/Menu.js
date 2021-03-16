import React from 'react';
import PropTypes from 'prop-types';
import { Elevation, withStyles } from '../styles'
import Popup from '../Popup'
import List from '../List'

const styles = {
    base: {
    },

};
const Menu = React.forwardRef(function Menu(props, ref) {
    const {
        classes,
        className,
        children,
        ...otherProps
    } = props

    return (
        <Popup ref={ref} mode='click' {...otherProps}>
            <List style={{ ...Elevation(8) }}>
                {children}
            </List>
        </Popup>
    )
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