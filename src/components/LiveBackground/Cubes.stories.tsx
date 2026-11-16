import { useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../Button/Button'

import Cubes from './Cubes'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Cubes',
  component: Cubes,
  args: {
    color: 'primary',
    autopilot: true,
    size: 40,
    speed: 1,
    fillingX: 12,
    fillingY: 6,
    levelMin: 30,
    levelMax: 100
  },
  argTypes: {
    color: { control: 'text' },
    size: { control: { type: 'range', min: 20, max: 80, step: 4 } },
    speed: { control: { type: 'range', min: 0.1, max: 3, step: 0.1 } }
  },
  render: function AnimatedBackground(args) {
    const ref = useRef<InstanceType<typeof Cubes>>(null)
    const [playing, setPlaying] = useState(true)
    return (
      <Styled.Stack>
        <Styled.CanvasArea>
          <Cubes {...args} ref={ref} />
        </Styled.CanvasArea>
        <Styled.Row>
          <Button
            onClick={() => {
              if (playing) ref.current?.stop()
              else ref.current?.start()
              setPlaying(!playing)
            }}>
            {playing ? 'Пауза' : 'Продолжить'}
          </Button>
          <Button onClick={() => ref.current?.ripple(150, 12)}>Волна</Button>
        </Styled.Row>
      </Styled.Stack>
    )
  }
} satisfies Meta<typeof Cubes>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Живой фон' }
export const Compact: Story = {
  name: 'Мелкие кубы',
  args: { size: 24, fillingX: 18, fillingY: 9 }
}
