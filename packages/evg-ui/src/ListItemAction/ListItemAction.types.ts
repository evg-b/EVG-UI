import type { Ref, ElementType, HTMLAttributes, ReactNode } from 'react'

type ListItemActionOwnProps = {
  ref?: Ref<HTMLElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Позиционирование внутри родительского  компонента.
  position?: 'start' | 'end'
}

export type ListItemActionProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof ListItemActionOwnProps
> &
  ListItemActionOwnProps

export type ListItemActionStyledProps = {
  $position?: ListItemActionProps['position']
}
