import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import Icon from '../Icon/Icon'

import Button from './Button'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Button',
  component: Button,
  args: {
    children: 'Сохранить',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    onClick: fn()
  },
  argTypes: {
    variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
    size: { control: 'select', options: ['small', 'medium', 'large', 'extra'] },
    color: { control: 'text' },
    startIcon: { control: false },
    endIcon: { control: false }
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Основная' }
export const Variants: Story = {
  name: 'Варианты',
  render: (args) => (
    <Styled.Row>
      {(['text', 'outlined', 'contained'] as const).map((variant) => (
        <Button {...args} key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </Styled.Row>
  )
}
export const Sizes: Story = {
  name: 'Размеры',
  render: (args) => (
    <Styled.Row>
      {(['small', 'medium', 'large', 'extra'] as const).map((size) => (
        <Button {...args} key={size} size={size}>
          {size}
        </Button>
      ))}
    </Styled.Row>
  )
}
export const WithIcons: Story = {
  name: 'С иконками',
  args: {
    startIcon: <Icon name="Check" />,
    endIcon: <Icon name="ArrowForward" />
  }
}
export const Loading: Story = { name: 'Загрузка', args: { loading: true } }
export const Disabled: Story = { name: 'Недоступна', args: { disabled: true } }
export const Rounded: Story = { name: 'Скруглённая', args: { round: true } }
