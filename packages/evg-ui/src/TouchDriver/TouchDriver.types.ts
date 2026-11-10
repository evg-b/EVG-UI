import type { ElementType, HTMLAttributes, ReactNode, RefObject } from 'react'

export type TouchDriverAxis = '' | 'x' | 'y'

export type TouchDriverDirection = '' | 'top' | 'bottom' | 'left' | 'right'

export type TouchDriverCoordinates = {
  startItXorY: TouchDriverAxis
  itXorY: TouchDriverAxis
  startDirection: TouchDriverDirection | undefined
  direction: TouchDriverDirection | undefined
  startX: number
  startY: number
  startTime: number
  nowX: number
  nowY: number
  shiftX: number
  shiftY: number
  deltaX: number
  deltaY: number
  inertia: boolean
}

type TouchDriverOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // ref ссылка компонента.
  innerRef?: RefObject<HTMLElement>

  // Если true, компонент перемещается сам.
  autoMove?: boolean

  // Если true, не останавливает нативный скролл при движении на поверхности TouchDriver.
  scrollable?: boolean

  // Если true, учитывается движение по touchpad.
  touchpad?: boolean

  // Вызывается при касании к области внутри компонента.
  moveStart?: (coordinates: TouchDriverCoordinates) => void

  // Вызывается при движении курсора или пальца по области и за ее пределами.
  // Если до этого сработал moveStart.
  moveXY?: (coordinates: TouchDriverCoordinates) => void

  // Вызывается при окончании движения.
  moveEnd?: (coordinates: TouchDriverCoordinates) => void
}

export type TouchDriverProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof TouchDriverOwnProps
> &
  TouchDriverOwnProps
