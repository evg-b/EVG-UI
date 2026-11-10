import type { Ref, ElementType, ReactNode } from 'react'

import type { ButtonBaseProps } from '../ButtonBase/ButtonBase.types'

type IconButtonOwnProps = {
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

  // Если true, Ripple эффект стартует в центре.
  rippleCenter?: boolean
}

export type IconButtonProps = Omit<ButtonBaseProps, keyof IconButtonOwnProps> &
  IconButtonOwnProps
