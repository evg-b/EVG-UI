import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import AvatarBase from './AvatarBase'
import AvatarColor from './AvatarColor'
import AvatarGroupAndSize from './AvatarGroupAndSize'
import AvatarMultiple from './AvatarMultiple'
import AvatarNotImage from './AvatarNotImage'
import AvatarSize from './AvatarSize'
import AvatarStatus from './AvatarStatus'
import AvatarStatusColor from './AvatarStatusColor'

export const AvatarBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<AvatarBase />}
    snippet={Snippets.AvatarBase} />
)

AvatarBaseExample.displayName = 'AvatarBaseExample'

export const AvatarColorExample = () => (
  <CodeExample
    title="Color"
    demo={<AvatarColor />}
    snippet={Snippets.AvatarColor} />
)

AvatarColorExample.displayName = 'AvatarColorExample'

export const AvatarGroupAndSizeExample = () => (
  <CodeExample
    title="GroupAndSize"
    demo={<AvatarGroupAndSize />}
    snippet={Snippets.AvatarGroupAndSize} />
)

AvatarGroupAndSizeExample.displayName = 'AvatarGroupAndSizeExample'

export const AvatarMultipleExample = () => (
  <CodeExample
    title="Multiple"
    demo={<AvatarMultiple />}
    snippet={Snippets.AvatarMultiple} />
)

AvatarMultipleExample.displayName = 'AvatarMultipleExample'

export const AvatarNotImageExample = () => (
  <CodeExample
    title="NotImage"
    demo={<AvatarNotImage />}
    snippet={Snippets.AvatarNotImage} />
)

AvatarNotImageExample.displayName = 'AvatarNotImageExample'

export const AvatarSizeExample = () => (
  <CodeExample
    title="Size"
    demo={<AvatarSize />}
    snippet={Snippets.AvatarSize} />
)

AvatarSizeExample.displayName = 'AvatarSizeExample'

export const AvatarStatusExample = () => (
  <CodeExample
    title="Status"
    demo={<AvatarStatus />}
    snippet={Snippets.AvatarStatus} />
)

AvatarStatusExample.displayName = 'AvatarStatusExample'

export const AvatarStatusColorExample = () => (
  <CodeExample
    title="StatusColor"
    demo={<AvatarStatusColor />}
    snippet={Snippets.AvatarStatusColor} />
)

AvatarStatusColorExample.displayName = 'AvatarStatusColorExample'
