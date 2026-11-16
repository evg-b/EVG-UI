import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import Icon from '../Icon/Icon'

import IconButton from './IconButton'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/IconButton',
  component: IconButton,
  args: {
    color: 'primary',
    size: 'medium',
    'aria-label': 'Добавить в избранное',
    onClick: fn()
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'extra'] },
    color: { control: 'text' }
  },
  render: function Favorite(args) {
    const [selected, setSelected] = useState(false)
    return (
      <Styled.Row>
        <IconButton
          {...args}
          aria-pressed={selected}
          onClick={(event) => {
            setSelected((value) => !value)
            args.onClick?.(event)
          }}>
          <Icon name={selected ? 'Favorite' : 'FavoriteBorder'} />
        </IconButton>
        <span>{selected ? 'В избранном' : 'Добавить в избранное'}</span>
      </Styled.Row>
    )
  }
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Переключение избранного' }
export const Disabled: Story = { name: 'Недоступна', args: { disabled: true } }
