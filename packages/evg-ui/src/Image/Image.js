import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Loader from '../Loader'
import { ImageError } from '../internal/icons/ImageError'

const styles = {
    base: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#f7f7f7',
    }
}

const Image = React.forwardRef(function (props, ref) {
    const {
        classes,
        className,
        src,
        alt,
        ...otherProps
    } = props

    const [isLoad, setIsLoad] = useState(false)
    const [isError, setIsError] = useState(false)
    console.log('[Image] className:', className)
    const loadImg = (urlSrc) => {
        const image = document.createElement('img')
        image.src = urlSrc
        setIsLoad(image.complete)
        image.onload = (e) => {
            setIsLoad(true)
            setIsError(prev => prev ? false : prev)
        }
        image.onerror = (e) => {
            setIsError(true)
        }
    }
    useEffect(() => {
        setIsLoad(false)
        setIsError(false)
        loadImg(src)
    }, [src])
    const capImg = <div className={classNames(classes.base, className)} {...otherProps}>{isError ? <ImageError viewBox={200} style={{ fontSize: 80, stroke: '#c7c7c7' }} /> : <Loader />}</div>
    return (
        <>
            {
                isLoad ? <img ref={ref} className={className} src={src} alt={alt} {...otherProps} /> : capImg
            }
        </>
    )
})
Image.propTypes = {
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
     * Атрибут `src` обязателен и содержит путь к изображению.
    */
    src: PropTypes.string,

    /**
     * Атрибут `alt` содержит текстовое описание изображения. Опционально.
    */
    alt: PropTypes.string,
}
Image.defaultProps = {
}
Image.displayName = 'ImageEVG'
export default withStyles(styles)(Image)

