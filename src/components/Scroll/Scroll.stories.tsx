import type { Meta, StoryObj } from '@storybook/react-vite'

import Scroll from './Scroll'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Scroll',
  component: Scroll,
  args: {
    autoHide: false,
    vertical: true,
    horizontal: true,
    trackSize: 8,
    color: 'primary',
    style: { width: 360, maxWidth: '100%', height: 240 }
  },
  argTypes: {
    color: { control: 'text' },
    trackSize: { control: { type: 'range', min: 2, max: 16, step: 2 } }
  },
  render: (args) => (
    <Scroll {...args}>
      <Styled.ScrollContent>
        {Array.from({ length: 24 }, (_, index) => (
          <Styled.Tile key={index}>Элемент {index + 1}</Styled.Tile>
        ))}
      </Styled.ScrollContent>
    </Scroll>
  )
} satisfies Meta<typeof Scroll>

export default meta

type Story = StoryObj<typeof meta>

export const BothDirections: Story = { name: 'Два направления' }
export const AutoHide: Story = {
  name: 'Скрывающиеся дорожки',
  args: { autoHide: true }
}
export const Vertical: Story = {
  name: 'Вертикальная дорожка',
  args: { horizontal: false }
}
