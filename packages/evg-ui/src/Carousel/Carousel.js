import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, withStyles } from '../styles'
import Image from '../Image'
import TouchDriver from '../TouchDriver';
import { ChevronLeft, ChevronRight, } from '../internal/icons/Carousel';

const absolutePosition = {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
}
const wrapperImg = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
}
const styles = {
    base: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        backgroundColor: props => Color(props.backgroundColor).Base(),
        '-webkit-touch-callout': 'none', /* iOS Safari */
        '-webkit-user-select': 'none',   /* Chrome/Safari/Opera */
        '-moz-user-select': 'none',      /* Firefox */
        '-ms-user-select': 'none',       /* Internet Explorer/Edge */
        userSelect: 'none',
    },
    v_zone: {
        ...absolutePosition,
        willChange: 'transform',
    },
    v_center: {
        ...absolutePosition,
        ...wrapperImg,
    },
    v_zone_right: {
        animation: props => `$right ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1) both`,
    },
    v_zone_left: {
        animation: props => `$left ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1) both`,
    },
    v_zone_comeback: {
        animation: props => `$comeback ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1) both`,
    },
    '@keyframes right': {
        to: {
            transform: 'translateX(-105%)',
        },
    },
    '@keyframes left': {
        to: {
            transform: 'translateX(105%)',
        },
    },
    '@keyframes comeback': {
        to: {
            transform: 'translateX(0)',
        },
    },
    v_left: {
        ...absolutePosition,
        ...wrapperImg,
        transform: 'translateX(-105%)',
    },
    v_right: {
        ...absolutePosition,
        ...wrapperImg,
        transform: 'translateX(105%)',
    },
    v_btn: {
        zIndex: 1,
        position: 'absolute',
        color: props => Color(props.backgroundColor).Contrast(),
        cursor: 'pointer',
        height: '100%',
        width: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            backgroundColor: props => Color(props.backgroundColor).Contrast('RGBA', 0.2),
        }
    },
    v_btn_left: {
        left: 0,
    },
    v_btn_right: {
        right: 0,
    },
    '@media (max-width: 1024px)': {
        v_btn: {
            display: 'none',
        },
    },
    сarouselImg: {
        maxWidth: '100%',
        maxHeight: '90%',
    },
    ImgLeft: {},
    ImgCenter: {},
    ImgRight: {},
}

/**
 * Это карусель инструмент для отображения изображений. 
 * Поддерживает жесты и оптимизирован для N-количества элементов. 
*/

const Carousel = React.forwardRef(function Carousel(props, ref) {
    const {
        classes,
        className,
        children,
        imgs = [],
        imgStart, // default 0
        onChangeImg,
        backgroundColor,
        sensitivity,
        duration,
        ...otherProps
    } = props

    const [imgIndex, setImgIndex] = useState(imgStart < imgs.length ? imgStart : 0)
    const [indexDirection, setIndexDirection] = useState(0) // -1 | 0 | 1
    const [comeback, setComeback] = useState(false)
    const [stateImg, setStateImg] = useState({ left: '', center: '', right: '' })

    let ViewerEVG_ref = useRef() // для --var-css
    ViewerEVG_ref = ref || ViewerEVG_ref
    const ViewerEVGZone_ref = useRef()
    const imgIndex_ref = useRef(imgStart)

    const comeBack = useCallback(() => {
        moveZone(0)
    }, [moveZone])

    const moveZone = useCallback((shift) => {
        const ViewerEVGZone_s = ViewerEVGZone_ref.current
        ViewerEVGZone_s.style.transform = `translateX(${shift}px)`
    }, [])
    // --- touchDriver
    const onMoveXY = ({ shiftX, itXorY, startItXorY }) => {
        if (itXorY === 'x' && startItXorY === 'x') {
            moveZone(shiftX)
        }
    }

    const onMoveEnd = ({ shiftX, inertia, startItXorY }) => {
        if (shiftX !== 0 && startItXorY === 'x') {
            if (inertia || Math.abs(shiftX) > sensitivity) {
                if (Math.sign(shiftX) === 1) {
                    moveSlide('ArrowLeft')
                } else {
                    moveSlide('ArrowRight')
                }
            } else {
                setComeback(true)
            }
        }
    }
    // --- touchDriver
    // --- replace
    const pseudoReplace = (direction) => {
        let pseudo = { ...stateImg }
        if (direction === 'right') {
            pseudo.center = pseudo.right
        } else {
            pseudo.center = pseudo.left
        }
        setStateImg(pseudo)
    }

    const realReplace = useCallback((imgIndex) => {
        // TODO: можно в center передавать уже созданные компоненты Image из left или right.
        // это может защитить от потери кэша. 
        setStateImg({
            left: imgs[imgIndex - 1] ? <Image className={classNames(classes.сarouselImg, classes.ImgLeft)} src={imgs[imgIndex - 1]} /> : '',
            center: <Image className={classNames(classes.сarouselImg, classes.ImgCenter)} src={imgs[imgIndex]} />,
            right: imgs[imgIndex + 1] ? <Image className={classNames(classes.сarouselImg, classes.ImgRight)} src={imgs[imgIndex + 1]} /> : '',
        })
    }, [imgs, classes])
    // --- replace
    const moveSlide = (direction) => {
        switch (direction) {
            case 'ArrowRight':
                imgs[imgIndex_ref.current + 1] ? setIndexDirection(prev => prev === 0 ? 1 : prev) : setComeback(true)
                break;
            case 'ArrowLeft':
                imgs[imgIndex_ref.current - 1] ? setIndexDirection(prev => prev === 0 ? -1 : prev) : setComeback(true)
                break;
        }
    }

    const onKeyUp = (e) => {
        e.preventDefault()
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            moveSlide(e.key)
        }
    }

    const onAnimationEnd = (e) => {
        if (e.animationName.includes('right')) {
            imgIndex_ref.current = imgIndex_ref.current + 1
            pseudoReplace('right')
        }
        if (e.animationName.includes('left')) {
            imgIndex_ref.current = imgIndex_ref.current - 1
            pseudoReplace('left')
        }
        if (e.animationName.includes('comeback')) {
            comeBack()
            setComeback(false)
        }
    }

    useEffect(() => {
        setImgIndex(imgStart)
    }, [imgStart])

    useEffect(() => {
        realReplace(imgIndex)
        // через changeImg внешнии модули такие как mediaViewer может следить за изменениями
        onChangeImg && onChangeImg(imgIndex)
    }, [imgIndex, onChangeImg, realReplace])

    useLayoutEffect(() => {
        comeBack()
        setImgIndex(imgIndex_ref.current)
        setIndexDirection(0)
    }, [stateImg, comeBack])

    useEffect(() => {
        window.addEventListener('keyup', onKeyUp)
        return () => {
            window.removeEventListener('keyup', onKeyUp)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const leftArrow = stateImg.left ?
        <div className={classNames(classes.v_btn, classes.v_btn_left)} onClick={() => moveSlide('ArrowLeft')}>
            <ChevronLeft />
        </div> : null

    const rightArrow = stateImg.right ?
        <div className={classNames(classes.v_btn, classes.v_btn_right)} onClick={() => moveSlide('ArrowRight')}>
            <ChevronRight />
        </div> : null

    const vLeft = stateImg.left ? <div className={classNames(classes.v_left)}>{stateImg.left}</div> : null
    const vRight = stateImg.right ? <div className={classNames(classes.v_right)}>{stateImg.right}</div> : null

    return (
        <TouchDriver
            innerRef={ViewerEVG_ref}
            className={classNames(classes.base, className)}
            moveXY={onMoveXY}
            moveEnd={onMoveEnd}
            {...otherProps}
        >
            <div
                ref={ViewerEVGZone_ref}
                className={classNames(classes.v_zone, {
                    [classes.v_zone_right]: indexDirection === 1,
                    [classes.v_zone_left]: indexDirection === -1,
                    [classes.v_zone_comeback]: comeback,
                })}
                onAnimationEnd={onAnimationEnd}
            >
                {vLeft}
                <div className={classNames(classes.v_center)}>{stateImg.center}</div>
                {vRight}
            </div>
            {leftArrow}
            {rightArrow}
        </TouchDriver>
    )
})
Carousel.propTypes = {

    /**
     * Объект содержит jss стили компонента.
    */
    classes: PropTypes.object,

    /**
     * Чтобы указать CSS классы, используйте этот атрибут.
    */
    className: PropTypes.string,

    /**
     * Это свойство не реализуется.
    */
    children: PropTypes.any,

    /**
     * Массив изображений.
    */
    imgs: PropTypes.arrayOf(PropTypes.string),

    /**
     * Index стартового изображения в массиве.
    */
    imgStart: PropTypes.number,

    /**
     * Цвет фона.
    */
    backgroundColor: PropTypes.string,

    /**
     * Вызывается при изменении img. Возвращает index активного изображения.
    */
    onChangeImg: PropTypes.func,

    /**
     * Количество пикселей в сдвиге после которого запускается смена изображения. 
    */
    sensitivity: PropTypes.number,

    /**
     * Время выполнения анимации смены изображения. 
    */
    duration: PropTypes.number,
}
Carousel.defaultProps = {
    imgStart: 0,
    backgroundColor: 'gray900',
    sensitivity: 200,
    duration: 200,
}
Carousel.displayName = 'CarouselEVG'
export default withStyles(styles)(Carousel)