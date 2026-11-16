import type { Meta, StoryObj } from '@storybook/react-vite'

import Skeleton from './Skeleton'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Skeleton',
  component: Skeleton,
  args: { width: 240, height: 120, borderRadius: 8, animation: true },
  argTypes: {
    type: {
      control: 'select',
      options: ['', 'text', 'text, h1', 'text, h2', 'avatar']
    }
  }
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Прямоугольник' }
export const Text: Story = { name: 'Текст', args: { type: 'text' } }
export const Avatar: Story = {
  name: 'Аватар',
  args: { type: 'avatar', size: 64 }
}
export const WithoutAnimation: Story = {
  name: 'Без анимации',
  args: { animation: false }
}
export const Card: Story = {
  name: 'Карточка',
  render: (args) => (
    <Styled.Panel>
      <Styled.Stack>
        <Skeleton {...args} width="100%" height={160} />
        <Styled.Row>
          <Skeleton type="avatar" size={40} animation={args.animation} />
          <Skeleton type="text" width={180} animation={args.animation} />
        </Styled.Row>
        <Skeleton type="text" width="100%" animation={args.animation} />
      </Styled.Stack>
    </Styled.Panel>
  )
}
