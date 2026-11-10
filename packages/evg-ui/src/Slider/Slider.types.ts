import type { HTMLAttributes, ReactNode } from 'react'

type SliderOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string
}

export type SliderProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof SliderOwnProps
> &
  SliderOwnProps
