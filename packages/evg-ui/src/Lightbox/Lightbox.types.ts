import type { Ref, HTMLAttributes, ReactNode } from 'react'

type LightboxOwnProps = {
  ref?: Ref<HTMLDivElement>

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Массив изображений.
  imgs?: Array<string>

  // Время выполнения анимации полета изображения.
  duration?: number
}

export type LightboxProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof LightboxOwnProps
> &
  LightboxOwnProps

export type LightboxStyledProps = {
  $selected?: boolean
  $imgFlip_normal?: boolean
  $imgFlip_reverse?: boolean
  $imgFlip_comeback?: boolean
  $hidden?: boolean
  $blackout_normal?: boolean
  $blackout_reverse?: boolean
  $blackout_back?: boolean
  $duration?: LightboxProps['duration']
}
