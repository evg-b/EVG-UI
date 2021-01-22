import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Color from '../utils/Color';
import TouchDriver from '../TouchDriver';
import hexToRGBA from '../utils/hexToRGBA';
import calcMaxSizeRatio from '../utils/calcMaxSizeRatio';
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
    '& img': {
        maxWidth: '100%',
        maxHeight: '90%',
        objectFit: 'cover',
    }
}

const styles = {
    base: {
        // ...absolutePosition,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: props => props.backgroundColor,
        position: 'relative',
        '--evg-zone-coord-now': 0,
        '--evg-zone-coord-end': 0,
        '--evg-a-status': 'paused', // running
    },
    v_zone: {
        ...absolutePosition,
        transform: 'translateX(var(--evg-zone-coord-now))',
        willChange: 'transform',
    },
    v_zone_move: {
        animation: `$move 200ms cubic-bezier(0.4, 0, 0.2, 1)`,
        animationIterationCount: '1',
        animationFillMode: 'both',
        animationPlayState: 'var(--evg-a-status)',
    },
    v_zone_back: {
        animation: `$back 200ms cubic-bezier(0.4, 0, 0.2, 1)`,
        animationIterationCount: '1',
        animationFillMode: 'both',
        animationPlayState: 'var(--evg-a-status)',
    },
    v_center: {
        ...absolutePosition,
        ...wrapperImg,
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
        color: props => Color(props.backgroundColor).Contrast,
        cursor: 'pointer',
        height: '100%',
        width: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            backgroundColor: props => hexToRGBA(Color(props.backgroundColor).Contrast, 0.2),
        }
    },
    v_btn_left: {
        left: 0,
    },
    v_btn_right: {
        right: 0,
    },
    '@keyframes move': {
        from: {
            transform: 'translateX(var(--evg-zone-coord-now))',
        },
        to: {
            transform: 'translateX(var(--evg-zone-coord-end))',
        },
    },
    '@keyframes back': {
        from: {
            transform: 'translateX(var(--evg-zone-coord-now))',
        },
        to: {
            transform: 'translateX(0)',
        },
    },
    '@media (max-width: 1024px)': {
        v_btn: {
            display: 'none',
        },
    },
    сarouselImg: {},
}

const Carousel = React.forwardRef(function Carousel(props, ref) {
    const {
        classes,
        className,
        children,
        imgs = [],
        imgStart = 0, // default 0
        backgroundColor,
        onChangeImg = f => f,
        mode,
        ...otherProps
    } = props

    const [imgIndex, setImgIndex] = useState(imgStart < imgs.length ? imgStart : 0)
    const [animationMove, setAnimationMove] = useState(false)
    const [animationBack, setAnimationBack] = useState(false)

    let ViewerEVG_ref = useRef() // для --var-css
    ViewerEVG_ref = ref || ViewerEVG_ref
    const ViewerEVGZone_ref = useRef()

    const nowCoord = useRef(0)
    const nowAnimation = useRef(false)

    const newImgIndex = useRef(imgIndex)
    const cacheSizeImg = useRef(new Map())

    const sensitivity = 200 // px

    const setEvgVar = (key, val) => {
        // установка css var
        const V_EVG_S = ViewerEVG_ref.current
        V_EVG_S.style.setProperty(key, val)
    }
    const clearNowCoord = () => {
        nowCoord.current = 0
        nowAnimation.current = false
        setEvgVar('--evg-zone-coord-now', 0)
    }
    const comeBack = () => {
        setAnimationBack(true)
    }

    const onMoveStart = () => {
        setEvgVar('--evg-a-status', `paused`)
    }
    const onMoveXY = ({ deltaX, itXorY, startItXorY }) => {
        if (itXorY === 'x' && startItXorY === 'x') {
            nowCoord.current = nowCoord.current + deltaX
            setEvgVar('--evg-zone-coord-now', `${nowCoord.current}px`)
        }
    }
    const onMoveEnd = ({ shiftX, inertia, itXorY, startItXorY }) => {
        setEvgVar('--evg-a-status', `running`)
        // защита от холостого нажатия
        if (shiftX !== 0 && startItXorY === 'x' && !nowAnimation.current) {
            if (inertia || Math.abs(shiftX) > sensitivity) {
                if (Math.sign(shiftX) === 1) {
                    // left (prev)
                    imgs[newImgIndex.current - 1] ? moveSlide('ArrowLeft') : comeBack()
                } else {
                    // right (next)
                    imgs[newImgIndex.current + 1] ? moveSlide('ArrowRight') : comeBack()
                }
            } else {
                comeBack()
            }
        }
    }

    const onKeypress = (e) => {
        e.preventDefault()
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            moveSlide(e.key)
        }
    }
    const moveSlide = (mode) => {
        let moveEnd = 0
        switch (mode) {
            case 'ArrowRight':
                if (newImgIndex.current < imgs.length - 1) {
                    moveEnd = -105
                    newImgIndex.current = newImgIndex.current + 1
                }
                break;
            case 'ArrowLeft':
                if (newImgIndex.current > 0) {
                    moveEnd = 105
                    newImgIndex.current = newImgIndex.current - 1
                }
                break;
        }
        setEvgVar('--evg-zone-coord-end', `${moveEnd}%`)
        setEvgVar('--evg-a-status', `running`)

        nowAnimation.current = true
        setAnimationMove(true)
    }

    const onAnimationEnd = (e) => {
        if (e.animationName.includes('move')) {
            // через changeImg внешнии модули такие как mediaViewer может следить за изменениями
            onChangeImg(newImgIndex.current)
            setImgIndex(newImgIndex.current)
            setAnimationMove(false)
        }
        if (e.animationName.includes('back')) {
            setAnimationBack(false)
        }
        setEvgVar('--evg-a-status', `paused`)
        clearNowCoord()
    }
    useEffect(() => {
        console.log('Carusel[useEffect] event');
        window.addEventListener('keyup', onKeypress)
        return () => {
            window.removeEventListener('keyup', onKeypress)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /*
        @param (img:nodeElement)
        @return {width,heigth}
    */
    // const calcSizeMax = (imgSrc) => {
    //     let resCalc
    //     // console.log('calcSizeMax:', imgSrc)
    //     if (cacheSizeImg.current.has(imgSrc)) {
    //         resCalc = cacheSizeImg.current.get(imgSrc)
    //         // console.log('cache', resCalc);
    //     } else {
    //         let img = document.createElement('img');
    //         img.src = imgSrc;
    //         const { clientWidth, clientHeight } = document.documentElement
    //         let sizeFix = calcMaxSizeRatio(img.naturalWidth, img.naturalHeight, clientWidth, clientHeight)
    //         resCalc = { width: sizeFix.newWidth, height: sizeFix.newHeight }
    //         cacheSizeImg.current.set(imgSrc, resCalc)
    //         // console.log('no cache', resCalc);
    //     }
    //     return resCalc
    // }
    const nextArrow = imgs[imgIndex + 1] ?
        <div className={classNames(classes.v_btn, classes.v_btn_right)} onClick={() => moveSlide('ArrowRight')}>
            <ChevronRight />
        </div> : null

    const prevArrow = imgs[imgIndex - 1] ?
        <div className={classNames(classes.v_btn, classes.v_btn_left)} onClick={() => moveSlide('ArrowLeft')}>
            <ChevronLeft />
        </div> : null

    const vLeft = imgs[imgIndex - 1] ?
        <div className={classNames(classes.v_left, classes.сarouselImg)}>
            <img
                // style={mode ? { ...calcSizeMax(imgs[imgIndex - 1]) } : null}
                src={imgs[imgIndex - 1]} alt="" />
        </div> : null

    const vRight = imgs[imgIndex + 1] ?
        <div className={classNames(classes.v_right, classes.сarouselImg)}>
            <img
                // style={mode ? { ...calcSizeMax(imgs[imgIndex + 1]) } : null}
                src={imgs[imgIndex + 1]} alt="" />
        </div> : null

    return (
        <TouchDriver
            className={classNames(classes.base, className)}
            ref={ViewerEVG_ref}
            moveStart={onMoveStart}
            moveXY={onMoveXY}
            moveEnd={onMoveEnd}
            {...otherProps}
        >
            <div
                ref={ViewerEVGZone_ref}
                className={classNames(classes.v_zone, {
                    [classes.v_zone_move]: animationMove,
                    [classes.v_zone_back]: animationBack,
                })}
                onAnimationEnd={onAnimationEnd}
            >
                {vLeft}
                <div className={classNames(classes.v_center, classes.сarouselImg)}>
                    <img
                        // style={mode ? { ...calcSizeMax(imgs[imgIndex]) } : null}
                        src={imgs[imgIndex]}
                        alt=""
                    />
                </div>
                {vRight}
            </div>
            {nextArrow}
            {prevArrow}
        </TouchDriver>
    )
})
Carousel.propTypes = {
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
     * Массив изображений.
    */
    imgs: PropTypes.arrayOf(PropTypes.string),

    /**
     * Index стартавого изображения в массиве.
    */
    imgStart: PropTypes.number,

    /**
     * Цвет заденго фона.
    */
    backgroundColor: PropTypes.string,

    /**
     * Вызывается при изменении img.
    */
    onChangeImg: PropTypes.func,

    /**
     * 
    */
    mode: PropTypes.string,
}
Carousel.defaultProps = {
    imgStart: 0,
    mode: '',
}
Carousel.displayName = 'CarouselEVG'
export default withStyles(styles)(Carousel)