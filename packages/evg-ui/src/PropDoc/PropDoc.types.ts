import type { Ref, HTMLAttributes, ReactNode } from 'react'

export type PropDocType = {
  name?: string
  value?: string | number | boolean | PropDocType | Array<PropDocType>
  computed?: boolean
}

export type PropDocProperty = {
  type?: PropDocType
  defaultValue?: { value: string; computed?: boolean }
  description?: string
  required?: boolean
}

export type PropDocPatient = {
  displayName?: string
  description?: string
  props?: Record<string, PropDocProperty>
}

type PropDocOwnProps = {
  ref?: Ref<HTMLDivElement>

  // Это контент между открывающим и закрывающим тегом компонента.
  children?: ReactNode

  // Чтобы указать CSS классы, используйте этот атрибут.
  className?: string

  // JSON объект с информацией о props компонента.
  patient?: PropDocPatient
}

export type PropDocProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof PropDocOwnProps
> &
  PropDocOwnProps
