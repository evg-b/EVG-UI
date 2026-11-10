import type { Ref, ReactNode } from 'react'

import type { PopupProps } from '../Popup/Popup.types'

type MenuOwnProps = {
  ref?: Ref<HTMLDivElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string
}

export type MenuProps = Omit<PopupProps, keyof MenuOwnProps> & MenuOwnProps
