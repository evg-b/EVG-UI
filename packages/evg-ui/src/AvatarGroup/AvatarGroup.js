import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles'
import Avatar from '../Avatar'

const styles = {
    base: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    }
}

/**
 * Этот компонент группирует множества Avatar. 
*/

const AvatarGroup = React.forwardRef(function AvatarGroup(props, ref) {
    const {
        classes,
        className,
        children,
        size,
        max,
        ...otherProps
    } = props

    const EndAvatar = (<Avatar alt={`+${React.Children.count(children) - max}`} altMax={2} size={size} />)

    return (
        <div
            ref={ref}
            className={classNames(classes.base, className)}
            {...otherProps}
        >

            {
                React.Children.map(children, (child, index) => {
                    if (index < max) {
                        return React.cloneElement(child, {
                            style: { zIndex: React.Children.count(children) - index, marginRight: '-10px', border: '2px solid #FFFFFF' },
                            size: child.props.size || size,
                        })
                    } else if (index === max) {
                        return EndAvatar
                    } else {
                        return null
                    }
                })
            }
        </div>
    )
})
AvatarGroup.propTypes = {

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
     * Максимальное количество показываемых Avatar
    */
    max: PropTypes.number,

    /**
     * Размер компонента.
    */
    size: PropTypes.number,
}
AvatarGroup.defaultProps = {
    max: 5,
    size: 40,
}
AvatarGroup.displayName = 'AvatarGroupEVG'
export default withStyles(styles)(AvatarGroup)