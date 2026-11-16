import type { Meta, StoryObj } from '@storybook/react-vite'

import { STORY_IMAGES } from '../../../.storybook/fixtures'

import Avatar from './Avatar'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Avatar',
  component: Avatar,
  args: { alt: 'Евгений Бобылев', size: 64, color: 'primary' },
  argTypes: {
    size: { control: { type: 'range', min: 24, max: 128, step: 8 } },
    color: { control: 'text' },
    statusColor: { control: 'text' }
  }
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Initials: Story = { name: 'Инициалы' }
export const WithImage: Story = {
  name: 'Изображение',
  args: { src: STORY_IMAGES[0] }
}
export const Online: Story = {
  name: 'Статус',
  args: { status: true, statusColor: 'success' }
}
export const Sizes: Story = {
  name: 'Размеры',
  render: (args) => (
    <Styled.Row>
      {[32, 48, 64, 96].map((size) => (
        <Avatar {...args} key={size} size={size} />
      ))}
    </Styled.Row>
  )
}
