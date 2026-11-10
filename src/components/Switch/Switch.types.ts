import type { Ref, ChangeEventHandler, ReactNode } from 'react'

import type { SwitchBaseProps } from '../SwitchBase/SwitchBase.types'

type SwitchOwnProps = {
  ref?: Ref<HTMLInputElement>

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Название цвета в разных форматах.
  color?: string

  // Вызывается при изменении состояния.
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type SwitchProps = Omit<SwitchBaseProps, keyof SwitchOwnProps> &
  SwitchOwnProps

export type SwitchStyledProps = {
  $color?: SwitchProps['color']
  $active?: boolean
  $disabled?: boolean
}
