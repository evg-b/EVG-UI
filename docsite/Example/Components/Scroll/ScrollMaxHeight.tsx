import type { CSSProperties } from 'react'

import { useState } from 'react'
import { Scroll, Button } from '@evg-b/evg-ui'

const styles: CSSProperties = {
  width: '100px',
  height: '100px',
  margin: '10px',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,.8)'
}

const ScrollBase = () => {
  const [count, setCount] = useState(2)
  const blockScroll = (key: number) => (
    <div key={key} style={styles}>
      {key}
    </div>
  )
  const handleClick = (mod: boolean) => {
    mod ? setCount(count + 1) : setCount(count - 1 < 0 ? 0 : count - 1)
  }
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <Button color="primary" onClick={() => handleClick(true)}>
          +
        </Button>
        <Button color="primary" onClick={() => handleClick(false)}>
          -
        </Button>
      </div>
      <Scroll
        autoHide={false}
        style={{
          width: 200,
          maxHeight: 400,
          backgroundColor: 'rgba(0,0,0,.1)'
        }}>
        {Array.from(new Array(count)).map((n, i) => blockScroll(i + 1))}
      </Scroll>
    </div>
  )
}

ScrollBase.displayName = 'ScrollBase'

export default ScrollBase
