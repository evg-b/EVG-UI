import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';

const styles = {
    base: {
        zIndex: 1400,
        position: 'absolute',
        top: 0,
        left: 0,
        visibility: 'hidden',
        fontFamily: 'Roboto, sans-serif',
        // pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        // borderRadius: '4px',
        // fontSize: '12px',
        // boxSizing: 'border-box',
        // backgroundColor: hexToRGBA(Color(gray[700]), 0.9),
        // color: Color(gray[700]).Contrast,
        // transition: 'opacity 100ms ease-in 50ms',
    },
    surfaceClose: {
        zIndex: 1399,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: '#d4d4d4',
    },
    wrap: {
        // position: 'relative',
    },
    popup: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
    },
    fade: {
        animation: `$fade 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '@keyframes fade': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        },
    },
    docking: {
        animation: `$docking 225ms cubic-bezier(0.4, 0, 0.2, 1),$fade 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '@keyframes docking': {
        '0%': {
            transform: 'translate3d(0,-10px,0)',
        },
        '100%': {
            transform: 'translate3d(0,0,0)',
        },
    },
    zoom: {
        animation: `$zoom 250ms cubic-bezier(0.4, 0, 0.2, 1),$fade 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '@keyframes zoom': {
        '0%': {
            transform: 'scale(0.6)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    },
};

const Popup = React.forwardRef(function Popup(props, ref) {
    const {
        classes,
        className,
        children,
        target,
        open: Open,
        onClose,
        position = 'bottom', // top | bottom | left | right
        autoHide = true,
        shift = 0,
        animation = 'fade', // fade | docking | zoom
        mode = 'hover', // hover | click
        ...otherProps
    } = props
    const Popup_ref = ref || useRef()
    const [show, setShow] = useState(Open === undefined ? false : Open)

    const calcToPosition = (targetWidth, targetHeight, popupWidth, popupHeight) => {
        // console.log(`[calcToPosition]`, targetWidth, targetHeight, popupWidth, popupHeight);
        // TODO:
        // top, top-left, top-right
        // bottom, bottom-left, bottom-right
        // left, left-top, left-bottom
        // right, right-top, right-bottom
        let X = shift + (popupWidth / 2 + targetWidth / 2)
        let Y = shift + (popupHeight / 2 + targetHeight / 2)
        switch (position) {
            case 'top':
                Y = -Y
                X = 0
                break;
            case 'bottom':
                X = 0
                break;
            case 'left':
                Y = 0
                X = -X
                break;
            case 'right':
                Y = 0
                break;
        }
        return { X, Y }
    }

    const calcPositionTooltip = () => {
        const Popup_S = Popup_ref.current
        let { width: popupWidth, height: popupHeight } = Popup_ref.current.getBoundingClientRect()
        let { top, left, width: targetWidth, height: targetHeight } = target.current.getBoundingClientRect()
        let centerY = (top + (targetHeight / 2) - (popupHeight / 2)) + window.pageYOffset
        let centerX = (left + (targetWidth / 2) - (popupWidth / 2)) + window.pageXOffset
        let correction = calcToPosition(targetWidth, targetHeight, popupWidth, popupHeight)
        const [corectCenterX, corectCenterY] = [centerX + correction.X, centerY + correction.Y]
        Popup_S.style.transform = `translate(${corectCenterX}px,${corectCenterY}px)`
        Popup_S.style.visibility = `visible`
    }
    const onOpenPopup = () => {
        // console.log('onOpen: Open', Open, Open === undefined);
        if (Open === undefined) {
            setShow(true)
        }
    }
    const onClosePopup = () => {
        // console.log('onClosePopup onClose:', onClose);
        if (onClose) {
            // console.log('onClosePopup ->onClose()');
            onClose()
        } else {
            Open === undefined && setShow(false)
        }
    }
    ////
    const onOpenHover = () => {
        onOpenPopup()
    }
    const onCloseHover = () => {
        autoHide && onClosePopup()
    }
    const onOpenClick = () => {
        onOpenPopup()
    }
    const onCloseClick = () => {
        onClosePopup()
    }

    const handleResize = () => {
        show && target.current && calcPositionTooltip()
    }

    useEffect(() => {
        if (target.hasOwnProperty('current') && target.current) {
            show && calcPositionTooltip()
            const target_S = target.current
            window.addEventListener('resize', handleResize)

            mode === 'hover' && target_S.addEventListener('mouseenter', onOpenHover)
            mode === 'hover' && target_S.addEventListener('mouseleave', onCloseHover)
            mode === 'click' && target_S.addEventListener('click', onOpenClick)
            return () => {
                window.removeEventListener('resize', handleResize)

                mode === 'hover' && target_S.removeEventListener('mouseenter', onOpenHover)
                mode === 'hover' && target_S.removeEventListener('mouseleave', onCloseHover)
                mode === 'click' && target_S.removeEventListener('click', onOpenClick)
            }
        }
    }, [])

    useEffect(() => {
        if (typeof Open === 'boolean') {
            if (Open) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
    }, [Open])
    useEffect(() => {
        handleResize()
    }, [show])
    const onAnimationEnd = (e) => {
        if (e.animationName.includes('fade')) {
            // console.log('popup -> fade end');
        }
    }
    const surfaceClose = <div className={classes.surfaceClose} onClick={onCloseClick}></div>
    return target.hasOwnProperty('current') && show &&
        createPortal(
            <>
                <div
                    ref={Popup_ref}
                    className={classNames(
                        classes.base,
                    )
                    }
                    {...otherProps}
                >
                    <div className={classNames(classes.popup, classes[animation])}>
                        {children}
                    </div>
                </div>
                {mode === 'click' && surfaceClose}

            </>
            , document.body)
})
Popup.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    target: PropTypes.object,
    // titel: PropTypes.string,
    // specs: PropTypes.oneOf(['desktop', 'mobile']),
    // position: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
    // autoHide: PropTypes.bool,
}
Popup.defaultProps = {
    target: {},
    // specs: 'desktop',
    // position: 'bottom',
    // autoHide: true,
}
Popup.displayName = 'PopupEVG'
export default withStyles(styles)(Popup)