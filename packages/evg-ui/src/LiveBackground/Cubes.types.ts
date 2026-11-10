import type { CanvasHTMLAttributes, ReactNode, RefObject } from 'react'

type CubesOwnProps = {
  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // Это свойство не реализуется.
  children?: ReactNode

  // ref ссылка компонента.
  innerRef?: RefObject<HTMLCanvasElement>

  // Название цвета в разных форматах.
  color?: string

  // Если true, кубы начинают двигаться сами по себе.
  autopilot?: boolean

  // Заполнение области по X. Если 0 то полное заполнение до краев.
  fillingX?: number

  // Заполнение области по Y. Если 0 то полное заполнение до краев.
  fillingY?: number

  // Минимальный уровень высоты до которого может опускаться один куб.
  levelMin?: number

  // Максимальный уровень высоты до которого может опускаться один куб.
  levelMax?: number

  // Размер куба.
  size?: number

  // Скорость изменения высоты куба.
  speed?: number
}

export type CubesProps = Omit<
  CanvasHTMLAttributes<HTMLCanvasElement>,
  keyof CubesOwnProps
> &
  CubesOwnProps
