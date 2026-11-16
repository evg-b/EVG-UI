import type { Meta, StoryObj } from '@storybook/react-vite'

import Loader from './Loader'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Loader',
  component: Loader,
  args: {
    size: 48,
    depth: 3,
    color: 'primary',
    'aria-label': 'Загрузка',
    role: 'status'
  },
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 96, step: 8 } },
    depth: { control: { type: 'range', min: 1, max: 8, step: 1 } },
    color: { control: 'text' }
  }
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Индикатор' }
export const Sizes: Story = {
  name: 'Размеры',
  render: (args) => (
    <Styled.Row>
      {[24, 48, 72].map((size) => (
        <Loader {...args} key={size} size={size} />
      ))}
    </Styled.Row>
  )
}
