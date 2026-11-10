import type {
  Ref,
  ChangeEventHandler,
  ElementType,
  InputHTMLAttributes,
  ReactNode
} from 'react'

type TextFieldOwnProps = {
  ref?: Ref<HTMLInputElement | HTMLTextAreaElement>

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Название цвета в разных форматах.
  color?: string

  // id.
  id?: string

  // Текст внутри поля формы, который исчезает при получении фокуса.
  placeholder?: string

  // Value - number или string.
  value?: string | number

  // Начальное значение при работе без value.
  defaultValue?: string | number

  // label текст.
  labelText?: string

  // Вспомогательный текст под TextField.
  helperText?: string

  // Если true, примет outlined вид.
  outlined?: boolean

  // Если true, TextField займет всю ширину родителя.
  fullWidth?: boolean

  // Круглые края TextField.
  round?: boolean

  // Если true, включиться многострочный режим.
  multiline?: boolean

  // Режим отображения ошибки.
  error?: boolean

  // Количество строк в режиме multiline.
  rows?: number

  // Лимит текста в value.
  maxCount?: number

  // Контейнер элементов в начале.
  leadingIcon?: ReactNode

  // Контейнер элементов в конце.
  trailingIcon?: ReactNode

  // Вызывается при изменении состояния.
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  keyof TextFieldOwnProps
> &
  TextFieldOwnProps

export type TextFieldStyledProps = {
  $color?: TextFieldProps['color']
  $outlined?: boolean
  $fullWidth?: boolean
  $round?: boolean
  $error?: boolean
  $disabled?: boolean
  $hasValue?: boolean
  $hasLabel?: boolean
}
