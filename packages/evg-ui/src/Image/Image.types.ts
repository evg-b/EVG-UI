import type { ElementType, ImgHTMLAttributes } from 'react'

type ImageOwnProps = {
  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Корневой узел. Это HTML элемент или компонент.
  component?: ElementType

  // Атрибут `src` обязателен и содержит путь к изображению.
  src?: string

  // Атрибут `alt` содержит текстовое описание изображения. Опционально.
  alt?: string
}

export type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  keyof ImageOwnProps
> &
  ImageOwnProps
