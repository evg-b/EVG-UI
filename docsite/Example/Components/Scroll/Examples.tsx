import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import ScrollAutoHide from './ScrollAutoHide'
import ScrollBase from './ScrollBase'
import ScrollMaxHeight from './ScrollMaxHeight'
import ScrollTrackSizeAndColor from './ScrollTrackSizeAndColor'
import ScrollVerticalAndHorizontal from './ScrollVerticalAndHorizontal'

export const ScrollAutoHideExample = () => (
  <CodeExample
    title="AutoHide"
    demo={<ScrollAutoHide />}
    snippet={Snippets.ScrollAutoHide} />
)

ScrollAutoHideExample.displayName = 'ScrollAutoHideExample'

export const ScrollBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<ScrollBase />}
    snippet={Snippets.ScrollBase} />
)

ScrollBaseExample.displayName = 'ScrollBaseExample'

export const ScrollMaxHeightExample = () => (
  <CodeExample
    title="MaxHeight"
    demo={<ScrollMaxHeight />}
    snippet={Snippets.ScrollMaxHeight} />
)

ScrollMaxHeightExample.displayName = 'ScrollMaxHeightExample'

export const ScrollTrackSizeAndColorExample = () => (
  <CodeExample
    title="TrackSizeAndColor"
    demo={<ScrollTrackSizeAndColor />}
    snippet={Snippets.ScrollTrackSizeAndColor} />
)

ScrollTrackSizeAndColorExample.displayName = 'ScrollTrackSizeAndColorExample'

export const ScrollVerticalAndHorizontalExample = () => (
  <CodeExample
    title="VerticalAndHorizontal"
    demo={<ScrollVerticalAndHorizontal />}
    snippet={Snippets.ScrollVerticalAndHorizontal} />
)

ScrollVerticalAndHorizontalExample.displayName = 'ScrollVerticalAndHorizontalExample'
