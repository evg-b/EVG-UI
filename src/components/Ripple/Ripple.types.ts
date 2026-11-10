import type { Ref, ElementType, HTMLAttributes, ReactNode } from 'react'

type RippleOwnProps = {
  ref?: Ref<HTMLElement>

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Если true, Ripple эффект стартует в центре.
  rippleCenter?: boolean

  // Если true, примет состояние для focus.
  isFocus?: boolean

  // Если true, примет состояние для pressed.
  isPressed?: boolean

  // Если true, примет состояние для active.
  isActive?: boolean

  // Название цвета в разных форматах.
  color?: string

  // Если true, цвет волны будет белым или серым автоматически.
  // Для лучшего восприятия в зависимости от основного цвета.
  contrast?: boolean
}

export type RippleProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof RippleOwnProps
> &
  RippleOwnProps

export type RippleStyledProps = {
  $color?: RippleProps['color']
  $contrast?: boolean
  $isFocus?: boolean
  $isActive?: boolean
  $startRipple?: boolean
  $endRipple?: boolean
}

export type RippleEffect =
  | 'hover'
  | 'focus'
  | 'selected'
  | 'activated'
  | 'pressed'
  | 'dragged'
