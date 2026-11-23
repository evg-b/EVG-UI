import type { ChangeEvent } from 'react'

import type { TouchDriverCoordinates } from '@evg-b/evg-ui'

import { useState, useRef } from 'react'
import { TouchDriver, Switch } from '@evg-b/evg-ui'

import * as Styled from './TouchDriver.styled'

const TouchDriverInertia = () => {
  const touch_ref = useRef<HTMLElement | null>(null)
  const circle_ref = useRef<HTMLDivElement | null>(null)
  const position = useRef(0)
  const sensitivity = 0.5
  const sizeCircle = 100
  const [active, setActive] = useState(false)
  const [useInertia, setUseInertia] = useState(false)

  const onChangeInertia = (e: ChangeEvent<HTMLInputElement>) => {
    setUseInertia(e.target.checked)
  }

  const onMove = ({ shiftX, deltaX }: TouchDriverCoordinates) => {
    const circle_S = circle_ref.current
    if (!circle_S) return
    if (!touch_ref.current) return
    let { width } = touch_ref.current.getBoundingClientRect()
    circle_S.style.transition = `none`
    position.current = position.current + deltaX
    circle_S.style.transform = `translate(${position.current}px,-50%)`
    Math.abs(shiftX) > (width - sizeCircle) * sensitivity
      ? setActive(true)
      : setActive(false)
  }
  const onMoveEnd = ({ startX, shiftX, inertia }: TouchDriverCoordinates) => {
    const circle_S = circle_ref.current
    if (!circle_S) return
    if (!touch_ref.current) return
    let { width } = touch_ref.current.getBoundingClientRect()
    const widthContainer = width - sizeCircle
    circle_S.style.transition = `transform 300ms cubic-bezier(0.4, 0, 0.2, 1)`
    if (inertia && useInertia) {
      position.current =
        startX > widthContainer * sensitivity ? 0 : widthContainer
    } else {
      position.current =
        shiftX > widthContainer * sensitivity ? widthContainer : 0
    }
    circle_S.style.transform = `translate(${position.current}px,-50%)`
    setActive(false)
  }
  return (
    <Styled.Area
      as={TouchDriver}
      ref={touch_ref}
      moveXY={onMove}
      moveEnd={onMoveEnd}>
      <Styled.InertiaCircle ref={circle_ref}>
        MOVE
      </Styled.InertiaCircle>
      <Styled.LeftTarget />
      <Styled.RightTarget />
      <Styled.Threshold $active={active} />
      <Styled.Controls $active={useInertia}>
        <Switch onChange={onChangeInertia} id="switch" color="primary" />
        <label htmlFor="switch">INERTIA</label>
      </Styled.Controls>
    </Styled.Area>
  )
}

TouchDriverInertia.displayName = 'TouchDriverInertia'

export default TouchDriverInertia
