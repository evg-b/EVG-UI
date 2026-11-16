import type { Meta, StoryObj } from '@storybook/react-vite'

import Tabs from './Tabs'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Черновики/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Tabs пока содержит пустой контейнер и не экспортируется из src/index.ts. История показывает текущее состояние заготовки.'
      }
    }
  },
  render: (args) => (
    <Styled.Stack>
      <Styled.Hint>Tabs: поведение ещё не реализовано.</Styled.Hint>
      <Styled.Panel as={Tabs} {...args} aria-label="Контейнер заготовки" />
    </Styled.Stack>
  )
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Placeholder: Story = { name: 'Заготовка' }
