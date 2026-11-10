import type { ElementType, HTMLAttributes, ReactNode } from 'react'

type SkeletonOwnProps = {
  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Тип avatar,text,h1-h6. Можно несколько пример: 'text,h2'
  type?: string

  // Ширина компонента.
  width?: number | string

  // Высота компонента.
  height?: number | string

  // Размер компонента.
  size?: number

  // Если true, анимация будет включена.
  animation?: boolean

  // Style css border-radius
  borderRadius?: number
}

export type SkeletonProps = Omit<
  HTMLAttributes<HTMLElement>,
  keyof SkeletonOwnProps
> &
  SkeletonOwnProps

export type SkeletonStyledProps = {
  $types: Array<string>
  $width?: SkeletonProps['width']
  $height?: SkeletonProps['height']
  $animation?: boolean
  $borderRadius?: number
}
