import type { Ref, HTMLAttributes, ReactNode } from 'react'

type CarouselOwnProps = {
  ref?: Ref<HTMLDivElement>

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Массив изображений.
  imgs?: Array<string>

  // Index стартового изображения в массиве.
  imgStart?: number

  // Цвет фона.
  backgroundColor?: string

  // Вызывается при изменении img. Возвращает index активного изображения.
  onChangeImg?: (index: number) => void

  // Количество пикселей в сдвиге после которого запускается смена изображения.
  sensitivity?: number

  // Время выполнения анимации смены изображения.
  duration?: number
}

export type CarouselProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof CarouselOwnProps
> &
  CarouselOwnProps

export type CarouselStyledProps = {
  $v_zone_right?: boolean
  $v_zone_left?: boolean
  $v_zone_comeback?: boolean
  $backgroundColor?: CarouselProps['backgroundColor']
  $duration?: CarouselProps['duration']
}

export type CarouselImages = {
  left: ReactNode
  center: ReactNode
  right: ReactNode
}
