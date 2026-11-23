import { Scroll } from '@evg-b/evg-ui'

import * as Styled from './Scroll.styled'

const ScrollAutoHide = () => (
  <Styled.Viewport as={Scroll} autoHide>
    {Array.from({ length: 25 }, (_, index) => (
      <Styled.Tile key={index}>{index + 1}</Styled.Tile>
    ))}
  </Styled.Viewport>
)

ScrollAutoHide.displayName = 'ScrollAutoHide'

export default ScrollAutoHide
