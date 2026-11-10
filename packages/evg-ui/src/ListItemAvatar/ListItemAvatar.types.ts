import type { Ref, ElementType, HTMLAttributes, ReactNode } from 'react'

type ListItemAvatarOwnProps = {
  ref?: Ref<HTMLElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType
}

export type ListItemAvatarProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof ListItemAvatarOwnProps
> &
  ListItemAvatarOwnProps
