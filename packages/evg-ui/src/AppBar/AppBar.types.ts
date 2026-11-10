import type { HTMLAttributes, ReactNode } from 'react'

type AppBarOwnProps = {
  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Название цвета в разных форматах.
  color?: string

  // Позиционирование компонента на странице
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'

  // Контейнер элементов в левой части.
  left?: ReactNode

  // Контейнер элементов между left и right.
  title?: ReactNode

  // Контейнер элементов в правой части.
  right?: ReactNode

  // Позиция title в центре или нет.
  titleCenter?: boolean
}

export type AppBarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof AppBarOwnProps
> &
  AppBarOwnProps

export type AppBarStyledProps = {
  $position?: AppBarProps['position']
  $titleCenter?: boolean
  $color?: AppBarProps['color']
}
