import type { HTMLAttributes, ReactNode } from 'react'

type CodeExampleOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // title демки.
  title?: string

  // Демка с компонентом.
  demo?: ReactNode

  // Исходный код компонента в в виде текста.
  snippet?: string

  // Язык разметки для react-syntax-highlighter.
  language?: string
}

export type CodeExampleProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof CodeExampleOwnProps
> &
  CodeExampleOwnProps
