import PropDoc from '../../src/components/PropDoc/PropDoc'
import metadata from './APIs.json'

import type { ApiDocProps } from './ApiDoc.types'

const ApiDoc = ({ name, full = false }: ApiDocProps) => (
  <PropDoc full={full} patient={metadata[name]} />
)

ApiDoc.displayName = 'ApiDoc'
export default ApiDoc
