import type { Meta, StoryObj } from '@storybook/react-vite'

import Avatar from '../Avatar/Avatar'

import AvatarGroup from './AvatarGroup'

const AVATAR_IDS = [3, 12, 10, 4, 11, 2]

const meta = {
  title: 'Компоненты/AvatarGroup',
  component: AvatarGroup,
  args: { max: 3, size: 48 },
  argTypes: {
    max: {
      control: { type: 'range', min: 1, max: AVATAR_IDS.length, step: 1 }
    },
    size: { control: { type: 'range', min: 24, max: 80, step: 8 } }
  },
  render: (args) => (
    <AvatarGroup {...args}>
      {AVATAR_IDS.map((id, index) => (
        <Avatar
          key={id}
          src={`./source/Avatar/${id}.jpg`}
          alt={`Участник ${index + 1}`}
          color="primary"
        />
      ))}
    </AvatarGroup>
  )
} satisfies Meta<typeof AvatarGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Limited: Story = { name: 'Ограничение количества' }
export const All: Story = {
  name: 'Вся группа',
  args: { max: AVATAR_IDS.length }
}
