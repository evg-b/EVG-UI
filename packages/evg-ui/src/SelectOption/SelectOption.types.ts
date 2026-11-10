import type { ReactNode } from 'react'

import type { ListItemProps } from '../ListItem/ListItem.types'

type SelectOptionOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Value - number или string.
  value?: string | number
}

export type SelectOptionProps = Omit<
  ListItemProps,
  keyof SelectOptionOwnProps
> &
  SelectOptionOwnProps
