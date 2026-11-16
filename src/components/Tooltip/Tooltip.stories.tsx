import { useId, useRef } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'

import Button from '../Button/Button'

import type { TooltipProps } from './Tooltip.types'
import Tooltip from './Tooltip'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Tooltip',
  component: Tooltip,
  args: {
    open: false,
    children: 'Подсказка к действию',
    position: 'top',
    animation: 'fade',
    specs: 'desktop'
  },
  argTypes: {
    target: { control: false },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    },
    animation: { control: 'select', options: ['fade', 'docking', 'zoom'] },
    specs: { control: 'inline-radio', options: ['desktop', 'mobile'] }
  },
  render: function Hint(args) {
    const target = useRef<HTMLElement>(null)
    const id = useId()
    const [{ open }, updateArgs] = useArgs<TooltipProps>()
    const close = () => {
      updateArgs({ open: false })
      args.onClose?.()
    }
    return (
      <Styled.OverlayArea>
        <Button
          ref={target}
          variant="outlined"
          aria-describedby={open ? id : undefined}
          onMouseEnter={() => updateArgs({ open: true })}
          onMouseLeave={close}
          onFocus={() => updateArgs({ open: true })}
          onBlur={close}>
          Наведите курсор или Tab
        </Button>
        <Tooltip
          {...args}
          id={id}
          role="tooltip"
          target={target}
          open={open}
          onClose={close}
        />
      </Styled.OverlayArea>
    )
  }
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Подсказка' }
export const Bottom: Story = { name: 'Снизу', args: { position: 'bottom' } }
export const Mobile: Story = {
  name: 'Мобильный вариант',
  args: { specs: 'mobile' }
}
