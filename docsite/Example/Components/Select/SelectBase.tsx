import { Select, SelectOption } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SelectBase = () => {
  return (
    <Styled.Row>
      <Select labelText="Select">
        <SelectOption value={10}>Item - 1</SelectOption>
        <SelectOption value={20}>Item - 2</SelectOption>
        <SelectOption value={30}>Item - 3</SelectOption>
      </Select>
      <Select labelText="Select" value={20}>
        <SelectOption value={10}>Item - 1</SelectOption>
        <SelectOption value={20}>Item - 2</SelectOption>
        <SelectOption value={30}>Item - 3</SelectOption>
      </Select>
      <Select disabled labelText="Select">
        <SelectOption value={10}>Item - 1</SelectOption>
        <SelectOption value={20}>Item - 2</SelectOption>
        <SelectOption value={30}>Item - 3</SelectOption>
      </Select>
    </Styled.Row>
  )
}

SelectBase.displayName = 'SelectBase'

export default SelectBase
