import { useId } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'

import type { SwitchProps } from './Switch.types'
import Switch from './Switch'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Switch',
  component: Switch,
  args: { checked: false, color: 'primary', onChange: fn() },
  argTypes: { color: { control: 'text' } },
  render: function Controlled(args) {
    const id = useId()
    const [{ checked }, updateArgs] = useArgs<SwitchProps>()
    return (
      <Styled.Row>
        <Switch
          {...args}
          id={id}
          checked={checked}
          onChange={(event) => {
            updateArgs({ checked: event.currentTarget.checked })
            args.onChange?.(event)
          }}
        />
        <Styled.Label htmlFor={id}>Автоматическое сохранение</Styled.Label>
      </Styled.Row>
    )
  }
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Переключение' }
export const Checked: Story = { name: 'Включён', args: { checked: true } }
export const Disabled: Story = {
  name: 'Недоступен',
  args: { disabled: true, checked: true }
}
