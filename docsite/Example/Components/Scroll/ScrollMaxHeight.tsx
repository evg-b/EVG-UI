import { useState } from 'react'

import { Button, Scroll } from '@evg-b/evg-ui'

import * as Styled from './Scroll.styled'

const ScrollMaxHeight = () => {
  const [count, setCount] = useState(2)

  return (
    <div>
      <Styled.Controls>
        <Button type="button" color="primary" onClick={() => setCount((value) => value + 1)}>
          Добавить
        </Button>
        <Button
          type="button"
          color="primary"
          disabled={count === 0}
          onClick={() => setCount((value) => Math.max(0, value - 1))}>
          Убрать
        </Button>
      </Styled.Controls>
      <Styled.GrowingViewport as={Scroll} autoHide={false}>
        {Array.from({ length: count }, (_, index) => (
          <Styled.Tile key={index}>{index + 1}</Styled.Tile>
        ))}
      </Styled.GrowingViewport>
    </div>
  )
}

ScrollMaxHeight.displayName = 'ScrollMaxHeight'

export default ScrollMaxHeight
