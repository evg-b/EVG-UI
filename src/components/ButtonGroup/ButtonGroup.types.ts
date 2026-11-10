import type { Ref, HTMLAttributes, ReactNode } from 'react'

type ButtonGroupOwnProps = {
  ref?: Ref<HTMLDivElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Название цвета в разных форматах.
  color?: string

  // Круглые края.
  round?: boolean

  // Если true, принимает состоянии disabled.
  disabled?: boolean

  // Регистр текста.
  uppercase?: boolean

  // Принимает вертикальное или горизонтальное положение.
  orientation?: 'horizontal' | 'vertical'

  // Все потомки принимают указанный размер.
  size?: 'small' | 'medium' | 'large' | 'extra'

  // Все потомки принимают указанный вид.
  variant?: 'text' | 'outlined' | 'contained'
}

export type ButtonGroupProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof ButtonGroupOwnProps
> &
  ButtonGroupOwnProps

export type ButtonGroupStyledProps = {
  $color?: ButtonGroupProps['color']
  $orientation?: ButtonGroupProps['orientation']
  $variant?: ButtonGroupProps['variant']
  $round?: boolean
}
