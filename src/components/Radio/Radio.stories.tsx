import { useId } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'

import type { RadioProps } from './Radio.types'
import Radio from './Radio'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Radio',
  component: Radio,
  args: { value: 'email', color: 'primary', onChange: fn() },
  argTypes: {
    value: { control: 'inline-radio', options: ['email', 'push', 'sms'] },
    color: { control: 'text' }
  },
  render: function RadioGroup(args) {
    const group = useId()
    const [{ value }, updateArgs] = useArgs<RadioProps>()
    return (
      <Styled.Stack role="radiogroup" aria-label="Канал уведомлений">
        {['email', 'push', 'sms'].map((option) => (
          <Styled.Row key={option}>
            <Radio
              {...args}
              id={`${group}-${option}`}
              name={group}
              value={option}
              checked={value === option}
              onChange={(event) => {
                updateArgs({ value: event.currentTarget.value })
                args.onChange?.(event)
              }}
            />
            <Styled.Label htmlFor={`${group}-${option}`}>
              {option.toUpperCase()}
            </Styled.Label>
          </Styled.Row>
        ))}
      </Styled.Stack>
    )
  }
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Выбор одного варианта' }
export const Disabled: Story = {
  name: 'Недоступная группа',
  args: { disabled: true }
}
