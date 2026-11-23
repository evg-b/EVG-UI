import type { TouchDriverCoordinates } from '@evg-b/evg-ui'

import { useEffect, useRef } from 'react'
import { TouchDriver } from '@evg-b/evg-ui'

import * as Styled from './TouchDriver.styled'

const TouchDriverBase = () => {
  const circle_ref = useRef<HTMLDivElement | null>(null)
  const sizeCircke = 150 / 2
  const onMoveStar = ({ startX, startY }: TouchDriverCoordinates) => {
    const circle_S = circle_ref.current
    if (!circle_S) return
    circle_S.style.transform = `translate3d(${startX - sizeCircke}px, ${startY - sizeCircke}px, 0px)`
  }
  const onMove = ({
    startX,
    shiftX,
    startY,
    shiftY
  }: TouchDriverCoordinates) => {
    const circle_S = circle_ref.current
    if (!circle_S) return
    circle_S.style.transform = `translate3d(${startX + shiftX - sizeCircke}px, ${startY + shiftY - sizeCircke}px, 0px)`
  }
  useEffect(() => {
    const circle_S = circle_ref.current
    if (!circle_S) return
    circle_S.style.transform = `translate3d(${250 - sizeCircke}px, ${200 - sizeCircke}px, 0px)`
  }, [])
  return (
    <Styled.Area
      as={TouchDriver}
      moveStart={onMoveStar}
      moveXY={onMove}>
      <Styled.Circle ref={circle_ref}>
        MOVE
      </Styled.Circle>
    </Styled.Area>
  )
}

TouchDriverBase.displayName = 'TouchDriverBase'

export default TouchDriverBase
