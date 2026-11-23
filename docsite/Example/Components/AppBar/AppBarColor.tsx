import type { ChangeEvent } from 'react'

import { useState } from 'react'
import { AppBar, Radio } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const AppBarColor = () => {
  const [color, setColor] = useState('default')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.name)
  }

  return (
    <Styled.AppBarColumn>
      <AppBar title="EVG-UI Color" color={color} position="static" />
      <div>
        <Radio
          onChange={handleChange}
          checked={color === 'default'}
          name="default"
          color="default"
        />
        <Radio
          onChange={handleChange}
          checked={color === 'red700'}
          name="red700"
          color="red700"
        />
        <Radio
          onChange={handleChange}
          checked={color === 'primary'}
          name="primary"
          color="primary"
        />
      </div>
    </Styled.AppBarColumn>
  )
}

AppBarColor.displayName = 'AppBarColor'

export default AppBarColor
