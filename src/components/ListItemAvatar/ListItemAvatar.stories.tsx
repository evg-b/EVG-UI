import type { Meta, StoryObj } from '@storybook/react-vite'

import { LIST_USERS } from '../../../.storybook/fixtures'
import List from '../List/List'
import ListItem from '../ListItem/ListItem'
import ListItemText from '../ListItemText/ListItemText'
import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

import ListItemAvatar from './ListItemAvatar'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const [user] = LIST_USERS

const meta = {
  title: 'Компоненты/ListItemAvatar',
  component: ListItemAvatar,
  args: {
    children: <Avatar src={user.avatar} alt={user.name} color="primary" />
  },
  argTypes: { children: { control: false } },
  render: (args) => (
    <Styled.Panel>
      <List>
        <ListItem button={false}>
          <ListItemAvatar {...args} />
          <ListItemText secondaryText="Участник команды">
            {user.name}
          </ListItemText>
        </ListItem>
      </List>
    </Styled.Panel>
  )
} satisfies Meta<typeof ListItemAvatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'С аватаром' }
export const WithIcon: Story = {
  name: 'С иконкой',
  args: { children: <Icon name="Folder" color="primary" /> }
}
