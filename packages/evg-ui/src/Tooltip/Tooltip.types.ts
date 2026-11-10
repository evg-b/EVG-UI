import type { ReactNode } from 'react'

import type { PopupProps } from '../Popup/Popup.types'

type TooltipOwnProps = {
  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Размер для mobile и desktop.
  specs?: 'desktop' | 'mobile'
}

export type TooltipProps = Omit<PopupProps, keyof TooltipOwnProps> &
  TooltipOwnProps

export type TooltipStyledProps = {
  $specs?: TooltipProps['specs']
}
