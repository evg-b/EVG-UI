import type { Meta, StoryObj } from '@storybook/react-vite'

import List from '../List/List'
import ListItem from '../ListItem/ListItem'

import ListItemText from './ListItemText'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/ListItemText',
  component: ListItemText,
  args: {
    children: 'Новая версия UI-kit',
    secondaryText: 'Компоненты готовы к обсуждению'
  },
  render: (args) => (
    <Styled.Panel>
      <List>
        <ListItem button={false}>
          <ListItemText {...args} />
        </ListItem>
      </List>
    </Styled.Panel>
  )
} satisfies Meta<typeof ListItemText>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Две строки' }
export const SingleLine: Story = {
  name: 'Одна строка',
  args: { secondaryText: undefined }
}
export const WithMeta: Story = {
  name: 'Дополнительная информация',
  args: { meta: '12:30', secondaryMeta: 'Сегодня' }
}
