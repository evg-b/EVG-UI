import SvgIcon from '../components/SvgIcon/SvgIcon'
import type { SvgIconProps } from '../components/SvgIcon/SvgIcon.types'

import type { CreateSvgIconOptions } from './CreateSvgIcon.types'

export default function CreateSvgIcon({ path, name }: CreateSvgIconOptions) {
  const Component = (props: SvgIconProps) => (
    <SvgIcon {...props}>{path}</SvgIcon>
  )
  Component.displayName = `${name}Icon`
  return Component
}
