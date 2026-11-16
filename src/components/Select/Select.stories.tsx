import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'

import SelectOption from '../SelectOption/SelectOption'

import type { SelectProps } from './Select.types'
import Select from './Select'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Select',
  component: Select,
  args: {
    value: 'frontend',
    labelText: 'Направление',
    color: 'primary',
    outlined: true,
    onChange: fn()
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['', 'frontend', 'backend', 'design']
    },
    color: { control: 'text' }
  },
  render: function Controlled(args) {
    const [{ value }, updateArgs] = useArgs<SelectProps>()
    return (
      <Styled.Panel>
        <Select
          {...args}
          value={value}
          fullWidth
          onChange={(nextValue) => {
            updateArgs({ value: nextValue })
            args.onChange?.(nextValue)
          }}>
          <SelectOption value="frontend">Frontend</SelectOption>
          <SelectOption value="backend">Backend</SelectOption>
          <SelectOption value="design">Дизайн</SelectOption>
        </Select>
      </Styled.Panel>
    )
  }
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Выбор значения' }
export const EmptyOption: Story = {
  name: 'Пустое значение',
  args: { emptyOption: true, value: '' }
}
export const Disabled: Story = { name: 'Недоступен', args: { disabled: true } }
