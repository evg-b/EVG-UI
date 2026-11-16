import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import SkeletonAnimation from './SkeletonAnimation'
import SkeletonAvatar from './SkeletonAvatar'
import SkeletonBase from './SkeletonBase'
import SkeletonText from './SkeletonText'

export const SkeletonAnimationExample = () => (
  <CodeExample
    title="Animation"
    demo={<SkeletonAnimation />}
    snippet={Snippets.SkeletonAnimation} />
)

SkeletonAnimationExample.displayName = 'SkeletonAnimationExample'

export const SkeletonAvatarExample = () => (
  <CodeExample
    title="Avatar"
    demo={<SkeletonAvatar />}
    snippet={Snippets.SkeletonAvatar} />
)

SkeletonAvatarExample.displayName = 'SkeletonAvatarExample'

export const SkeletonBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<SkeletonBase />}
    snippet={Snippets.SkeletonBase} />
)

SkeletonBaseExample.displayName = 'SkeletonBaseExample'

export const SkeletonTextExample = () => (
  <CodeExample
    title="Text"
    demo={<SkeletonText />}
    snippet={Snippets.SkeletonText} />
)

SkeletonTextExample.displayName = 'SkeletonTextExample'
