import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import TooltipAnimation from './TooltipAnimation'
import TooltipAutoHide from './TooltipAutoHide'
import TooltipBase from './TooltipBase'
import TooltipPosition from './TooltipPosition'

export const TooltipAnimationExample = () => (
  <CodeExample
    title="Animation"
    demo={<TooltipAnimation />}
    snippet={Snippets.TooltipAnimation} />
)

TooltipAnimationExample.displayName = 'TooltipAnimationExample'

export const TooltipAutoHideExample = () => (
  <CodeExample
    title="AutoHide"
    demo={<TooltipAutoHide />}
    snippet={Snippets.TooltipAutoHide} />
)

TooltipAutoHideExample.displayName = 'TooltipAutoHideExample'

export const TooltipBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<TooltipBase />}
    snippet={Snippets.TooltipBase} />
)

TooltipBaseExample.displayName = 'TooltipBaseExample'

export const TooltipPositionExample = () => (
  <CodeExample
    title="Position"
    demo={<TooltipPosition />}
    snippet={Snippets.TooltipPosition} />
)

TooltipPositionExample.displayName = 'TooltipPositionExample'
