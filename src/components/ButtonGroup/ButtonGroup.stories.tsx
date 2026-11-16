import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../Button/Button'

import ButtonGroup from './ButtonGroup'

const meta = {
  title: 'Компоненты/ButtonGroup',
  component: ButtonGroup,
  args: {
    color: 'primary',
    variant: 'outlined',
    orientation: 'horizontal',
    size: 'medium'
  },
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
    size: { control: 'select', options: ['small', 'medium', 'large', 'extra'] },
    color: { control: 'text' }
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>День</Button>
      <Button>Неделя</Button>
      <Button>Месяц</Button>
    </ButtonGroup>
  )
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Горизонтальная' }
export const Vertical: Story = {
  name: 'Вертикальная',
  args: { orientation: 'vertical' }
}
export const Contained: Story = {
  name: 'Заливка',
  args: { variant: 'contained', round: true }
}
export const Disabled: Story = { name: 'Недоступная', args: { disabled: true } }
