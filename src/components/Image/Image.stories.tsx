import type { Meta, StoryObj } from '@storybook/react-vite'

import { STORY_IMAGES } from '../../../.storybook/fixtures'

import Image from './Image'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Image',
  component: Image,
  args: { src: STORY_IMAGES[0], alt: 'Горы и озеро' },
  render: (args) => <Styled.ImageFrame as={Image} {...args} />
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Изображение' }
export const Error: Story = {
  name: 'Ошибка загрузки',
  args: {
    src: '/story-assets/missing-image.svg',
    alt: 'Недоступное изображение'
  }
}
