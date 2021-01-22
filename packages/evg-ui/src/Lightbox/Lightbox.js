import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import TouchDriver from '../TouchDriver'
import Modal from '../Modal'
import Carousel from '../Carousel'
import Elevation from '../utils/Elevation'
import calcMaxSizeRatio from '../utils/calcMaxSizeRatio'
import Image from '../Image'

const absolutePosition = {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
}
const styles = {
    // Lightbox
    base: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 150px)',
        gridTemplateRows: 'repeat(3, 150px)',
        gridAutoColumns: '150px',
        gridAutoRows: '150px',
        gridGap: '2%',
        padding: '2%',
        boxSizing: 'border-box',
    },
    modal: {
        padding: 0,
        margin: 0,
    },
    img: {
        tapHighlightColor: 'transparent',
        cursor: 'pointer',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
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

    hidden: {
        display: 'none', // visible
    },
    imgFlip: {
        // ...Elevation(16),
        width: 'var(--evg-img-center-width-end,0)',
        height: 'var(--evg-img-center-height-end,0)',
        transform: 'translateY(var(--evg-img-coord-y-now,0))',
        objectFit: 'cover',
        willChange: 'transform',
    },
    imgFlip_normal: {
        animation: props => `$move ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1) both normal`,
    },
    imgFlip_reverse: {
        animation: props => `$move ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1) both reverse`,
    },
    '@keyframes move': {
        from: {
            width: 'var(--evg-img-width-start,0)',
            height: 'var(--evg-img-height-start,0)',
            transform: 'translate(var(--evg-img-coord-start,0))', // x,y
        },
        to: {
            width: 'var(--evg-img-center-width-end,0)',
            height: 'var(--evg-img-center-height-end,0)',
            transform: 'translateY(var(--evg-img-coord-y-now,0))', // y
        },
    },
    imgFlip_comeback: {
        animation: props => `$comeback ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '@keyframes comeback': {
        to: {
            transform: 'translateY(0)',
        },
    },
    blackout: {
        backgroundColor: 'rgba(0,0,0,var(--evg-img-blackout,0))',
        willChange: 'background-color',
    },
    blackout_normal: {
        animation: props => `$blackout ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1) normal`,
    },
    blackout_reverse: {
        animation: props => `$blackout ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1) reverse`,
    },
    blackout_back: {
        animation: props => `$blackout_back ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '@keyframes blackout': {
        from: {
            backgroundColor: 'rgba(0,0,0,0)',
        },
        to: {
            backgroundColor: 'rgba(0,0,0,var(--evg-img-blackout,1))',
        },
    },
    '@keyframes blackout_back': {
        to: {
            backgroundColor: 'rgba(0,0,0,1)',
        },
    },
    ImgLeft: {
        width: 'var(--evg-img-left-width-end,0)',
        height: 'var(--evg-img-left-height-end,0)',
        objectFit: 'cover',
    },
    ImgCenter: {
        width: 'var(--evg-img-center-width-end,0)',
        height: 'var(--evg-img-center-height-end,0)',
        objectFit: 'cover',
    },
    ImgRight: {
        width: 'var(--evg-img-right-width-end,0)',
        height: 'var(--evg-img-right-height-end,0)',
        objectFit: 'cover',
    },
}

const Lightbox = React.forwardRef(function Lightbox(props, ref) {
    const {
        classes,
        className,
        children,
        imgs,
        duration,
        ...otherProps
    } = props

    let LightboxEVG_ref = useRef()
    LightboxEVG_ref = ref || LightboxEVG_ref
    const Modal_ref = useRef() // для --css-var
    // const cachcalcStartPosition = useRef()

    const [indexOpen, setIndexOpen] = useState(-1)
    const [isModal, setIsModal] = useState(false)
    const [comeback, setComeback] = useState(false)
    const [flip, setFlip] = useState(false)
    const [normalAnimation, setNormalAnimation] = useState(false)
    const [reverseAnimation, setReverseAnimation] = useState(false)

    const ratioSizeImgByIndex = useCallback((imgIndex = 0) => {
        let ims = [...LightboxEVG_ref.current.getElementsByTagName('img')]

        let leftImg = imgs[imgIndex - 1] ? ims.find(e => Number(e.dataset.index) === imgIndex - 1) : ''
        let centerImg = ims.find(e => Number(e.dataset.index) === imgIndex)
        let rightImg = imgs[imgIndex + 1] ? ims.find(e => Number(e.dataset.index) === imgIndex + 1) : ''

        leftImg && calcPosition(leftImg, 'left')
        calcPosition(centerImg, 'center')
        rightImg && calcPosition(rightImg, 'right')
    }, [imgs, calcPosition])

    const setEvgVar = (key, val) => {
        // установка css var
        const Modal_S = Modal_ref.current
        Modal_S.style.setProperty(key, val)
    }

    const calcPosition = useCallback((img, prefix = 'center') => {
        // console.log('calcStartPosition img:', img)
        // if (cachcalcStartPosition.current === img) {
        //     // кэш помогает избежать повторных вычеселний для фото которые уже сделаны
        //     return
        // }
        // cachcalcStartPosition.current = img

        const { clientWidth, clientHeight } = document.documentElement
        if (prefix === 'center') {
            const { top, left, width, height } = img.getBoundingClientRect()
            const [centerX, centerY] = [clientWidth / 2, clientHeight / 2]
            let newX = -(centerX - (width / 2)) + left
            let newY = -(centerY - (height / 2)) + top

            setEvgVar('--evg-img-coord-start', `${newX}px,${newY}px`)
            setEvgVar('--evg-img-width-start', `${width}px`)
            setEvgVar('--evg-img-height-start', `${height}px`)
        }

        const imgSizeEnd = calcMaxSizeRatio(img.naturalWidth, img.naturalHeight, clientWidth, clientHeight)
        setEvgVar(`--evg-img-${prefix}-width-end`, `${imgSizeEnd.newWidth}px`)
        setEvgVar(`--evg-img-${prefix}-height-end`, `${imgSizeEnd.newHeight}px`)
    }, [])

    const calcBlackout = (shiftY) => {
        const HeightCenter = document.documentElement.clientHeight / 2
        let blackoutPerc = Number((1 - (Math.abs(shiftY) / HeightCenter)).toFixed(2))
        return blackoutPerc
    }

    const onHandlerClick = (e) => {
        console.log('[Lightbox][onHandlerClick] setIsModal -> true')
        setIsModal(true)
        setIndexOpen(Number(e.currentTarget.dataset.index))
    }

    const onClose = () => {
        console.log(`onClose isModal:${isModal} normalAnimation:${normalAnimation}`)
        if (isModal && !normalAnimation) {
            setFlip(false)
            setNormalAnimation(false)
            setReverseAnimation(true)
        }
    }
    // --- touchDriver
    const onMoveXY = ({ shiftY, itXorY, startItXorY }) => {
        if (itXorY === 'y' && startItXorY === 'y') {
            flip && setFlip(false)
            setEvgVar('--evg-img-coord-y-now', `${shiftY}px`)
            setEvgVar('--evg-img-blackout', calcBlackout(shiftY))
        }
    }

    const onMoveEnd = ({ shiftY, inertia, startItXorY }) => {
        // todo: подключить инерцию
        if (startItXorY === 'y' && shiftY !== 0) {
            if (inertia || Math.abs(shiftY) > 200) {
                onClose()
            } else {
                setComeback(true)
            }
        }
    }
    // --- touchDriver
    const onAnimationEnd = (e) => {
        if (e.animationName.includes('move')) {
            if (normalAnimation) {
                setNormalAnimation(false)
                setFlip(true)
            }
            if (reverseAnimation) {
                setIsModal(false)
            }
        }
        if (e.animationName.includes('back')) {
            setEvgVar('--evg-img-coord-y-now', 0)
            setFlip(true)
            setComeback(false)
        }
    }

    const handlerChangeImg = (index) => {
        // console.log('Lightbox[handlerChangeImg]', index);
        setIndexOpen(index)
    }

    useEffect(() => {
        console.log(`[useEffect] isModal:${isModal}`)
        if (isModal) {
            // modal смонтирован
            setNormalAnimation(true)
        } else {
            setIndexOpen(-1)
            setReverseAnimation(false)
        }
    }, [isModal])

    useEffect(() => {
        indexOpen !== -1 && ratioSizeImgByIndex(indexOpen)
    }, [indexOpen, ratioSizeImgByIndex])

    const flipImg = (
        <img
            className={classNames(classes.imgFlip, {
                [classes.imgFlip_normal]: normalAnimation,
                [classes.imgFlip_reverse]: reverseAnimation,
                [classes.imgFlip_comeback]: comeback,
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
                ImgLeft: classes.ImgLeft,
                ImgCenter: classes.ImgCenter,
                ImgRight: classes.ImgRight,
            }}
            imgs={imgs}
            imgStart={indexOpen}
            onChangeImg={handlerChangeImg}
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
                        <Image
                            key={index}
                            className={classes.img}
                            style={index === indexOpen && isModal ? { opacity: 0, transition: 'opacity 0ms 30ms' } : { opacity: 1 }}
                            data-index={index}
                            src={elem}
                            alt=""
                            onClick={onHandlerClick}
                        />
                    )
                })
            }

            <Modal
                ref={Modal_ref}
                className={classNames(classes.modal, classes.blackout, {
                    [classes.blackout_normal]: normalAnimation,
                    [classes.blackout_reverse]: reverseAnimation,
                    [classes.blackout_back]: comeback,
                })}
                component={TouchDriver}
                open={isModal}
                onClose={onClose}
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

    /**
     * Время выполнения анимации полета изображения. 
    */
    duration: PropTypes.number,
}
Lightbox.defaultProps = {
    imgs: [],
    duration: 300,
}
Lightbox.displayName = 'LightboxEVG'
export default withStyles(styles)(Lightbox)