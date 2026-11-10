import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
  UIEventHandler
} from 'react'

type ScrollOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Название цвета в разных форматах.
  color?: string

  // Если true, вертикальный Scrollbar включен.
  vertical?: boolean

  // Если true, горизонтальный Scrollbar включен.
  horizontal?: boolean

  // Если true, Scrollbar будет скрываться через время.
  autoHide?: boolean

  // Время выполнения анимации в ms
  autoHideDuration?: number

  // Время через которое скроется Scrollbar из-за бездействия.
  autoHideTimeout?: number

  // Размер track.
  trackSize?: number

  // Вызывается по время скрола.
  onScroll?: UIEventHandler<HTMLDivElement>

  // Вызывается при старте скрола.
  onScrollStart?: (scrolling: boolean) => void

  // Вызывается в конце скрола.
  onScrollStop?: (scrolling: boolean) => void

  // Style css.
  style?: CSSProperties
}

export type ScrollProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof ScrollOwnProps
> &
  ScrollOwnProps

export type ScrollStyledProps = {
  $autoHide?: boolean
  $scrollVisible?: boolean
  $autoHideDuration?: ScrollProps['autoHideDuration']
  $color?: ScrollProps['color']
  $trackSize?: ScrollProps['trackSize']
}
