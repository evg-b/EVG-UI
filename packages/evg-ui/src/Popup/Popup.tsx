import { useEffect, useState, useRef, useCallback, useEffectEvent } from 'react'

import { createPortal } from 'react-dom'

import { useMergedRefs } from '../hooks/useMergedRefs'
import getParentsNode from '../utils/dom/getParentsNode'
import getIsScrollParentNode from '../utils/dom/getIsScrollParentNode'

import type { PopupProps } from './Popup.types'

import * as Styled from './Popup.styled'

// Popup - компонент для создания всплывающего окна.

const DEFAULT_TARGET: NonNullable<PopupProps['target']> = { current: null }

const Popup = ({
  ref,
  className,
  children,
  target = DEFAULT_TARGET,
  open: Open,
  onClose,
  position = 'bottom',
  autoHide,
  shift = 0,
  animation = 'fade',
  mode = 'hover',
  ...otherProps
}: PopupProps) => {
  const Popup_ref = useRef<HTMLDivElement>(null)
  const mergedRef = useMergedRefs(Popup_ref, ref)
  const [show, setShow] = useState(false)
  const [mountNode, setMountNode] = useState(false)
  const calcPositionTooltip = useCallback(() => {
    const Popup_S = Popup_ref.current
    if (!Popup_S || !target.current) return
    let { width: popupWidth, height: popupHeight } =
      Popup_S.getBoundingClientRect()
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

  const newOpenHover = useEffectEvent(() => {
    if (mode === 'hover') onOpenPopup()
  })

  const newCloseHover = useEffectEvent(() => {
    if (mode === 'hover') onClosePopup()
  })

  const newOpenClick = useEffectEvent(() => {
    if (mode === 'click') onOpenPopup()
  })

  const newCloseClick = () => {
    mode === 'click' && onClosePopup()
  }

  const handleResize = useEffectEvent(() => {
    if (show && mountNode) calcPositionTooltip()
  })
  useEffect(() => {
    handleResize()
  }, [mountNode])
  useEffect(() => {
    const targetNode = target.current
    if (!targetNode) return

    targetNode.addEventListener('mouseenter', newOpenHover)
    targetNode.addEventListener('mouseleave', newCloseHover)
    targetNode.addEventListener('click', newOpenClick)
    return () => {
      targetNode.removeEventListener('mouseenter', newOpenHover)
      targetNode.removeEventListener('mouseleave', newCloseHover)
      targetNode.removeEventListener('click', newOpenClick)
    }
  }, [target])

  useEffect(() => {
    const targetNode = target.current
    if (!show || !targetNode) return

    const parents = getParentsNode(targetNode)
    const scrollParents = parents.filter((parent) =>
      getIsScrollParentNode(parent)
    )
    const handleScroll = () => handleResize()
    const resizeObserver = new ResizeObserver(handleScroll)
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setMountNode(entry.isIntersecting),
      { root: scrollParents[0] ?? null, threshold: 1 }
    )

    scrollParents.forEach((parent) =>
      parent.addEventListener('scroll', handleScroll)
    )
    parents.forEach((parent) => resizeObserver.observe(parent))
    resizeObserver.observe(targetNode)
    intersectionObserver.observe(targetNode)
    handleResize()

    return () => {
      scrollParents.forEach((parent) =>
        parent.removeEventListener('scroll', handleScroll)
      )
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [show, target, calcPositionTooltip])
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
    show && mountNode && target.current
      ? createPortal(
          <>
            <Styled.Root ref={mergedRef} {...otherProps} className={className}>
              <Styled.Animation $animation={animation}>
                {children}
              </Styled.Animation>
            </Styled.Root>
            {Open === undefined && mode === 'click' && show && surfaceClose}
          </>,
          document.body
        )
      : null
  return Portal
}

Popup.displayName = 'PopupEVG'
export default Popup
