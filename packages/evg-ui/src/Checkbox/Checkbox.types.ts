import type { ReactNode } from 'react'

import type { SwitchBaseProps } from '../SwitchBase/SwitchBase.types'

type CheckboxOwnProps = {
  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Название цвета в разных форматах.
  color?: string

  // Название компонента.
  name?: string

  // Размер компонента.
  size?: 'small' | 'medium' | 'large' | 'extra'

  // indeterminate состояние.
  indeterminate?: boolean

  // Если true, принимает состоянии disabled.
  disabled?: boolean
}

export type CheckboxProps = Omit<SwitchBaseProps, keyof CheckboxOwnProps> &
  CheckboxOwnProps

export type CheckboxStyledProps = {
  $color?: CheckboxProps['color']
  $indeterminate?: boolean
  $disabled?: boolean
}
