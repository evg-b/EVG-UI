import { Scroll } from '@evg-b/evg-ui'

import * as Styled from './Scroll.styled'

const ScrollBase = () => (
  <Styled.Viewport as={Scroll} autoHide={false}>
    {Array.from({ length: 5 }, (_, index) => (
      <Styled.Tile key={index}>{index + 1}</Styled.Tile>
    ))}
  </Styled.Viewport>
)

ScrollBase.displayName = 'ScrollBase'

export default ScrollBase
