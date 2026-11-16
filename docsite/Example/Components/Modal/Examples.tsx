import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import ModalBase from './ModalBase'
import ModalEsc from './ModalEsc'

export const ModalBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<ModalBase />}
    snippet={Snippets.ModalBase} />
)

ModalBaseExample.displayName = 'ModalBaseExample'

export const ModalEscExample = () => (
  <CodeExample
    title="Esc"
    demo={<ModalEsc />}
    snippet={Snippets.ModalEsc} />
)

ModalEscExample.displayName = 'ModalEscExample'
