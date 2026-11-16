import type { Meta, StoryObj } from '@storybook/react-vite'

import Avatar from '../Avatar/Avatar'

import AvatarGroup from './AvatarGroup'

const meta = {
  title: 'Компоненты/AvatarGroup',
  component: AvatarGroup,
  args: { max: 3, size: 48 },
  argTypes: {
    max: { control: { type: 'range', min: 1, max: 6, step: 1 } },
    size: { control: { type: 'range', min: 24, max: 80, step: 8 } }
  },
  render: (args) => (
    <AvatarGroup {...args}>
      {['Анна', 'Борис', 'Вера', 'Глеб', 'Даша', 'Евгений'].map((alt) => (
        <Avatar key={alt} alt={alt} color="primary" />
      ))}
    </AvatarGroup>
  )
} satisfies Meta<typeof AvatarGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Limited: Story = { name: 'Ограничение количества' }
export const All: Story = { name: 'Вся группа', args: { max: 6 } }
