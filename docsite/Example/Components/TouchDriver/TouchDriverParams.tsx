import type { TouchDriverCoordinates } from '@evg-b/evg-ui'

import { useEffect, useRef, useState } from 'react'
import { TouchDriver } from '@evg-b/evg-ui'

import * as Styled from './TouchDriver.styled'

const TouchDriverParams = () => {
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
          <span>startX: </span>
          {params.startX}
        </div>
        <div>
          <span>startY: </span>
          {params.startY}
        </div>
        <div>
          <span>nowX: </span>
          {params.nowX}
        </div>
        <div>
          <span>nowY: </span>
          {params.nowY}
        </div>
        <div>
          <span>shiftX: </span>
          {params.shiftX}
        </div>
        <div>
          <span>shiftY: </span>
          {params.shiftY}
        </div>
        <div>
          <span>deltaX: </span>
          {params.deltaX}
        </div>
        <div>
          <span>deltaY: </span>
          {params.deltaY}
        </div>
      </Styled.Info>
      <Styled.Area
        as={TouchDriver}
        moveStart={onMoveStar}
        moveXY={onMove}>
        <Styled.Circle ref={circle_ref}>
          MOVE
        </Styled.Circle>
      </Styled.Area>
    </div>
  )
}

TouchDriverParams.displayName = 'TouchDriverParams'

export default TouchDriverParams
