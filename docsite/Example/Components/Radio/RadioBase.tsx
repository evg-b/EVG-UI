import { useId } from 'react'

import { Radio } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const RadioBase = () => {
  const group = useId()

  return (
    <Styled.Row>
      <Radio id={`${group}-day`} name={group} defaultChecked />
      <label htmlFor={`${group}-day`}>День</label>
      <Radio id={`${group}-week`} name={group} />
      <label htmlFor={`${group}-week`}>Неделя</label>
      <Radio id={`${group}-month`} name={group} disabled />
      <label htmlFor={`${group}-month`}>Месяц</label>
    </Styled.Row>
  )
}

RadioBase.displayName = 'RadioBase'

export default RadioBase
