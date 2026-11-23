import { Select, SelectOption } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const SelectEmptyOption = () => {
  return (
    <Styled.Row>
      <Select labelText="Select" emptyOption>
        <SelectOption value={10}>Item - 1</SelectOption>
        <SelectOption value={20}>Item - 2</SelectOption>
        <SelectOption value={30}>Item - 3</SelectOption>
      </Select>
    </Styled.Row>
  )
}

SelectEmptyOption.displayName = 'SelectEmptyOption'

export default SelectEmptyOption
