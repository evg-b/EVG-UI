import { useEffect, useEffectEvent, useRef } from 'react'

import { useMergedRefs } from '../../hooks/useMergedRefs'

import type {
  TouchDriverCoordinates,
  TouchDriverEvent,
  TouchDriverProps
} from './TouchDriver.types'

const INITIAL_COORDINATES: TouchDriverCoordinates = {
  startItXorY: '',
  itXorY: '',
  startDirection: '',
  direction: '',
  startX: 0,
  startY: 0,
  startTime: 0,
  nowX: 0,
  nowY: 0,
  shiftX: 0,
  shiftY: 0,
  deltaX: 0,
  deltaY: 0,
  inertia: false
}

const EVENT_OPTIONS = { capture: true, passive: false }
const SLIP_SENSITIVITY = 2

// Вычисляет координаты, направление и инерцию жеста внутри компонента.
const TouchDriver = ({
  ref,
  innerRef,
  children,
  component: Component = 'div',
  autoMove = false,
  touchpad = false,
  scrollable = false,
  moveStart,
  moveXY,
  moveEnd,
  ...otherProps
}: TouchDriverProps) => {
  const touchRef = useRef<HTMLElement>(null)
  const mergedRef = useMergedRefs(touchRef, ref, innerRef)
  const isTouch = useRef(false)
  const slip = useRef(0)
  const prevDelta = useRef({ x: 0, y: 0 })
  const coordinates = useRef({ ...INITIAL_COORDINATES })

  const resetCoordinates = () => {
    coordinates.current = { ...INITIAL_COORDINATES }
    prevDelta.current = { x: 0, y: 0 }
    slip.current = 0
    isTouch.current = false
  }

  const getCoordinates = (event: TouchDriverEvent) => {
    const point =
      'touches' in event ? event.touches[0] || event.changedTouches[0] : event
    const node = touchRef.current
    if (!point || !node) return null

    const { x, y } = node.getBoundingClientRect()
    return {
      nowX: point.clientX - (autoMove ? 0 : x),
      nowY: point.clientY - (autoMove ? 0 : y)
    }
  }

  const onMoveStart = useEffectEvent((event: TouchDriverEvent) => {
    const position = getCoordinates(event)
    if (!position) return

    isTouch.current = true
    const current = coordinates.current
    current.startX = position.nowX
    current.startY = position.nowY
    current.nowX = position.nowX
    current.nowY = position.nowY
    current.startTime = Date.now()
    moveStart?.(current)
  })

  const onMove = useEffectEvent((event: TouchDriverEvent) => {
    const node = touchRef.current
    if (!isTouch.current || !node) return
    const position = getCoordinates(event)
    if (!position) return
    if (!scrollable) event.preventDefault()

    const current = coordinates.current
    if (current.nowX !== 0) current.deltaX = position.nowX - current.nowX
    if (current.nowY !== 0) current.deltaY = position.nowY - current.nowY
    current.nowX = position.nowX
    current.nowY = position.nowY

    if (
      current.deltaX === current.deltaY &&
      current.nowX !== 0 &&
      current.nowY !== 0
    ) {
      current.deltaX = prevDelta.current.x
      current.deltaY = prevDelta.current.y
    }
    prevDelta.current = { x: current.deltaX, y: current.deltaY }

    current.itXorY =
      Math.abs(current.deltaX) > Math.abs(current.deltaY) ? 'x' : 'y'
    const delta = current.itXorY === 'x' ? current.deltaX : current.deltaY
    current.direction =
      delta === 0
        ? undefined
        : current.itXorY === 'x'
          ? delta < 0
            ? 'left'
            : 'right'
          : delta < 0
            ? 'top'
            : 'bottom'

    if (
      slip.current === SLIP_SENSITIVITY &&
      current.startItXorY === '' &&
      current.startDirection === ''
    ) {
      current.startItXorY = current.itXorY
      current.startDirection = current.direction
    } else if (slip.current < SLIP_SENSITIVITY + 1) {
      slip.current += 1
    }

    current.shiftX = current.nowX - current.startX
    current.shiftY = current.nowY - current.startY
    if (autoMove) {
      node.style.transform = `translate3d(${current.shiftX}px, ${current.shiftY}px, 0px)`
      node.style.transition = 'transform 0ms'
    } else {
      moveXY?.(current)
    }
  })

  const onMoveEnd = useEffectEvent(() => {
    const current = coordinates.current
    if (current.startTime === 0) return

    if (
      Date.now() - current.startTime < 300 &&
      current.shiftX !== 0 &&
      current.shiftY !== 0
    ) {
      current.inertia = true
    }
    if (autoMove) {
      const node = touchRef.current
      if (node) {
        node.style.transform = 'translate3d(0px, 0px, 0px)'
        node.style.transition = 'transform 200ms ease'
      }
    } else {
      moveEnd?.(current)
    }
    resetCoordinates()
  })

  useEffect(() => {
    const node = touchRef.current
    if (!node) return

    const handleStart = (event: TouchDriverEvent) => onMoveStart(event)
    const handleMove = (event: TouchDriverEvent) => onMove(event)
    const handleEnd = () => onMoveEnd()
    node.addEventListener('mousedown', handleStart, EVENT_OPTIONS)
    window.addEventListener('mousemove', handleMove, EVENT_OPTIONS)
    window.addEventListener('mouseup', handleEnd, EVENT_OPTIONS)
    node.addEventListener('touchstart', handleStart, EVENT_OPTIONS)
    node.addEventListener('touchmove', handleMove, EVENT_OPTIONS)
    node.addEventListener('touchend', handleEnd, EVENT_OPTIONS)
    node.addEventListener('touchcancel', handleEnd, EVENT_OPTIONS)

    return () => {
      node.removeEventListener('mousedown', handleStart, EVENT_OPTIONS)
      window.removeEventListener('mousemove', handleMove, EVENT_OPTIONS)
      window.removeEventListener('mouseup', handleEnd, EVENT_OPTIONS)
      node.removeEventListener('touchstart', handleStart, EVENT_OPTIONS)
      node.removeEventListener('touchmove', handleMove, EVENT_OPTIONS)
      node.removeEventListener('touchend', handleEnd, EVENT_OPTIONS)
      node.removeEventListener('touchcancel', handleEnd, EVENT_OPTIONS)
      resetCoordinates()
    }
  }, [Component])

  return (
    <Component {...otherProps} ref={mergedRef}>
      {children}
    </Component>
  )
}

TouchDriver.displayName = 'TouchDriverEVG'

export default TouchDriver
