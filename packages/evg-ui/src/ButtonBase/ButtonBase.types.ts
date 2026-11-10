import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from 'react'

type ButtonBaseOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Название цвета в разных форматах.
  color?: string

  // Если true, принимает состоянии disabled.
  disabled?: boolean

  // Регистр текста.
  uppercase?: boolean

  // Текст ссылки.
  href?: string

  // Атрибут tabindex определяет последовательность перехода между ссылками при нажатии на кнопку Tab.
  tabIndex?: number

  // Если true, Ripple эффект стартует в центре.
  rippleCenter?: boolean

  // Если true, Ripple эффект отключен.
  rippleOff?: boolean

  // Если true, цвет текста будет белым или черным автоматически.
  // Для лучшего восприятия в зависимости от основного цвета.
  contrast?: boolean

  // Активное состояние.
  active?: boolean
}

export type ButtonBaseProps = Omit<
  ButtonHTMLAttributes<HTMLElement> &
    Pick<
      AnchorHTMLAttributes<HTMLElement>,
      'target' | 'download' | 'hrefLang' | 'rel'
    >,
  keyof ButtonBaseOwnProps
> &
  ButtonBaseOwnProps
