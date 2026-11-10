import type { Ref, ReactNode, SVGAttributes } from 'react'

type LoaderOwnProps = {
  ref?: Ref<SVGSVGElement>

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Название цвета в разных форматах.
  color?: string

  // Размер компонента.
  size?: number

  // Толщина линии.
  depth?: number
}

export type LoaderProps = Omit<
  SVGAttributes<SVGSVGElement>,
  keyof LoaderOwnProps
> &
  LoaderOwnProps

export type LoaderStyledProps = {
  $size?: LoaderProps['size']
  $color?: LoaderProps['color']
}
