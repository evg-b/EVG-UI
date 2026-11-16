import type { Meta, StoryObj } from '@storybook/react-vite'

import List from '../List/List'
import ListItemText from '../ListItemText/ListItemText'

import ListItem from './ListItem'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/ListItem',
  component: ListItem,
  args: { children: 'Входящие', color: 'primary', active: false, button: true },
  argTypes: { color: { control: 'text' } },
  render: (args) => (
    <Styled.Panel>
      <List>
        <ListItem {...args}>
          <ListItemText>{args.children}</ListItemText>
        </ListItem>
      </List>
    </Styled.Panel>
  )
} satisfies Meta<typeof ListItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Пункт списка' }
export const Active: Story = { name: 'Активный', args: { active: true } }
export const Plain: Story = {
  name: 'Без поведения кнопки',
  args: { button: false }
}
