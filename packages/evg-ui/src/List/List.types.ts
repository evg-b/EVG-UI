import type { Ref, ReactNode } from 'react'

import type { ScrollProps } from '../Scroll/Scroll.types'

type ListOwnProps = {
  ref?: Ref<HTMLElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Название цвета в разных форматах.
  color?: string
}

export type ListProps = Omit<ScrollProps, keyof ListOwnProps> & ListOwnProps
