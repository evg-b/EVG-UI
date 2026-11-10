import type { HTMLAttributes, ReactNode } from 'react'

type AvatarOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Название цвета в разных форматах.
  color?: string

  // url изображения.
  src?: string

  // Массив url изображений.
  srcs?: Array<string>

  // Альтернативный текст для изображений.
  alt?: string

  // Количество первых букв alt для отображения если src пуст.
  altMax?: number

  // Размер компонента.
  size?: number

  // Отображать статус или нет.
  status?: boolean

  // Цвет статуса.
  statusColor?: string
}

export type AvatarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof AvatarOwnProps
> &
  AvatarOwnProps

export type AvatarStyledProps = {
  $loaded?: boolean
  $status?: boolean
  $size?: AvatarProps['size']
  $color?: AvatarProps['color']
  $srcs?: AvatarProps['srcs']
  $statusColor?: AvatarProps['statusColor']
}
