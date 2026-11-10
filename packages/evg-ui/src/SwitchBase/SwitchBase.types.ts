import type { Ref, InputHTMLAttributes, ReactElement, ReactNode } from 'react'

type SwitchBaseOwnProps = {
  ref?: Ref<HTMLInputElement>

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Название цвета в разных форматах. Подробнее <a>link</a>
  color?: string

  // Размер компонента.
  size?: 'small' | 'medium' | 'large' | 'extra'

  // Тип input.
  type?: 'checkbox' | 'radio'

  // Иконка которая отображается всегда.
  icon?: ReactElement

  // Иконка которая отображается при Checked=true.
  iconChecked?: ReactElement

  // Если true, Ripple эффект отключен.
  rippleOff?: boolean
}

export type SwitchBaseProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof SwitchBaseOwnProps
> &
  SwitchBaseOwnProps
