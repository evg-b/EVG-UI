import type { Meta, StoryObj } from '@storybook/react-vite'

import Notify from './Notify'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Черновики/Notify',
  component: Notify,
  parameters: {
    docs: {
      description: {
        component:
          'Notify пока содержит пустой контейнер и не экспортируется из src/index.ts. История показывает текущее состояние заготовки.'
      }
    }
  },
  render: (args) => (
    <Styled.Stack>
      <Styled.Hint>Notify: поведение ещё не реализовано.</Styled.Hint>
      <Styled.Panel as={Notify} {...args} aria-label="Контейнер заготовки" />
    </Styled.Stack>
  )
} satisfies Meta<typeof Notify>

export default meta

type Story = StoryObj<typeof meta>

export const Placeholder: Story = { name: 'Заготовка' }
