import type { ComponentPropsWithRef } from 'react'

export type PropDocProperty = {
  type: { name: string }
  defaultValue?: { value: string }
  required: boolean
  description: string
}

export type PropDocPatient = {
  displayName: string
  description: string
  props: Record<string, PropDocProperty>
}

export type PropDocProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
  patient: PropDocPatient
  full?: boolean
}
