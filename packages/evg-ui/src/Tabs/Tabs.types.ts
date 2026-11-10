import type { HTMLAttributes, ReactNode } from 'react'

type TabsOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string
}

export type TabsProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof TabsOwnProps
> &
  TabsOwnProps
