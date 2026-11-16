import type { Meta, StoryObj } from '@storybook/react-vite'

import SvgIcon from './SvgIcon'

const meta = {
  title: 'Компоненты/SvgIcon',
  component: SvgIcon,
  args: { size: 48, color: 'primary', viewBox: 24, 'aria-label': 'Звезда' },
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 96, step: 8 } },
    color: { control: 'text' }
  },
  render: (args) => (
    <SvgIcon {...args}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01Z" />
    </SvgIcon>
  )
} satisfies Meta<typeof SvgIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Собственный SVG' }
export const Large: Story = {
  name: 'Другой размер и цвет',
  args: { size: 72, color: 'success' }
}
