import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  forwardRef
} from 'react'
import { createPortal } from 'react-dom'
import getParentsNode from '../utils/dom/getParentsNode'
import getIsScrollParentNode from '../utils/dom/getIsScrollParentNode'
import type { PopupProps } from './Popup.types'
import * as Styled from './Popup.styled'

// Popup - компонент для создания всплывающего окна.
const Popup = forwardRef<HTMLDivElement, PopupProps>(
  function Popup(props, ref) {
    const {
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
    const [mountNode, setMountNode] = useState(false)
    const parents_ref = useRef({
      all: [],
      scroll: []
    })
    const visible_ref = useRef({
      showRef: false,
      mountRef: false
    })
    const observerTarget_ref = useRef({
      observes: {
        Intersection: undefined,
        Resize: undefined
      }
    })
    visible_ref.current.showRef = show
    visible_ref.current.mountRef = mountNode
    const calcPositionTooltip = useCallback(() => {
      const Popup_S = Popup_ref.current
      let { width: popupWidth, height: popupHeight } =
        Popup_ref.current.getBoundingClientRect()
      let {
        top,
        left,
        width: targetWidth,
        height: targetHeight
      } = target.current.getBoundingClientRect()
      let diffX = targetWidth / 2 - popupWidth / 2
      let diffY = targetHeight / 2 - popupHeight / 2
      let centerX = left + diffX + window.pageXOffset
      let centerY = top + diffY + window.pageYOffset
      popupHeight += shift
      popupWidth += shift

      if (position.includes('top')) {
        centerY -= diffY + popupHeight
      }

      if (position.includes('-top')) {
        centerY += popupHeight
      }

      if (position.includes('bottom')) {
        centerY += diffY + popupHeight
      }

      if (position.includes('-bottom')) {
        centerY -= popupHeight
      }

      if (position.includes('left')) {
        centerX -= diffX + popupWidth
      }

      if (position.includes('-left')) {
        centerX += popupWidth
      }

      if (position.includes('right')) {
        centerX += diffX + popupWidth
      }

      if (position.includes('-right')) {
        centerX -= popupWidth
      }

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
    useEffect(() => {
      if (target.current) {
        const { observes } = observerTarget_ref.current
        const target_S = target.current
        const parent_S = parents_ref.current
        parent_S.all = getParentsNode(target_S)
        parent_S.scroll = parent_S.all.filter((parent) =>
          getIsScrollParentNode(parent)
        )
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
      } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
      let { observes } = observerTarget_ref.current

      if (!observes.Resize) {
        // CREATE observes.Intersection
        observes.Resize = new ResizeObserver(handleResize)
      }

      if (!observes.Intersection) {
        // CREATE observes.Intersection
        observes.Intersection = new IntersectionObserver(
          ([entries]) => {
            setMountNode(entries.isIntersecting)
          },
          {
            // root: parents_ref.current.all[0],
            root: parents_ref.current.scroll[0],
            threshold: 1.0
          }
        )
      }

      if (show) {
        parents_ref.current.scroll.forEach((p) => {
          p.addEventListener('scroll', handleResize)
        }) // observes WATCH

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
      typeof Open === 'boolean' && setShow(Open)
    }, [Open])
    useEffect(() => {
      // SSR defender
      setMountNode(true)
    }, [])
    const surfaceClose = (
      <Styled.SurfaceClose onClick={newCloseClick}></Styled.SurfaceClose>
    )
    const Portal =
      show && mountNode
        ? createPortal(
            <>
              <Styled.Root
                ref={Popup_ref}
                {...otherProps}
                className={className}>
                <Styled.Animation $animation={animation}>
                  {children}
                </Styled.Animation>
              </Styled.Root>
              {Open === undefined && mode === 'click' && show && surfaceClose}
            </>,
            document.body
          )
        : null
    return (
      Object.prototype.hasOwnProperty.call(target, 'current') && show && Portal
    )
  }
)
Popup.defaultProps = {
  target: {},
  position: 'bottom',
  // autoHide: true,
  animation: 'fade',
  shift: 0,
  mode: 'hover'
}
Popup.displayName = 'PopupEVG'
export default Popup
