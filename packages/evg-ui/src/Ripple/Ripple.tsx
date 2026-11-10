import React, { forwardRef, useState, useEffect, useRef } from 'react'

import TouchDriver from '../TouchDriver/TouchDriver'
import { useTheme } from '../theme/useTheme'

import { getRippleColor, getRippleOpacity } from './Ripple.helpers'
import type { RippleProps } from './Ripple.types'

import * as Styled from './Ripple.styled'

const Ripple = forwardRef<HTMLElement, RippleProps>(
  function Ripple(props, ref) {
    const {
      className,
      children,
      component: Component = 'span',
      rippleCenter = false,
      isFocus = false,
      isPressed = false,
      isActive = false,
      color,
      contrast = true,
      ...otherProps
    } = props

    const theme = useTheme()

    let RippleRef = useRef()
    RippleRef = ref || RippleRef
    const [startRipple, setStartRipple] = useState(false)
    const [endRipple, setEndRipple] = useState(false)
    const isEndTouch = useRef(false)
    const startRippleDone = useRef(false)

    const startTouch = ({ startX, startY }) => {
      RippleStartAnimation(startX, startY, rippleCenter)
    }

    const RippleStartAnimation = (startX, startY, center) => {
      isEndTouch.current = false
      const RippleRef_S = RippleRef.current
      let { width, height } = RippleRef_S.getBoundingClientRect()

      let rippleSize = Math.sqrt(width ** 2 + height ** 2)
      let coordY, coordX, coordEndY, coordEndX

      if (center) {
        coordX = width / 2 - rippleSize / 2
        coordY = height / 2 - rippleSize / 2
      } else {
        coordX = startX - rippleSize / 2
        coordY = startY - rippleSize / 2
      }

      coordEndX = width / 2 - rippleSize / 2
      coordEndY = height / 2 - rippleSize / 2

      RippleRef_S.style.setProperty('--evg-ripple-size', `${rippleSize}px`)
      RippleRef_S.style.setProperty(
        '--evg-ripple-coord-start',
        `${coordX}px,${coordY}px`
      )
      RippleRef_S.style.setProperty(
        '--evg-ripple-coord-end',
        `${coordEndX}px,${coordEndY}px`
      )
      RippleRef_S.style.setProperty(
        '--evg-ripple-opacity',
        getRippleOpacity(getRippleColor(theme, color, contrast), 'pressed')
      )

      setStartRipple(true)
    }

    const endTouch = () => {
      isEndTouch.current = true
      animationStartRippleDone()
    }

    const animationStartRippleDone = () => {
      if (isEndTouch.current && startRippleDone.current) {
        setEndRipple(true)
      }
    }

    const onAnimationEnd = (e) => {
      if (e.animationName === Styled.startRippleAnimation.getName()) {
        startRippleDone.current = true
        animationStartRippleDone()
      }
      if (e.animationName === Styled.endRippleAnimation.getName()) {
        // end
        DefaultSetState()
      }
    }

    const DefaultSetState = () => {
      setStartRipple(false)
      setEndRipple(false)
      isEndTouch.current = false
      startRippleDone.current = false
    }

    useEffect(() => {
      if (isPressed) {
        RippleStartAnimation(0, 0, true)
      } else {
        isEndTouch.current = true
        animationStartRippleDone()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPressed])

    return (
      <Styled.Root
        as={TouchDriver}
        className={className}
        $color={color}
        $contrast={contrast}
        $isFocus={isFocus}
        $isActive={isActive}
        $startRipple={startRipple}
        $endRipple={endRipple}
        onAnimationEnd={onAnimationEnd}
        innerRef={RippleRef}
        component={Component}
        moveStart={startTouch}
        moveEnd={endTouch}
        {...otherProps}
      />
    )
  }
)

Ripple.defaultProps = {
  rippleCenter: false,
  isFocus: false,
  isPressed: false,
  isActive: false,
  color: 'default',
  contrast: true
}
Ripple.displayName = 'RippleEVG'
export default Ripple
