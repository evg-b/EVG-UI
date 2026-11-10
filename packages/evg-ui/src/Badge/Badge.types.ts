import type { HTMLAttributes, ReactNode } from 'react'

type BadgeOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Название цвета в разных форматах.
  color?: string

  // Номер для отображения на значке.
  count?: number

  // Максимальный предел точного отображения.
  max?: number

  // Минималистичный вид.
  dot?: boolean

  // Смещение, чтобы корректно смотрелось если родитель круглой формы.
  circle?: boolean

  // true - badge становиться самостоятельным элементом.
  ripe?: boolean
}

export type BadgeProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof BadgeOwnProps
> &
  BadgeOwnProps

export type BadgeStyledProps = {
  $ripe?: BadgeProps['ripe']
  $badgeNull?: boolean
  $dot?: boolean
  $circle?: boolean
  $color?: BadgeProps['color']
}
