import type { Ref, ReactNode } from 'react'

import type { ListItemTextProps } from '../ListItemText/ListItemText.types'

type MenuItemOwnProps = {
  ref?: Ref<HTMLDivElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string
}

export type MenuItemProps = Omit<ListItemTextProps, keyof MenuItemOwnProps> &
  MenuItemOwnProps
