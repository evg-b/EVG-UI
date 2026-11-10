import type { ElementType, HTMLAttributes, ReactNode } from 'react'

type ModalOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Если true, modal открыт.
  open?: boolean

  // onClose() вызывается при попытки закрыть modal.
  onClose?: () => void

  // Если true, modal закрывается клавишей Esc.
  isEsc?: boolean
}

export type ModalProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof ModalOwnProps
> &
  ModalOwnProps
