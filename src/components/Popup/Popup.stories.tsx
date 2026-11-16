import { useRef } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'

import Button from '../Button/Button'

import type { PopupProps } from './Popup.types'
import Popup from './Popup'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Popup',
  component: Popup,
  args: {
    open: false,
    mode: 'click',
    position: 'bottom',
    animation: 'fade',
    shift: 12,
    onClose: fn()
  },
  argTypes: {
    target: { control: false },
    position: {
      control: 'select',
      options: [
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'right'
      ]
    },
    animation: { control: 'select', options: ['fade', 'docking', 'zoom'] },
    mode: { control: 'inline-radio', options: ['click', 'hover'] }
  },
  render: function AnchoredPopup(args) {
    const target = useRef<HTMLElement>(null)
    const [{ open }, updateArgs] = useArgs<PopupProps>()
    const close = () => {
      updateArgs({ open: false })
      args.onClose?.()
    }
    return (
      <Styled.OverlayArea>
        <Button
          ref={target}
          variant="outlined"
          aria-expanded={open}
          onClick={() => args.mode === 'click' && updateArgs({ open: !open })}
          onMouseEnter={() =>
            args.mode === 'hover' && updateArgs({ open: true })
          }
          onFocus={() => args.mode === 'hover' && updateArgs({ open: true })}
          onBlur={() => args.mode === 'hover' && close()}>
          {args.mode === 'hover' ? 'Наведите курсор' : 'Открыть popup'}
        </Button>
        <Popup {...args} target={target} open={open} onClose={close}>
          <Styled.Panel>
            <Styled.Stack>
              <strong>Всплывающее окно</strong>
              <Styled.Hint>
                Положение, отступ и анимация задаются в Controls.
              </Styled.Hint>
              <Button onClick={close}>Закрыть</Button>
            </Styled.Stack>
          </Styled.Panel>
        </Popup>
      </Styled.OverlayArea>
    )
  }
} satisfies Meta<typeof Popup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'По нажатию' }
export const Hover: Story = { name: 'По наведению', args: { mode: 'hover' } }
export const Zoom: Story = {
  name: 'Анимация zoom',
  args: { animation: 'zoom', position: 'top' }
}
