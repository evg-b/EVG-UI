import type { Ref, ReactNode, SVGAttributes } from 'react'

type SvgIconOwnProps = {
  ref?: Ref<SVGSVGElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Размер компонента. Так же принимает положительное число.
  size?: 'small' | 'medium' | 'large' | 'extra' | number

  // Название цвета в разных форматах.
  color?: string

  // Размер viewBox. Применяется к width и height.
  viewBox?: number
}

export type SvgIconProps = Omit<
  SVGAttributes<SVGSVGElement>,
  keyof SvgIconOwnProps
> &
  SvgIconOwnProps

export type SvgIconStyledProps = {
  $color?: SvgIconProps['color']
  $size?: SvgIconProps['size']
}
