import type { Meta, StoryObj } from '@storybook/react-vite'

import Slider from './Slider'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Черновики/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          'Slider пока содержит пустой контейнер и не экспортируется из src/index.ts. История показывает текущее состояние заготовки.'
      }
    }
  },
  render: (args) => (
    <Styled.Stack>
      <Styled.Hint>Slider: поведение ещё не реализовано.</Styled.Hint>
      <Styled.Panel as={Slider} {...args} aria-label="Контейнер заготовки" />
    </Styled.Stack>
  )
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Placeholder: Story = { name: 'Заготовка' }
