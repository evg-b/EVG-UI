import type { ChangeEvent } from 'react'

import { useState } from 'react'
import { Radio } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const RadioColor = () => {
  const [checkName, setCheckName] = useState('radio1')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckName(e.target.name)
  }

  return (
    <Styled.Row>
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio1'}
        name="radio1"
        color="default"
      />
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio2'}
        name="radio2"
        color="primary"
      />
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio3'}
        name="radio3"
        color="warn"
      />
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio4'}
        name="radio4"
        color="success"
      />
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio5'}
        name="radio5"
        color="fail"
      />
    </Styled.Row>
  )
}

RadioColor.displayName = 'RadioColor'

export default RadioColor
