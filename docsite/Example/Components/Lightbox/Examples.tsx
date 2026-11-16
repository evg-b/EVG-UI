import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import LightboxBase from './LightboxBase'

export const LightboxBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<LightboxBase />}
    snippet={Snippets.LightboxBase} />
)

LightboxBaseExample.displayName = 'LightboxBaseExample'
