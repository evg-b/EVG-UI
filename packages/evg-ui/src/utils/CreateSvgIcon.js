import SvgIcon from '../SvgIcon/SvgIcon'

export default function CreateSvgIcon({ path, name }) {
  const Component = (props) => <SvgIcon {...props}>{path}</SvgIcon>
  Component.displayName = `${name}Icon`
  return Component
}
