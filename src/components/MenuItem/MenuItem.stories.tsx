import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import List from '../List/List'

import MenuItem from './MenuItem'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/MenuItem',
  component: MenuItem,
  args: { children: 'Редактировать', onClick: fn() },
  render: (args) => (
    <Styled.Panel>
      <List>
        <MenuItem {...args} />
      </List>
    </Styled.Panel>
  )
} satisfies Meta<typeof MenuItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Пункт меню' }
export const WithDescription: Story = {
  name: 'С описанием',
  args: { secondaryText: 'Изменить название и настройки', meta: '⌘ E' }
}
