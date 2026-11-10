import type { SvgIconProps } from '../SvgIcon/SvgIcon.types'

import type { ICONS } from './Icon.constants'

export type IconName = keyof typeof ICONS

export type IconProps = Omit<SvgIconProps, 'children'> & {
  // Имя иконки из встроенного набора Material.
  name: IconName
}
