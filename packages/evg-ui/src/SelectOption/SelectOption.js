import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import ListItem from '../ListItem'
import ListItemText from '../ListItemText'

const styles = {
    base: {

    },
};
const SelectOption = React.forwardRef(function SelectOption(props, ref) {
    const {
        classes,
        className,
        children,
        onClick,
        value,
        ...otherProps
    } = props
    const handleClick = (e) => {
        onClick && onClick(value)
    }
    return (
        <ListItem
            ref={ref}
            onClick={handleClick}
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
     * ?
    */
    onClick: PropTypes.func,

    /**
     * Value - number или string.
    */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
SelectOption.defaultProps = {
}
SelectOption.displayName = 'SelectOptionEVG'
export default withStyles(styles)(SelectOption)