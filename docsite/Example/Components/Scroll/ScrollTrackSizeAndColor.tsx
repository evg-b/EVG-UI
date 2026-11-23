import { Scroll } from '@evg-b/evg-ui'

import * as Styled from './Scroll.styled'

const ScrollTrackSizeAndColor = () => (
  <Styled.Viewport as={Scroll} autoHide={false} trackSize={20} color="primary">
    {Array.from({ length: 25 }, (_, index) => (
      <Styled.Tile key={index}>{index + 1}</Styled.Tile>
    ))}
  </Styled.Viewport>
)

ScrollTrackSizeAndColor.displayName = 'ScrollTrackSizeAndColor'

export default ScrollTrackSizeAndColor
