import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, withStyles } from '../styles'
import { Person } from '../internal/icons/Avatar'

const styles = {
    base: {
        position: 'relative',
        display: 'inline-block',
        borderRadius: '50%',
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: props => props.size,
        height: props => props.size,
        borderRadius: '50%',
        overflow: 'hidden',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: 'normal',
        backgroundColor: props => Color(props.color === 'default' ? '#8a8a8a' : props.color).Base(),
        color: props => Color(props.color === 'default' ? '#8a8a8a' : props.color).Contrast(),
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0,
            transition: 'opacity 100ms ease-out',
        }
    },
    avatars: {
        width: props => props.size,
        height: props => props.size,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '&>*': {
            borderRadius: 0,
            flexGrow: 1,
            width: props => props.size / 2,
            height: props => props.srcs.length === 2 ? props.size : props.size / 2
        }
    },
    loaded: {
        '& img': {
            opacity: 1,
        }
    },
    spare: {
        textTransform: 'uppercase',
        position: 'absolute',
        fontSize: props => props.size / 2,
        '&>svg': {
            fontSize: props => props.size * 0.7,
        }
    },
    status: {
        '&:after': {
            content: '""',
            pointerEvents: 'none',
            position: 'absolute',
            width: '8px',
            height: '8px',
            border: '2px solid #fff',
            borderRadius: '50%',
            right: '2%',
            bottom: '2%',
            backgroundColor: props => Color(props.statusColor).Base(),
        },
    }
}

/**
 * Этот компонент обычно используют для отображения изображения профиля пользователей. 
 * Так же отображает первую букву в имени контакта если изображение еще не загрузилось.
*/

const Avatar = React.forwardRef(function Avatar(props, ref) {
    const {
        classes,
        className,
        children,
        src,
        srcs,
        alt,
        altMax,
        size,
        status,
        color,
        statusColor,
        ...otherProps
    } = props

    const [isLoaded, setIsLoaded] = useState(false)

    const handOnLoad = () => setIsLoaded(true)

    const SpareImg = () => <span className={classes.spare}>{alt === "" ? <Person /> : alt.slice(0, altMax)}</span>

    const AvatarImg = (srcUrl, key = 0, classe = classes) => {
        // бесмысленное решение передавать classes, дабы линтер не ругался
        return (
            <div key={key} className={classNames(classe.avatar, {
                [classe.loaded]: isLoaded,
            })}>
                <img src={srcUrl} alt={alt} onLoad={handOnLoad} />
                {!isLoaded && SpareImg()}
            </div>
        )
    }

    const AvatarImgs = (
        srcs.length === 1 ? AvatarImg(srcs[0]) :
            <div className={classes.avatars}>
                {srcs.map((srcUrl, index) => AvatarImg(srcUrl, index))}
            </div>
    )

    return (
        <div
            ref={ref}
            className={classNames(classes.base, { [classes.status]: status }, className)}
            {...otherProps}
        >
            {srcs.length > 0 ? AvatarImgs : AvatarImg(src)}
        </div>
    )
})
Avatar.propTypes = {

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
     * url изображения.
    */
    src: PropTypes.string,

    /**
     * Массив url изображений.
    */
    srcs: PropTypes.arrayOf(PropTypes.string),

    /**
     * Альтернативный текст для изображений.
    */
    alt: PropTypes.string,

    /**
     * Количество первых букв alt для отображения если src пуст.
    */
    altMax: PropTypes.number,

    /**
     * Размер компонента.
    */
    size: PropTypes.number,

    /**
     * Отображать статус или нет.
    */
    status: PropTypes.bool,

    /**
     * Цвет статуса.
    */
    statusColor: PropTypes.string,
}
Avatar.defaultProps = {
    alt: '',
    color: 'default',
    size: 40,
    status: false,
    statusColor: 'success',
    altMax: 1,
    src: '',
    srcs: [],
}
Avatar.displayName = 'AvatarEVG'
export default withStyles(styles)(Avatar)