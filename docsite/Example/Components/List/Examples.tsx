import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import ListActions from './ListActions'
import ListAvatar from './ListAvatar'
import ListBase from './ListBase'
import ListColor from './ListColor'
import ListHeight from './ListHeight'
import ListMeta from './ListMeta'
import ListSecondaryText from './ListSecondaryText'

export const ListActionsExample = () => (
  <CodeExample
    title="Actions"
    demo={<ListActions />}
    snippet={Snippets.ListActions} />
)

ListActionsExample.displayName = 'ListActionsExample'

export const ListAvatarExample = () => (
  <CodeExample
    title="Avatar"
    demo={<ListAvatar />}
    snippet={Snippets.ListAvatar} />
)

ListAvatarExample.displayName = 'ListAvatarExample'

export const ListBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<ListBase />}
    snippet={Snippets.ListBase} />
)

ListBaseExample.displayName = 'ListBaseExample'

export const ListColorExample = () => (
  <CodeExample
    title="Color"
    demo={<ListColor />}
    snippet={Snippets.ListColor} />
)

ListColorExample.displayName = 'ListColorExample'

export const ListHeightExample = () => (
  <CodeExample
    title="Height"
    demo={<ListHeight />}
    snippet={Snippets.ListHeight} />
)

ListHeightExample.displayName = 'ListHeightExample'

export const ListMetaExample = () => (
  <CodeExample
    title="Meta"
    demo={<ListMeta />}
    snippet={Snippets.ListMeta} />
)

ListMetaExample.displayName = 'ListMetaExample'

export const ListSecondaryTextExample = () => (
  <CodeExample
    title="SecondaryText"
    demo={<ListSecondaryText />}
    snippet={Snippets.ListSecondaryText} />
)

ListSecondaryTextExample.displayName = 'ListSecondaryTextExample'
