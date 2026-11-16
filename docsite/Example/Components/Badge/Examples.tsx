import CodeExample from '../../../src/components/CodeExample/CodeExample'
import Snippets from './snippets'
import BadgeBase from './BadgeBase'
import BadgeCircle from './BadgeCircle'
import BadgeColor from './BadgeColor'
import BadgeDot from './BadgeDot'
import BadgeMax from './BadgeMax'
import BadgeRipe from './BadgeRipe'

export const BadgeBaseExample = () => (
  <CodeExample
    title="Base"
    demo={<BadgeBase />}
    snippet={Snippets.BadgeBase} />
)

BadgeBaseExample.displayName = 'BadgeBaseExample'

export const BadgeCircleExample = () => (
  <CodeExample
    title="Circle"
    demo={<BadgeCircle />}
    snippet={Snippets.BadgeCircle} />
)

BadgeCircleExample.displayName = 'BadgeCircleExample'

export const BadgeColorExample = () => (
  <CodeExample
    title="Color"
    demo={<BadgeColor />}
    snippet={Snippets.BadgeColor} />
)

BadgeColorExample.displayName = 'BadgeColorExample'

export const BadgeDotExample = () => (
  <CodeExample
    title="Dot"
    demo={<BadgeDot />}
    snippet={Snippets.BadgeDot} />
)

BadgeDotExample.displayName = 'BadgeDotExample'

export const BadgeMaxExample = () => (
  <CodeExample
    title="Max"
    demo={<BadgeMax />}
    snippet={Snippets.BadgeMax} />
)

BadgeMaxExample.displayName = 'BadgeMaxExample'

export const BadgeRipeExample = () => (
  <CodeExample
    title="Ripe"
    demo={<BadgeRipe />}
    snippet={Snippets.BadgeRipe} />
)

BadgeRipeExample.displayName = 'BadgeRipeExample'
