import type { Meta, StoryObj } from '@storybook/react-vite'

import ListItem from '../ListItem/ListItem'
import ListItemText from '../ListItemText/ListItemText'
import ListItemAvatar from '../ListItemAvatar/ListItemAvatar'
import ListItemAction from '../ListItemAction/ListItemAction'
import Avatar from '../Avatar/Avatar'
import Switch from '../Switch/Switch'

import List from './List'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/List',
  component: List,
  args: { color: 'default' },
  argTypes: { color: { control: 'text' } },
  render: (args) => (
    <Styled.Panel>
      <List {...args}>
        {['Входящие', 'Избранное', 'Архив'].map((label) => (
          <ListItem key={label}>
            <ListItemText>{label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Styled.Panel>
  )
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Простой список' }
export const WithActions: Story = {
  name: 'Аватары и действия',
  render: (args) => (
    <Styled.Panel>
      <List {...args}>
        {['Анна', 'Борис', 'Вера'].map((name) => (
          <ListItem key={name} button={false}>
            <ListItemAvatar>
              <Avatar alt={name} color="primary" />
            </ListItemAvatar>
            <ListItemText secondaryText="Участник команды">{name}</ListItemText>
            <ListItemAction>
              <Switch defaultChecked aria-label={`Уведомления для ${name}`} />
            </ListItemAction>
          </ListItem>
        ))}
      </List>
    </Styled.Panel>
  )
}
