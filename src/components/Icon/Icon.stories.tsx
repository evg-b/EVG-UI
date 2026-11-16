import type { Meta, StoryObj } from '@storybook/react-vite'

import Icon from './Icon'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Icon',
  component: Icon,
  args: { name: 'Check', color: 'primary', size: 32 },
  argTypes: {
    name: { control: false, table: { type: { summary: 'IconName' } } },
    size: { control: { type: 'range', min: 16, max: 64, step: 4 } },
    color: { control: 'text' }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Три примера из встроенного набора. Полный каталог иконок будет добавлен позже.'
      }
    }
  }
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Examples: Story = {
  name: 'Три иконки',
  render: (args) => (
    <Styled.Row>
      {(['Check', 'Close', 'Favorite'] as const).map((name) => (
        <Styled.Stack key={name}>
          <Icon {...args} name={name} aria-label={name} />
          <span>{name}</span>
        </Styled.Stack>
      ))}
    </Styled.Row>
  )
}
