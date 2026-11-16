import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { STORY_IMAGES } from '../../../.storybook/fixtures'

import Carousel from './Carousel'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Carousel',
  component: Carousel,
  args: {
    imgs: STORY_IMAGES,
    imgStart: 0,
    duration: 300,
    sensitivity: 0.5,
    backgroundColor: 'surface',
    onChangeImg: fn()
  },
  argTypes: {
    imgs: { control: false },
    imgStart: { control: false },
    backgroundColor: { control: 'text' },
    duration: { control: { type: 'range', min: 100, max: 1000, step: 100 } }
  },
  render: function Gallery(args) {
    const [index, setIndex] = useState(args.imgStart ?? 0)
    return (
      <Styled.Stack>
        <Styled.ImageFrame>
          <Carousel
            {...args}
            onChangeImg={(nextIndex) => {
              setIndex(nextIndex)
              args.onChangeImg?.(nextIndex)
            }}
          />
        </Styled.ImageFrame>
        <output>
          Изображение {index + 1} из {args.imgs?.length ?? 0}
        </output>
      </Styled.Stack>
    )
  }
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Перелистывание' }
export const SecondImage: Story = {
  name: 'Начальное изображение',
  args: { imgStart: 1 }
}
