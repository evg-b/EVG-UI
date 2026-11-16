import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../Button/Button'
import IconButton from '../IconButton/IconButton'
import Icon from '../Icon/Icon'

import AppBar from './AppBar'

const meta = {
  title: 'Компоненты/AppBar',
  component: AppBar,
  args: { title: 'EVG-UI', position: 'static', color: 'primary' },
  argTypes: {
    color: { control: 'text' },
    left: { control: false },
    right: { control: false }
  }
} satisfies Meta<typeof AppBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Заголовок' }
export const WithActions: Story = {
  name: 'С действиями',
  args: {
    left: (
      <IconButton aria-label="Меню">
        <Icon name="Menu" />
      </IconButton>
    ),
    right: <Button>Войти</Button>
  }
}
export const Centered: Story = {
  name: 'Заголовок по центру',
  args: { titleCenter: true }
}
