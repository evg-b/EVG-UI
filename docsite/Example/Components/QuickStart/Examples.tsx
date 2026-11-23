import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import App from './App'

export const AppExample = () => (
  <CodeExample
    title="App"
    demo={<App />}
    snippet={Snippets.App} />
)

AppExample.displayName = 'AppExample'
