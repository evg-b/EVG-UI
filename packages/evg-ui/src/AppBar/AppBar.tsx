import React, { forwardRef } from 'react'
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
const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
  function AppBar(props, ref) {
    const {
      className,
      children,
      color,
      left,
      title,
      right,
      position,
      // absolute || fixed || relative || static || sticky
      titleCenter,
      // SystemColorBar = true,
      ...otherProps
    } = props // useEffect(() => {
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
        $color={props.color}>
        <Styled.Left $color={props.color}>{left}</Styled.Left>
        <Styled.Title $titleCenter={Boolean(titleCenter)} $color={props.color}>
          {title}
        </Styled.Title>
        <Styled.Right $color={props.color}>{right}</Styled.Right>
      </Styled.Root>
    )
  }
)
AppBar.defaultProps = {
  color: 'default',
  position: 'fixed',
  titleCenter: false // SystemColorBar: true,
}
AppBar.displayName = 'AppBarEVG'
export default AppBar
