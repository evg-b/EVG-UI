import type { HTMLAttributes, ReactNode } from 'react'

type NotifyOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string
}

export type NotifyProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof NotifyOwnProps
> &
  NotifyOwnProps
