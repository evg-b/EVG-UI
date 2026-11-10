import type { AppBarProps } from './AppBar.types'

import * as Styled from './AppBar.styled'

// const metaThemeColor = (color) => {
//     let metaColor = document.querySelector('meta[name="theme-color"]')
//     let meta = document.createElement('meta')
//     if (metaColor && metaColor.content !== color) {
//         metaColor.setAttribute('content', color)
//     } else {
//         meta.name = 'theme-color'
//         meta.setAttribute('content', color)
//         document.getElementsByTagName('head')[0].appendChild(meta)
//     }
// }
// Это верхняя панель управления обычно используется для заголовков, навигации и действий связанных с текущим экраном.

const AppBar = ({
  ref,
  className,
  children,
  color = 'default',
  left,
  title,
  right,
  position = 'fixed',
  // absolute || fixed || relative || static || sticky
  titleCenter = false,
  // SystemColorBar = true,
  ...otherProps
}: AppBarProps) => {
  // useEffect(() => {
  //     if (SystemColorBar) {
  //         metaThemeColor(Color(color).Color)
  //     }
  // })
  return (
    <Styled.Root
      ref={ref}
      $position={position}
      {...otherProps}
      className={className}
      $color={color}>
      <Styled.Left $color={color}>{left}</Styled.Left>
      <Styled.Title $titleCenter={Boolean(titleCenter)} $color={color}>
        {title}
      </Styled.Title>
      <Styled.Right $color={color}>{right}</Styled.Right>
    </Styled.Root>
  )
}

AppBar.displayName = 'AppBarEVG'
export default AppBar
