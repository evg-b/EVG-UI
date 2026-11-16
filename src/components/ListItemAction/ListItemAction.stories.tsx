import type { Meta, StoryObj } from '@storybook/react-vite'

import List from '../List/List'
import ListItem from '../ListItem/ListItem'
import ListItemText from '../ListItemText/ListItemText'
import Checkbox from '../Checkbox/Checkbox'

import ListItemAction from './ListItemAction'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/ListItemAction',
  component: ListItemAction,
  args: { position: 'end' },
  argTypes: {
    position: { control: 'inline-radio', options: ['start', 'end'] }
  },
  render: (args) => {
    const action = (
      <ListItemAction {...args}>
        <Checkbox defaultChecked aria-label="Включить уведомления" />
      </ListItemAction>
    )
    return (
      <Styled.Panel>
        <List>
          <ListItem button={false}>
            {args.position === 'start' && action}
            <ListItemText>Уведомления</ListItemText>
            {args.position !== 'start' && action}
          </ListItem>
        </List>
      </Styled.Panel>
    )
  }
} satisfies Meta<typeof ListItemAction>

export default meta

type Story = StoryObj<typeof meta>

export const End: Story = { name: 'Справа' }
export const Start: Story = { name: 'Слева', args: { position: 'start' } }
