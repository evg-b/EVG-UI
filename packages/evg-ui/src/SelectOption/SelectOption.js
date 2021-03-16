import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles'
import ListItem from '../ListItem'
import ListItemText from '../ListItemText'

const styles = {
    base: {

    },
};

/**
 * Компонент для отображения value в select.
*/

const SelectOption = React.forwardRef(function SelectOption(props, ref) {
    const {
        classes,
        className,
        children,
        value,
        ...otherProps
    } = props

    return (
        <ListItem
            ref={ref}
            value={value}
            {...otherProps}
        >
            <ListItemText>
                {children}
            </ListItemText>
        </ListItem>
    )
})
SelectOption.propTypes = {
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
     * Value - number или string.
    */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
SelectOption.defaultProps = {
}
SelectOption.displayName = 'SelectOptionEVG'
export default withStyles(styles)(SelectOption)