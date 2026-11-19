import type { Meta, StoryObj } from '@storybook/react-vite'

import SvgIcon from './SvgIcon'

const meta = {
  title: 'Компоненты/SvgIcon',
  component: SvgIcon,
  args: { size: 48, color: 'primary', viewBox: 24, 'aria-label': 'Галочка' },
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 96, step: 8 } },
    color: { control: 'text' }
  },
  render: (args) => (
    <SvgIcon {...args}>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
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
