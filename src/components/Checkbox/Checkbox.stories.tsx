import { useId } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'

import type { CheckboxProps } from './Checkbox.types'
import Checkbox from './Checkbox'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Checkbox',
  component: Checkbox,
  args: { checked: false, color: 'primary', onChange: fn() },
  argTypes: { color: { control: 'text' } },
  render: function Controlled(args) {
    const id = useId()
    const [{ checked }, updateArgs] = useArgs<CheckboxProps>()
    return (
      <Styled.Row>
        <Checkbox
          {...args}
          id={id}
          checked={checked}
          onChange={(event) => {
            updateArgs({ checked: event.currentTarget.checked })
            args.onChange?.(event)
          }}
        />
        <Styled.Label htmlFor={id}>Получать обновления</Styled.Label>
      </Styled.Row>
    )
  }
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Переключение' }
export const Checked: Story = { name: 'Включён', args: { checked: true } }
export const Disabled: Story = {
  name: 'Недоступен',
  args: { disabled: true, checked: true }
}
export const Indeterminate: Story = {
  name: 'Частичный выбор',
  args: { checked: true, indeterminate: true }
}
