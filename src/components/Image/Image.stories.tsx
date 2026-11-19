import type { Meta, StoryObj } from '@storybook/react-vite'

import Image from './Image'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const IMAGES = [
  { src: './source/Image/1.jpg', alt: 'Неоновое кольцо среди синих листьев' },
  {
    src: './source/Image/2.jpg',
    alt: 'Светящийся треугольник на фоне монстеры'
  },
  { src: './source/Image/3.jpg', alt: 'Белый квадрат среди красных листьев' }
]

const meta = {
  title: 'Компоненты/Image',
  component: Image,
  args: IMAGES[0],
  render: (args) => <Styled.ImageSample as={Image} {...args} />
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Изображение' }
export const Gallery: Story = {
  name: 'Три изображения',
  argTypes: { src: { control: false }, alt: { control: false } },
  render: (args) => (
    <Styled.Row>
      {IMAGES.map((image) => (
        <Styled.ImageSample key={image.src} as={Image} {...args} {...image} />
      ))}
    </Styled.Row>
  )
}
export const Error: Story = {
  name: 'Ошибка загрузки',
  args: {
    src: './source/Image/2broke.jpg',
    alt: 'Недоступное изображение'
  }
}
