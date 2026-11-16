import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import ButtonBase from './ButtonBase'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/ButtonBase',
  component: ButtonBase,
  args: {
    children: 'Нажмите',
    color: 'primary',
    onClick: fn(),
    type: 'button'
  },
  argTypes: { component: { control: false }, color: { control: 'text' } },
  render: function Counter(args) {
    const [count, setCount] = useState(0)
    return (
      <Styled.Row>
        <ButtonBase
          {...args}
          onClick={(event) => {
            setCount((value) => value + 1)
            args.onClick?.(event)
          }}
        />
        <output>Нажатий: {count}</output>
      </Styled.Row>
    )
  }
} satisfies Meta<typeof ButtonBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Нажатие и ripple' }
export const WithoutRipple: Story = {
  name: 'Без ripple',
  args: { rippleOff: true }
}
export const Disabled: Story = { name: 'Недоступна', args: { disabled: true } }
