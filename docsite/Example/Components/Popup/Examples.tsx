import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import PopupAnimation from './PopupAnimation'
import PopupAutoHide from './PopupAutoHide'
import PopupBase from './PopupBase'
import PopupMode from './PopupMode'
import PopupPosition from './PopupPosition'
import PopupScrollable from './PopupScrollable'
import PopupShift from './PopupShift'

export const PopupAnimationExample = () => (
  <CodeExample
    title="Animation"
    demo={<PopupAnimation />}
    snippet={Snippets.PopupAnimation} />
)

PopupAnimationExample.displayName = 'PopupAnimationExample'

export const PopupAutoHideExample = () => (
  <CodeExample
    title="AutoHide"
    demo={<PopupAutoHide />}
    snippet={Snippets.PopupAutoHide} />
)

PopupAutoHideExample.displayName = 'PopupAutoHideExample'

export const PopupBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<PopupBase />}
    snippet={Snippets.PopupBase} />
)

PopupBaseExample.displayName = 'PopupBaseExample'

export const PopupModeExample = () => (
  <CodeExample
    title="Mode"
    demo={<PopupMode />}
    snippet={Snippets.PopupMode} />
)

PopupModeExample.displayName = 'PopupModeExample'

export const PopupPositionExample = () => (
  <CodeExample
    title="Position"
    demo={<PopupPosition />}
    snippet={Snippets.PopupPosition} />
)

PopupPositionExample.displayName = 'PopupPositionExample'

export const PopupScrollableExample = () => (
  <CodeExample
    title="Scrollable"
    demo={<PopupScrollable />}
    snippet={Snippets.PopupScrollable} />
)

PopupScrollableExample.displayName = 'PopupScrollableExample'

export const PopupShiftExample = () => (
  <CodeExample
    title="Shift"
    demo={<PopupShift />}
    snippet={Snippets.PopupShift} />
)

PopupShiftExample.displayName = 'PopupShiftExample'
