import type { Ref, ElementType, HTMLAttributes, ReactNode } from 'react'

type ListItemOwnProps = {
  ref?: Ref<HTMLElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Название цвета в разных форматах. Подробнее <a>link</a>
  color?: string

  // Активное состояние.
  active?: boolean

  // Если true, ListItem наследует поведение Button.
  button?: boolean
}

export type ListItemProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof ListItemOwnProps
> &
  ListItemOwnProps

export type ListItemStyledProps = {
  $color?: ListItemProps['color']
  $active?: ListItemProps['active']
}
