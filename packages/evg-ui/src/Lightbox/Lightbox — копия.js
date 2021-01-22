import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import TouchDriver from '../TouchDriver'
import Modal from '../Modal'
import Carousel from '../Carousel'
import Elevation from '../utils/Elevation'
import calcMaxSizeRatio from '../utils/calcMaxSizeRatio'

const absolutePosition = {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
}

// const msAnim = 50000
const msAnim = 300
const styles = {
    // Lightbox
    base: {
        width: '100%',
        height: '100%',
        display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        // gridTemplateRows: 'repeat(auto-fit, minmax(150px, 300px))',
        // gridAutoRows: 'minmax(150px, 300px)',
        // gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
        // gridTemplateRows: 'repeat(3, minmax(150px, 1fr))',
        gridTemplateColumns: 'repeat(3, 150px)',
        gridTemplateRows: 'repeat(3, 150px)',
        gridAutoColumns: '150px',
        gridAutoRows: '150px',
        gridGap: '2%',
        padding: '2%',
        boxSizing: 'border-box',
    },
    modal: {
        // '--evg-img-coord-y-now': 0,
        // '--evg-img-coord-x-start': 0,
        // '--evg-img-coord-y-start': 0,
        // '--evg-img-width-start': 0,
        // '--evg-img-height-start': 0,
        // '--evg-img-blackout': 0,
        // backgroundColor: 'red',
        // backgroundColor: 'rgba(0,0,0,.2)',
        // backgroundColor: 'rgba(0,0,0,1)',
    },
    img: {
        tapHighlightColor: 'transparent',
        cursor: 'pointer',
        width: '100%',
        height: '100%',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    },
    // Lightbox
    testBlock: {
        ...absolutePosition,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Lightbox: {
        width: '100vw',
        height: '100vh',
    },
    blockTouchCarousel: {
        pointerEvents: 'none',
    },
    сarouselImg: {
        '& img': {
            maxWidth: '1000px',
            maxHeight: '90vh',
            objectFit: 'cover',
        }
    },
    hidden: {
        display: 'none', // visible
    },
    imgFlip: {
        ...Elevation(16),
        width: 'var(--evg-img-width-end)',
        height: 'var(--evg-img-height-end)',
        transform: 'translateY(var(--evg-img-coord-y-now,0))',
        objectFit: 'cover',
        willChange: 'transform',
    },
    imgFlip_normal: {
        animation: `$move ${msAnim}ms cubic-bezier(0.4, 0, 0.2, 1) both`,
        animationDirection: 'normal',
    },
    imgFlip_reverse: {
        animation: `$move ${msAnim}ms cubic-bezier(0.4, 0, 0.2, 1) both`,
        animationDirection: 'reverse',
    },
    '@keyframes move': {
        from: {
            width: 'var(--evg-img-width-start)',
            height: 'var(--evg-img-height-start)',
            transform: 'translate(var(--evg-img-coord-start))',
        },
        to: {
            width: 'var(--evg-img-width-end)',
            height: 'var(--evg-img-height-end)',
            transform: 'translateY(var(--evg-img-coord-y-now,0))',
        },
    },
    imgFlip_back: {
        animation: `$back ${msAnim}ms ease-out`,
    },
    '@keyframes back': {
        from: {
            transform: 'translateY(var(--evg-img-coord-y-now,0))',
        },
        to: {
            transform: 'translateY(0)',
        },
    },
    blackout: {
        backgroundColor: 'rgba(0,0,0,var(--evg-img-blackout,0))',
        // opacity: 'var(--evg-img-blackout,0)',
    },
    blackout_normal: {
        animation: `$blackout ${msAnim}ms ease-out`,
        animationDirection: 'normal',
    },
    blackout_reverse: {
        animation: `$blackout ${msAnim}ms ease-out`,
        animationDirection: 'reverse',
    },
    '@keyframes blackout': {
        from: {
            backgroundColor: 'rgba(0,0,0,0)',
        },
        to: {
            backgroundColor: 'rgba(0,0,0,var(--evg-img-blackout,0))',
        },
    },
    blackout_back: {
        animation: `$blackout_back ${msAnim}ms ease-out`,
        animationDirection: 'normal',
    },
    '@keyframes blackout_back': {
        from: {
            backgroundColor: 'rgba(0,0,0,var(--evg-img-blackout,0))',
        },
        to: {
            backgroundColor: 'rgba(0,0,0,1)',
        },
    },
    '@media (max-width: 1024px)': {
        // страховка, если ручной расчет не сработает по ошибке браузера
        сarouselImg: {
            '& img': {
                maxWidth: '100%',
                maxHeight: '90%',
            }
        }
    },
}

const Lightbox = React.forwardRef(function Lightbox(props, ref) {
    const {
        classes,
        className,
        children,
        imgs,
        ...otherProps
    } = props

    let LightboxEVG_ref = useRef()
    LightboxEVG_ref = ref || LightboxEVG_ref
    const Modal_ref = useRef() // для --css-var
    const imgIndexOpen_ref = useRef()
    const cachcalcStartPosition = useRef()

    const [indexOpen, setIndexOpen] = useState(-1)
    const [isModal, setIsModal] = useState(false)
    const [animationBack, setAnimationBack] = useState(false)
    const [flip, setFlip] = useState(false)
    const [normalAnimation, setNormalAnimation] = useState(false)
    const [reverseAnimation, setReverseAnimation] = useState(false)

    const setEvgVar = (key, val) => {
        // установка css var
        document.documentElement.style.setProperty(key, val)

        // const Modal_S = Modal_ref.current
        // Modal_S.style.setProperty(key, val)
    }
    const clearEvgVar = () => {
        document.documentElement.style.cssText = ''
        cachcalcStartPosition.current = {} // очищаем кэш
    }
    const calcStartPosition = useCallback((img) => {
        if (cachcalcStartPosition.current === img) {
            // кэш помогает избежать повторных вычеселний для фото которые уже сделаны
            return
        }
        cachcalcStartPosition.current = img

        const { top, left, width, height } = img.getBoundingClientRect()
        const { clientWidth, clientHeight } = document.documentElement
        const [centerX, centerY] = [clientWidth / 2, clientHeight / 2]
        let newX = -(centerX - (width / 2)) + left
        let newY = -(centerY - (height / 2)) + top

        const imgSizeEnd = calcMaxSizeRatio(img.naturalWidth, img.naturalHeight, clientWidth, clientHeight)
        setEvgVar('--evg-img-coord-start', `${newX}px,${newY}px`)
        setEvgVar('--evg-img-width-start', `${width}px`)
        setEvgVar('--evg-img-height-start', `${height}px`)
        setEvgVar('--evg-img-width-end', `${imgSizeEnd.newWidth}px`)
        setEvgVar('--evg-img-height-end', `${imgSizeEnd.newHeight}px`)
    }, [])

    const calcBlackout = (shiftY) => {
        const HeightCenter = document.documentElement.clientHeight / 2
        let blackoutPerc = Number((1 - (Math.abs(shiftY) / HeightCenter)).toFixed(2))
        return blackoutPerc
    }

    const onHandlerClick = (e) => {
        setIsModal(true)
        calcStartPosition(e.target, 'onHandlerClick')
        setIndexOpen(Number(e.target.dataset.index))

        setEvgVar('--evg-img-blackout', 1)

        setNormalAnimation(true)
    }

    const onClose = () => {
        setFlip(false)
        setReverseAnimation(true)
    }
    const onMoveStart = ({ startItXorY }) => {
        // console.log(`Lightbox[onMoveStart] flip: ${flip}`);
        // setBlockTouchCarousel(true)
    }
    const onMoveXY = ({ shiftY, itXorY, startItXorY }) => {
        if (itXorY === 'y' && startItXorY === 'y') {
            flip && setFlip(false)
            setEvgVar('--evg-img-coord-y-now', `${shiftY}px`)
            setEvgVar('--evg-img-blackout', calcBlackout(shiftY))
            // setTimeout(() => {
            //     setEvgVar('--evg-img-coord-y-now', `${shiftY}px`)
            //     // setEvgVar('--evg-img-blackout', calcBlackout(shiftY))
            // }, 0)
            // setTimeout(() => {
            //     // setEvgVar('--evg-img-coord-y-now', `${shiftY}px`)
            //     setEvgVar('--evg-img-blackout', calcBlackout(shiftY))
            // }, 0)
        }
    }
    const onMoveEnd = ({ shiftY, inertia, itXorY, startItXorY }) => {
        // todo: подключить инерцию
        if (startItXorY === 'y' && shiftY !== 0) {
            if (inertia || Math.abs(shiftY) > 200) {
                setReverseAnimation(true)
            } else {
                setAnimationBack(true)
            }
        }
    }

    const onAnimationEnd = (e) => {
        if (e.animationName.includes('move')) {
            if (normalAnimation) {
                setNormalAnimation(false)
                setFlip(true)
            }
            if (reverseAnimation) {
                setIsModal(false)
                setReverseAnimation(false)
                setIndexOpen(-1)
                clearEvgVar()
            }
        }
        if (e.animationName.includes('back')) {
            setEvgVar('--evg-img-blackout', 1)
            setAnimationBack(false)
            setFlip(true)
        }
        setEvgVar('--evg-img-coord-y-now', 0)
    }
    const handlerChangeImg = (index) => {
        console.log('Lightbox[handlerChangeImg]', index);
        setIndexOpen(index)
    }
    useEffect(() => {
        imgIndexOpen_ref.current && calcStartPosition(imgIndexOpen_ref.current)
    }, [indexOpen, calcStartPosition])

    const flipImg = (
        <img
            className={classNames(classes.imgFlip, {
                [classes.imgFlip_normal]: normalAnimation,
                [classes.imgFlip_reverse]: reverseAnimation,
                [classes.imgFlip_back]: animationBack,
                [classes.hidden]: flip,
            })}
            onAnimationEnd={onAnimationEnd}
            src={imgs[indexOpen]}
            alt=""
        />
    )
    const flipViewer = (
        <Carousel
            backgroundColor='#000000'
            className={classNames(classes.Lightbox, {
                [classes.hidden]: !flip,
            })}
            classes={{
                сarouselImg: classes.сarouselImg,
            }}
            imgs={imgs}
            imgStart={indexOpen}
            onChangeImg={handlerChangeImg}
            mode='lightbox'
        />
    )
    return (
        <div
            ref={LightboxEVG_ref}
            className={classes.base}
            {...otherProps}
        >
            {
                imgs.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            onClick={onHandlerClick}
                            className={classes.img}
                            style={index === indexOpen && isModal ? { opacity: 0, transition: 'opacity 0ms 30ms' } : { opacity: 1 }}
                        >
                            <img
                                data-index={index}
                                ref={index === indexOpen ? imgIndexOpen_ref : null}
                                src={elem}
                                alt=""
                            />
                        </div>
                    )
                })
            }

            <Modal
                ref={Modal_ref}
                className={classNames(classes.modal, classes.blackout, {
                    [classes.blackout_normal]: normalAnimation,
                    [classes.blackout_back]: animationBack,
                    [classes.blackout_reverse]: reverseAnimation,
                })}
                component={TouchDriver}
                open={isModal}
                onClose={onClose}
                moveStart={onMoveStart}
                moveXY={onMoveXY}
                moveEnd={onMoveEnd}
                isEsc
            >
                <div className={classNames(classes.testBlock)}>
                    {flipImg}
                    {flipViewer}
                </div>
            </Modal>
        </div>
    )
})
Lightbox.propTypes = {
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
}
Lightbox.defaultProps = {
    imgs: []
}
Lightbox.displayName = 'LightboxEVG'
export default withStyles(styles)(Lightbox)