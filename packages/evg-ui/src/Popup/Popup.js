import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import getParentsNode from '../utils/dom/getParentsNode'
import getIsScrollParentNode from '../utils/dom/getIsScrollParentNode'

const styles = {
    base: {
        zIndex: 1400,
        position: 'absolute',
        top: 0,
        left: 0,
        visibility: 'hidden',
        fontFamily: 'Roboto, sans-serif',
    },
    surfaceClose: {
        zIndex: 1399,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // pointerEvents: 'none',
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
        position,
        autoHide,
        shift,
        animation,
        mode,
        ...otherProps
    } = props
    let Popup_ref = useRef()
    Popup_ref = ref || Popup_ref
    const [show, setShow] = useState(false)
    const parents_ref = useRef({ all: [], scroll: [] })
    const [mountNode, setMountNode] = useState(false)
    const visible_ref = useRef({ showRef: false, mountRef: false })

    visible_ref.current.showRef = show
    visible_ref.current.mountRef = mountNode

    const calcPositionTooltip = useCallback(() => {
        const Popup_S = Popup_ref.current
        let { width: popupWidth, height: popupHeight } = Popup_ref.current.getBoundingClientRect()
        let { top, left, width: targetWidth, height: targetHeight } = target.current.getBoundingClientRect()

        let diffX = targetWidth / 2 - popupWidth / 2
        let diffY = targetHeight / 2 - popupHeight / 2

        let centerX = left + diffX + window.pageXOffset
        let centerY = top + diffY + window.pageYOffset

        popupHeight += shift
        popupWidth += shift
        if (position.includes('top')) { centerY -= diffY + popupHeight }
        if (position.includes('-top')) { centerY += popupHeight }

        if (position.includes('bottom')) { centerY += diffY + popupHeight }
        if (position.includes('-bottom')) { centerY -= popupHeight }

        if (position.includes('left')) { centerX -= diffX + popupWidth }
        if (position.includes('-left')) { centerX += popupWidth }

        if (position.includes('right')) { centerX += diffX + popupWidth }
        if (position.includes('-right')) { centerX -= popupWidth }

        Popup_S.style.transform = `translate(${centerX}px,${centerY}px)`
        Popup_S.style.visibility = `visible`
    }, [target, shift, position])

    const onOpenPopup = () => {
        if (Open === undefined) {
            setShow(true)
        }
    }
    const onClosePopup = () => {
        if (onClose) {
            onClose()
        } else {
            Open === undefined && setShow(false)
        }
    }

    const newOpenHover = () => {
        mode === 'hover' && onOpenPopup()
    }
    const newCloseHover = () => {
        mode === 'hover' && onClosePopup()
    }

    const newOpenClick = () => {
        mode === 'click' && onOpenPopup()
    }
    const newCloseClick = () => {
        mode === 'click' && onClosePopup()
    }

    const handleResize = useCallback(() => {
        const { showRef, mountRef } = visible_ref.current
        showRef && mountRef && calcPositionTooltip()
    }, [calcPositionTooltip])

    useEffect(() => {
        handleResize()
    }, [mountNode, handleResize])

    const observerTarget_ref = useRef({ observes: { Intersection: undefined, Resize: undefined }, signature: 0 })

    useEffect(() => {
        let { observes, signature } = observerTarget_ref.current
        if (!observes.Resize) {
            // CREATE observes.Intersection
            observes.Resize = new ResizeObserver(handleResize)
        }
        if (!observes.Intersection) {
            // CREATE observes.Intersection
            observes.Intersection = new IntersectionObserver(([entries]) => {
                setMountNode(entries.isIntersecting)
            }, {
                root: parents_ref.current.all[0],
                threshold: 1.0,
            })
        }
        if (show) {
            parents_ref.current.scroll.forEach((p) => {
                p.addEventListener('scroll', handleResize)
            })
            // observes WATCH
            observes.Intersection.observe(target.current)

            parents_ref.current.all.forEach((p) => {
                observes.Resize.observe(p)
            })

        } else {
            parents_ref.current.scroll.forEach((p) => {
                p.removeEventListener('scroll', handleResize)
            })
            observes.Intersection.disconnect()
            observes.Resize.disconnect()

        }
    }, [show, target, calcPositionTooltip, handleResize])

    useEffect(() => {
        if (target.current) {
            const { observes } = observerTarget_ref.current
            const target_S = target.current
            const parent_S = parents_ref.current
            parent_S.all = getParentsNode(target_S)
            parent_S.scroll = parent_S.all.filter((parent) => getIsScrollParentNode(parent))

            target_S.addEventListener('mouseenter', newOpenHover)
            target_S.addEventListener('mouseleave', newCloseHover)
            target_S.addEventListener('click', newOpenClick)
            return () => {
                target_S.removeEventListener('mouseenter', newOpenHover)
                target_S.removeEventListener('mouseleave', newCloseHover)
                target_S.removeEventListener('click', newOpenClick)

                observes.Resize.disconnect()
                observes.Intersection.disconnect()

                parent_S.scroll.forEach((p) => {
                    p.removeEventListener('scroll', handleResize)
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // SSR defender
        setMountNode(true)
    }, [])

    const surfaceClose = <div className={classes.surfaceClose} onClick={newCloseClick}></div>
    const Portal = show && mountNode ? createPortal(
        <>
            <div
                ref={Popup_ref}
                className={classNames(classes.base, className)}
                {...otherProps}
            >
                <div className={classNames(classes[animation])}>
                    {children}
                </div>
            </div>
            {Open === undefined && mode === 'click' && show && surfaceClose}
        </>
        , document.body)
        : null

    return Object.prototype.hasOwnProperty.call(target, 'current') && show && Portal
})
Popup.propTypes = {
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
     * Это ref ссылка к которой прицепляется Popup.
    */
    target: PropTypes.object,

    /**
     * Если true, Popup будет виден.
    */
    open: PropTypes.bool,

    /**
     * Если есть onClose(), onClose 
    */
    onClose: PropTypes.func,

    /**
     * Позиционирование относительно target.
    */
    position: PropTypes.oneOf([
        'top',
        'top-left',
        'top-right',

        'bottom',
        'bottom-left',
        'bottom-right',

        'left',
        'left-top',
        'left-bottom',

        'right',
        'right-top',
        'right-bottom',
    ]),

    /**
     * Если true, Popup закроется сам если убрать курсор.
    */
    autoHide: PropTypes.bool,

    /**
     * Смещение в px от target.
    */
    shift: PropTypes.number,

    /**
     * Вид анимации.
    */
    animation: PropTypes.oneOf(['fade', 'docking', 'zoom']),

    /**
     * Режим октрытия.
    */
    mode: PropTypes.oneOf(['hover', 'click']),
}
Popup.defaultProps = {
    target: {},
    position: 'bottom',
    autoHide: true,
    animation: 'fade',
    shift: 0,
    mode: 'hover',
}
Popup.displayName = 'PopupEVG'
export default withStyles(styles)(Popup)