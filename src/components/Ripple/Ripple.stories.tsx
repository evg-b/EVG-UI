import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'

import type { RippleProps } from './Ripple.types'
import Ripple from './Ripple'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Ripple',
  component: Ripple,
  args: {
    color: 'primary',
    contrast: false,
    rippleCenter: false,
    isFocus: false,
    isPressed: false
  },
  argTypes: { color: { control: 'text' } },
  render: function RippleArea(args) {
    const [, updateArgs] = useArgs<RippleProps>()
    return (
      <Styled.RippleTarget
        type="button"
        onFocus={() => updateArgs({ isFocus: true })}
        onBlur={() => updateArgs({ isFocus: false, isPressed: false })}
        onKeyDown={(event) => {
          if (event.key === ' ' || event.key === 'Enter')
            updateArgs({ isPressed: true })
        }}
        onKeyUp={() => updateArgs({ isPressed: false })}>
        Нажмите в любой точке
        <Ripple {...args} aria-hidden="true" />
      </Styled.RippleTarget>
    )
  }
} satisfies Meta<typeof Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'От места нажатия' }
export const Centered: Story = {
  name: 'Из центра',
  args: { rippleCenter: true }
}
export const Active: Story = {
  name: 'Активное состояние',
  args: { isActive: true }
}
