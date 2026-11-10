import { ICONS } from './Icon.constants'
import type { IconProps } from './Icon.types'

const Icon = ({ name, ...props }: IconProps) => {
  const Glyph = ICONS[name]

  return <Glyph {...props} />
}

Icon.displayName = 'Icon'

export default Icon
