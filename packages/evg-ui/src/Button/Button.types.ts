import type { Ref, ElementType, ReactElement, ReactNode } from 'react'

import type { ButtonBaseProps } from '../ButtonBase/ButtonBase.types'
import type { SvgIconProps } from '../SvgIcon/SvgIcon.types'

type ButtonOwnProps = {
  ref?: Ref<HTMLElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Название цвета в разных форматах.
  color?: string

  // Размер компонента.
  size?: 'small' | 'medium' | 'large' | 'extra'

  // Регистр текста.
  uppercase?: boolean

  // Варианты кнопки.
  variant?: 'text' | 'outlined' | 'contained'

  // Круглые края кнопки.
  round?: boolean

  // Отображение уровня высоты(тени) у кнопки.
  elevation?: boolean

  // Статус загрузки.
  loading?: boolean

  // Контейнер элементов в начале.
  startIcon?: ReactElement<Pick<SvgIconProps, 'size'>>

  // Контейнер элементов в конце.
  endIcon?: ReactElement<Pick<SvgIconProps, 'size'>>
}

export type ButtonProps = Omit<ButtonBaseProps, keyof ButtonOwnProps> &
  ButtonOwnProps

export type ButtonStyledProps = {
  $hidden?: boolean
  $uppercase?: boolean
  $round?: boolean
  $elevation?: boolean
  $variant?: ButtonProps['variant']
  $size?: ButtonProps['size']
  $color?: ButtonProps['color']
}
