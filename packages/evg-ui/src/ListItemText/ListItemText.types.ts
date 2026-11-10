import type { ElementType, HTMLAttributes, ReactNode } from 'react'

type ListItemTextOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корнево узел. Это HTML элемент или компонент.
  component?: ElementType

  // Название цвета в разных форматах. Подробнее <a>link</a>
  color?: string

  // Вспомогательный текст.
  secondaryText?: string

  // Контейнер для Metadata.
  meta?: ReactNode

  // Вспомогательный контейнер для Metadata.
  secondaryMeta?: ReactNode
}

export type ListItemTextProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof ListItemTextOwnProps
> &
  ListItemTextOwnProps

export type ListItemTextStyledProps = {
  $singleLine?: boolean
  $twoLine?: boolean
  $color?: ListItemTextProps['color']
}
