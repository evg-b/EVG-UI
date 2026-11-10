import type { Ref, ReactNode } from 'react'

import type { TextFieldProps } from '../TextField/TextField.types'

type SelectOwnProps = {
  ref?: Ref<HTMLInputElement | HTMLTextAreaElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Название цвета в разных форматах.
  color?: string

  // Если true, в список добавиться пустой SelectOption.
  emptyOption?: boolean

  // Вызывается при изменении состояния.
  onChange?: (value: string | number) => void

  // Value - number или string.
  value?: string | number

  // Если true, принимает состоянии disabled.
  disabled?: boolean
}

export type SelectProps = Omit<TextFieldProps, keyof SelectOwnProps> &
  SelectOwnProps

export type SelectStyledProps = {
  $minWidth?: number
  $selectIconOpen?: boolean
}
