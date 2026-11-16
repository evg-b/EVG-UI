import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import CubesBase from './CubesBase'
import CubesSettings from './CubesSettings'

export const CubesBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<CubesBase />}
    snippet={Snippets.CubesBase} />
)

CubesBaseExample.displayName = 'CubesBaseExample'

export const CubesSettingsExample = () => (
  <CodeExample
    title="Settings"
    demo={<CubesSettings />}
    snippet={Snippets.CubesSettings} />
)

CubesSettingsExample.displayName = 'CubesSettingsExample'
