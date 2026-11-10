import type { Ref, HTMLAttributes, ReactNode } from 'react'

type AvatarGroupOwnProps = {
  ref?: Ref<HTMLDivElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Максимальное количество показываемых Avatar
  max?: number

  // Размер компонента.
  size?: number
}

export type AvatarGroupProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof AvatarGroupOwnProps
> &
  AvatarGroupOwnProps

export type AvatarGroupItemStyledProps = {
  $order: number
}
