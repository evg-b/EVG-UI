import { useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'

import Button from '../Button/Button'
import MenuItem from '../MenuItem/MenuItem'

import type { MenuProps } from './Menu.types'
import Menu from './Menu'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Menu',
  component: Menu,
  args: { open: false, position: 'bottom-left', shift: 8, animation: 'fade' },
  argTypes: { target: { control: false } },
  render: function ActionsMenu(args) {
    const target = useRef<HTMLElement>(null)
    const [{ open }, updateArgs] = useArgs<MenuProps>()
    const [selected, setSelected] = useState('Действие не выбрано')
    const close = () => {
      updateArgs({ open: false })
      args.onClose?.()
    }
    return (
      <Styled.Stack>
        <Styled.OverlayArea>
          <Button
            ref={target}
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => updateArgs({ open: !open })}>
            Действия
          </Button>
          <Menu {...args} target={target} open={open} onClose={close}>
            {['Редактировать', 'Дублировать', 'Архивировать'].map((label) => (
              <MenuItem
                key={label}
                onClick={() => {
                  setSelected(label)
                  close()
                }}>
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Styled.OverlayArea>
        <output>{selected}</output>
      </Styled.Stack>
    )
  }
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Меню действий' }
export const Top: Story = {
  name: 'Над кнопкой',
  args: { position: 'top-left' }
}
