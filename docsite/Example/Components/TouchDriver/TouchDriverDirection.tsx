import type { TouchDriverCoordinates } from '@evg-b/evg-ui'

import { useEffect, useRef, useState } from 'react'
import { TouchDriver } from '@evg-b/evg-ui'

import * as Styled from './TouchDriver.styled'

const TouchDriverDirection = () => {
  const circle_ref = useRef<HTMLDivElement | null>(null)
  const [params, setParams] = useState<Partial<TouchDriverCoordinates>>({})
  const sizeCircke = 150 / 2
  const onMoveStar = (e: TouchDriverCoordinates) => {
    const circle_S = circle_ref.current
    if (!circle_S) return
    circle_S.style.transform = `translate3d(${e.startX - sizeCircke}px, ${e.startY - sizeCircke}px, 0px)`
    setParams(e)
  }
  const onMove = (e: TouchDriverCoordinates) => {
    const circle_S = circle_ref.current
    if (!circle_S) return
    circle_S.style.transform = `translate3d(${e.startX + e.shiftX - sizeCircke}px, ${e.startY + e.shiftY - sizeCircke}px, 0px)`
    setParams({ ...e })
  }
  useEffect(() => {
    const circle_S = circle_ref.current
    if (!circle_S) return
    circle_S.style.transform = `translate3d(${250 - sizeCircke}px, ${200 - sizeCircke}px, 0px)`
  }, [])
  return (
    <div>
      <Styled.Info>
        <div>
          <span>startItXorY: </span>
          {params.startItXorY}
        </div>
        <div>
          <span>itXorY: </span>
          {params.itXorY}
        </div>
        <div>
          <span>startDirection: </span>
          {params.startDirection}
        </div>
        <div>
          <span>direction: </span>
          {params.direction}
        </div>
      </Styled.Info>
      <Styled.Area as={TouchDriver} moveStart={onMoveStar} moveXY={onMove}>
        <Styled.Top $active={params.direction === 'top'}>
          TOP
        </Styled.Top>
        <Styled.Bottom $active={params.direction === 'bottom'}>
          BOTTOM
        </Styled.Bottom>
        <Styled.Left $active={params.direction === 'left'}>
          LEFT
        </Styled.Left>
        <Styled.Right $active={params.direction === 'right'}>
          RIGHT
        </Styled.Right>
        <Styled.AxisX $active={params.itXorY === 'x'}>
          X
        </Styled.AxisX>
        <Styled.AxisY $active={params.itXorY === 'y'}>
          Y
        </Styled.AxisY>
        <Styled.Circle ref={circle_ref}>
          MOVE
        </Styled.Circle>
      </Styled.Area>
    </div>
  )
}

TouchDriverDirection.displayName = 'TouchDriverDirection'

export default TouchDriverDirection
