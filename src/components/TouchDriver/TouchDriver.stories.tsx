import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import type { TouchDriverCoordinates } from './TouchDriver.types'
import TouchDriver from './TouchDriver'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/TouchDriver',
  component: TouchDriver,
  args: { scrollable: false, touchpad: false },
  render: function DragArea(args) {
    const [coordinates, setCoordinates] = useState<
      Partial<TouchDriverCoordinates>
    >({})
    const [moving, setMoving] = useState(false)
    return (
      <Styled.Stack>
        <Styled.Hint>Зажмите область и перемещайте мышь или палец.</Styled.Hint>
        <Styled.TouchArea
          as={TouchDriver}
          {...args}
          aria-label="Область жестов"
          moveStart={(value) => {
            setMoving(true)
            setCoordinates({ ...value })
            args.moveStart?.(value)
          }}
          moveXY={(value) => {
            setCoordinates({ ...value })
            args.moveXY?.(value)
          }}
          moveEnd={(value) => {
            setMoving(false)
            setCoordinates({ ...value })
            args.moveEnd?.(value)
          }}>
          <Styled.TouchMarker
            $x={(coordinates.startX ?? 24) + (coordinates.shiftX ?? 0)}
            $y={(coordinates.startY ?? 24) + (coordinates.shiftY ?? 0)}
            aria-hidden="true"
          />
        </Styled.TouchArea>
        <output>
          {moving ? 'Движение' : 'Ожидание'} · X:{' '}
          {Math.round(coordinates.shiftX ?? 0)} · Y:{' '}
          {Math.round(coordinates.shiftY ?? 0)} · направление:{' '}
          {coordinates.direction || '—'}
        </output>
      </Styled.Stack>
    )
  }
} satisfies Meta<typeof TouchDriver>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Перемещение и координаты' }
