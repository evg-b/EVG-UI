import type { Meta, StoryObj } from '@storybook/react-vite'

import Icon from '../Icon/Icon'

import Badge from './Badge'

const meta = {
  title: 'Компоненты/Badge',
  component: Badge,
  args: { count: 8, max: 99, color: 'fail' },
  argTypes: {
    color: { control: 'text' },
    count: { control: { type: 'number', min: 0 } }
  },
  render: (args) => (
    <Badge {...args}>
      <Icon name="Notifications" size={32} aria-label="Уведомления" />
    </Badge>
  )
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Счётчик' }
export const Overflow: Story = {
  name: 'Больше максимума',
  args: { count: 123 }
}
export const Dot: Story = { name: 'Точка', args: { dot: true, count: 1 } }
export const Standalone: Story = {
  name: 'Отдельный значок',
  args: { ripe: true }
}
