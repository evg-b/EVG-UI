import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';

const styles = {
    base: {
        display: 'block',
        height: '1.2em',
        backgroundColor: 'rgba(0,0,0,.15)',
    },
    text: {
        transform: 'scale(1, 0.60)',
        width: '100%',
        borderRadius: '6px',
        height: '1em',
    },
    h1: { height: '2em' },
    h2: { height: '1.5em' },
    h3: { height: '1.17em' },
    h4: { height: '1em' },
    h5: { height: '.83em' },
    h6: { height: '.67em' },
    avatar: {
        borderRadius: '50%',
    },
    wave: {
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
            content: '""',
            position: 'absolute',
            background: `linear-gradient(90deg, rgba(0, 0, 0, 0),rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0))`,
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            transform: 'translateX(-100%)',
            animation: '$wave 1200ms linear 200ms infinite',
        },
    },
    '@keyframes wave': {
        '0%': {
            transform: 'translateX(-100%)',
        },
        '80%': {
            transform: 'translateX(100%)',
        },
        '100%': {
            transform: 'translateX(100%)',
        },
    },

}

const Skeleton = React.forwardRef(function Skeleton(props, ref) {
    const {
        classes,
        className,
        component: Component = 'span',
        type,
        width,
        height,
        size,
        animation,
        borderRadius,
        ...otherProps
    } = props
    let sizeStyle = {
        width: width,
        height: height,
        borderRadius: borderRadius,
    }
    if (size != 0) {
        sizeStyle.width = size
        sizeStyle.height = size
    }
    if (type.includes('avatar')) {
        delete sizeStyle.borderRadius
    }
    if (type.includes('text')) {
        delete sizeStyle.height
        delete sizeStyle.borderRadius
    }
    let classesList = type.split(',').map((val) => classes[val])
    return (
        <Component
            red={ref}
            className={classNames(
                classes.base,
                ...classesList,
                {
                    [classes.wave]: animation,
                },
                className
            )}
            style={{
                ...sizeStyle,
                ...otherProps
            }}
        />
    )
})
Skeleton.propTypes = {
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
     * Корнево узел. Это HTML элемент или компонент.
    */
    component: PropTypes.elementType,

    /**
     * Тип avatar,text,h1-h6. Можно несколько пример: 'text,h2'
    */
    type: PropTypes.string,

    /**
     * Ширина компонента.
    */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Высота компонента.
    */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Размер компонента.
    */
    size: PropTypes.number,

    /**
     * Если true, анимация будет включена.
    */
    animation: PropTypes.bool,

    /**
     * Style css border-radius
    */
    borderRadius: PropTypes.number,
}
Skeleton.defaultProps = {
    component: 'span',
    type: '',
    width: 80,
    height: 80,
    size: 0,
    borderRadius: 0,
    animation: true,
}
Skeleton.displayName = 'SkeletonEVG'
export default withStyles(styles)(Skeleton)