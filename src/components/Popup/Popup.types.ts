import type { Ref, HTMLAttributes, ReactNode, RefObject } from 'react'

type PopupOwnProps = {
  ref?: Ref<HTMLDivElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Ссылка на элемент, относительно которого размещается окно.
  target?: RefObject<HTMLElement | null>

  // Если true, Popup будет виден.
  open?: boolean

  // Обработчик запроса на закрытие окна.
  onClose?: () => void

  // Позиционирование относительно target.
  position?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'right'
    | 'right-top'
    | 'right-bottom'

  // Зарезервированное свойство. При наведении видимость определяется режимом hover.
  autoHide?: boolean

  // Смещение в px от target.
  shift?: number

  // Вид анимации.
  animation?: 'fade' | 'docking' | 'zoom'

  // Режим открытия.
  mode?: 'hover' | 'click'
}

export type PopupProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof PopupOwnProps
> &
  PopupOwnProps

export type PopupStyledProps = {
  $animation?: PopupProps['animation']
}
