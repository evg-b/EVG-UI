import React, { useState, useEffect, useRef, forwardRef } from 'react'
import TouchDriver from '../TouchDriver/TouchDriver'
import type { ScrollProps } from './Scroll.types'
import * as Styled from './Scroll.styled'

// Кроссбраузерный скроллбар.
const Scroll = forwardRef<HTMLElement, ScrollProps>(
  function Scroll(props, ref) {
    const {
      className,
      children,
      component: Component = 'div',
      color,
      vertical,
      horizontal,
      autoHide,
      autoHideDuration,
      autoHideTimeout,
      trackSize,
      onScroll,
      onScrollStart,
      onScrollStop,
      style,
      ...otherProps
    } = props
    let ScrollBase_ref = useRef()
    ScrollBase_ref = ref || ScrollBase_ref
    const ScrollSpace_ref = useRef()
    const ScrollWrapper_ref = useRef()
    const observer_ref = useRef()
    const [satisfactoryHeight, setSatisfactoryHeight] = useState(false)
    const [satisfactoryWidth, setSatisfactoryWidth] = useState(false)
    const [scrollVisible, setScrollVisible] = useState(false)
    const touchTrack = useRef(false)
    const prevNow = useRef({
      x: 0,
      y: 0
    })
    const lastMove = useRef(false)

    const setEvgVar = (key, val) => {
      // установка css var
      const S_B_S = ScrollBase_ref.current
      S_B_S.style.setProperty(key, val)
    }

    const getSpace = () => {
      // const { offsetWidth, offsetHeight } = ScrollBase_ref.current
      const { offsetWidth, offsetHeight } = ScrollWrapper_ref.current
      const { scrollWidth, scrollHeight } = ScrollSpace_ref.current
      return {
        offset: {
          x: offsetWidth,
          y: offsetHeight
        },
        scroll: {
          x: scrollWidth,
          y: scrollHeight
        }
      }
    }

    const calcScrollerSize = () => {
      const { offset, scroll } = getSpace()
      return {
        x: ((offset.x / scroll.x) * offset.x) | 0,
        y: ((offset.y / scroll.y) * offset.y) | 0
      }
    }

    function satisfactorySize(e) {
      const { offset, scroll } = getSpace()

      if (offset.y < scroll.y) {
        setSatisfactoryHeight(true)
      } else {
        setSatisfactoryHeight(false)
      }

      if (offset.x < scroll.x) {
        setSatisfactoryWidth(true)
      } else {
        setSatisfactoryWidth(false)
      }

      setEvgVar('--evg-scroller-size-y', `${calcScrollerSize().y}px`)
      setEvgVar('--evg-scroller-size-x', `${calcScrollerSize().x}px`)
    }

    const calcPosition = (newPositionScroller = 0, mod = 'y') => {
      const { offset, scroll } = getSpace()
      let barSize = mod === 'y' ? calcScrollerSize().y : calcScrollerSize().x
      let workSpace = mod === 'y' ? offset.y : offset.x
      let allSpace = mod === 'y' ? scroll.y : scroll.x
      let ratioShift = allSpace / workSpace
      let startScroll = 0
      let endScroll = workSpace - barSize
      let scrollToY = ScrollWrapper_ref.current.scrollTop
      let scrollToX = ScrollWrapper_ref.current.scrollLeft

      if (newPositionScroller >= 0 && newPositionScroller < endScroll) {
        mod === 'y'
          ? (scrollToY = ratioShift * newPositionScroller)
          : (scrollToX = ratioShift * newPositionScroller)
        setEvgVar(`--evg-scroller-${mod}`, `${newPositionScroller}px`)
      } else {
        if (Math.sign(newPositionScroller) === -1) {
          mod === 'y' ? (scrollToY = startScroll) : (scrollToX = startScroll)
          setEvgVar(`--evg-scroller-${mod}`, `${startScroll}px`)
        } else {
          mod === 'y'
            ? (scrollToY = ratioShift * endScroll)
            : (scrollToX = ratioShift * endScroll)
          setEvgVar(`--evg-scroller-${mod}`, `${endScroll}px`)
        }
      }

      ScrollWrapper_ref.current.scrollTo(scrollToX, scrollToY)
    }

    const createAutoHideTimer = () => {
      lastMove.current = setTimeout(() => {
        onScrollStop && onScrollStop(true)
        setScrollVisible(false)
        lastMove.current = false
      }, autoHideTimeout)
    }

    const moveScroll = (e) => {
      if (!touchTrack.current) {
        const { offset, scroll } = getSpace()
        let scrollPercentageY = Number(
          (e.target.scrollTop / scroll.y).toFixed(2)
        )
        let scrollPercentageX = Number(
          (e.target.scrollLeft / scroll.x).toFixed(2)
        )
        let positionY = scrollPercentageY * offset.y
        let positionX = scrollPercentageX * offset.x
        prevNow.current.y = positionY
        prevNow.current.x = positionX
        setEvgVar('--evg-scroller-y', `${positionY}px`)
        setEvgVar('--evg-scroller-x', `${positionX}px`)
      }

      if (lastMove.current) {
        clearTimeout(lastMove.current)
      } else {
        onScrollStart && onScrollStart(true)
        setScrollVisible(true)
      }

      if (touchTrack.current) {
        if (!lastMove.current) {
          lastMove.current = true
        }
      }

      onScroll && onScroll(e)

      if (!touchTrack.current && autoHide) {
        createAutoHideTimer()
      }
    }

    const onMoveStart = (e, mod) => {
      const { nowY, nowX } = e
      touchTrack.current = true
      let barSize = mod === 'y' ? calcScrollerSize().y : calcScrollerSize().x
      let Now = mod === 'y' ? nowY : nowX

      if (Now < prevNow.current[mod] || Now > prevNow.current[mod] + barSize) {
        let correction = barSize / 2
        /*
          correction - корректируем позицию трекера, чтобы курсор оказался хотя бы в центре, а не с краю
      */

        prevNow.current[mod] = Now - correction
        calcPosition(prevNow.current[mod], mod)
      }
    }

    const onMoveY = ({ deltaY }) => {
      prevNow.current.y += deltaY
      calcPosition(prevNow.current.y, 'y')
    }

    const onMoveX = ({ deltaX }) => {
      prevNow.current.x += deltaX
      calcPosition(prevNow.current.x, 'x')
    }

    const onMoveEnd = () => {
      touchTrack.current = false
      createAutoHideTimer()
    }

    useEffect(() => {
      if (observer_ref.current === undefined) {
        satisfactorySize()
        observer_ref.current = new ResizeObserver(satisfactorySize)
        observer_ref.current.observe(ScrollSpace_ref.current)
      }
    })
    useEffect(() => {
      return () => {
        observer_ref.current.disconnect()
      }
    }, [])
    const trackY = (
      <Styled.VerticalTrack
        as={TouchDriver}
        moveStart={(e) => onMoveStart(e, 'y')}
        moveXY={onMoveY}
        moveEnd={onMoveEnd}
        $autoHide={Boolean(autoHide)}
        $scrollVisible={Boolean(scrollVisible && autoHide)}
        $autoHideDuration={props.autoHideDuration}
        $color={props.color}
        $trackSize={props.trackSize}
      />
    )
    const trackX = (
      <Styled.HorizontalTrack
        as={TouchDriver}
        moveStart={(e) => onMoveStart(e, 'x')}
        moveXY={onMoveX}
        moveEnd={onMoveEnd}
        $autoHide={Boolean(autoHide)}
        $scrollVisible={Boolean(scrollVisible && autoHide)}
        $autoHideDuration={props.autoHideDuration}
        $color={props.color}
        $trackSize={props.trackSize}
      />
    )
    return (
      <Styled.Root
        as={Component}
        ref={ScrollBase_ref}
        style={style}
        className={className}
        $autoHideDuration={props.autoHideDuration}
        $color={props.color}
        $trackSize={props.trackSize}>
        {satisfactoryHeight && vertical ? trackY : null}
        {satisfactoryWidth && horizontal ? trackX : null}
        <Styled.Wrapper
          ref={ScrollWrapper_ref}
          onScroll={moveScroll}
          $autoHideDuration={props.autoHideDuration}
          $color={props.color}
          $trackSize={props.trackSize}>
          <Styled.Space ref={ScrollSpace_ref}>{children}</Styled.Space>
        </Styled.Wrapper>
      </Styled.Root>
    )
  }
)
Scroll.defaultProps = {
  component: 'div',
  color: '#000000',
  vertical: true,
  horizontal: true,
  autoHide: true,
  autoHideDuration: 500,
  autoHideTimeout: 800,
  trackSize: 6,
  style: {}
}
Scroll.displayName = 'ScrollEVG'
export default Scroll
