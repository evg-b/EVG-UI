import type metadata from './APIs.json'

export type ApiDocProps = {
  name: keyof typeof metadata
  full?: boolean
}
