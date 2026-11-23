import { Scroll } from '@evg-b/evg-ui'

import * as Styled from './Scroll.styled'

const ScrollVerticalAndHorizontal = () => (
  <Styled.WideViewport as={Scroll} autoHide={false} color="primary">
    {Array.from({ length: 25 }, (_, index) => (
      <Styled.WideTile key={index}>{index + 1}</Styled.WideTile>
    ))}
  </Styled.WideViewport>
)

ScrollVerticalAndHorizontal.displayName = 'ScrollVerticalAndHorizontal'

export default ScrollVerticalAndHorizontal
