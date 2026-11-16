import type { TouchDriverCoordinates } from '@evg-b/evg-ui'

import type { TouchDriverDirectionProps } from './TouchDriverDirection.types'

import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { Elevation, Color, TouchDriver, withStyles } from '@evg-b/evg-ui'

const styles = {
  touch: {
    position: 'relative',
    width: '500px',
    height: '400px',
    overflow: 'hidden',
    ...Elevation(2)
  },
  touchCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: Color('primary').Base(),
    color: Color('primary').Contrast(),
    cursor: 'pointer',
    userSelect: 'none'
  },
  info: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    padding: '10px',
    boxSizing: 'border-box',
    '& >* span': {
      color: Color('primary').Base(),
      fontWeight: 'bold'
    }
  },
  direction: {
    position: 'absolute',
    fontWeight: 500,
    color: Color('gray300').Base(),
    transition: 'color 300ms ease'
  },
  directionTop: {
    top: 10,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  directionBottom: {
    bottom: 10,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  directionLeft: {
    top: '50%',
    left: 10,
    transform: 'translateY(-50%)'
  },
  directionRight: {
    top: '50%',
    right: 10,
    transform: 'translateY(-50%)'
  },
  directionActive: {
    color: Color('primary').Base()
  },
  coordX: {
    bottom: 10,
    right: 10
  },
  coordY: {
    left: 10,
    top: 10
  }
}

const TouchDriverDirection = (props: TouchDriverDirectionProps) => {
  const { classes: cl } = props
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
      <div className={cl.info}>
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
      </div>
      <TouchDriver className={cl.touch} moveStart={onMoveStar} moveXY={onMove}>
        <div
          className={classNames(cl.direction, cl.directionTop, {
            [cl.directionActive]: params.direction === 'top'
          })}>
          TOP
        </div>
        <div
          className={classNames(cl.direction, cl.directionBottom, {
            [cl.directionActive]: params.direction === 'bottom'
          })}>
          BOTTOM
        </div>
        <div
          className={classNames(cl.direction, cl.directionLeft, {
            [cl.directionActive]: params.direction === 'left'
          })}>
          LEFT
        </div>
        <div
          className={classNames(cl.direction, cl.directionRight, {
            [cl.directionActive]: params.direction === 'right'
          })}>
          RIGHT
        </div>
        <div
          className={classNames(cl.direction, cl.coordX, {
            [cl.directionActive]: params.itXorY === 'x'
          })}>
          X
        </div>
        <div
          className={classNames(cl.direction, cl.coordY, {
            [cl.directionActive]: params.itXorY === 'y'
          })}>
          Y
        </div>
        <div ref={circle_ref} className={cl.touchCircle}>
          MOVE
        </div>
      </TouchDriver>
    </div>
  )
}

TouchDriverDirection.displayName = 'TouchDriverDirection'

export default withStyles(styles)(TouchDriverDirection)
