import type { ReactNode } from 'react'

import type { SwitchBaseProps } from '../SwitchBase/SwitchBase.types'

type RadioOwnProps = {
  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Название компонента.
  name?: string

  // Размер компонента.
  size?: 'small' | 'medium' | 'large' | 'extra'

  // Название цвета в разных форматах.
  color?: string
}

export type RadioProps = Omit<SwitchBaseProps, keyof RadioOwnProps> &
  RadioOwnProps
