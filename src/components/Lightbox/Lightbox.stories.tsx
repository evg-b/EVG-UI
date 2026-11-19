import type { Meta, StoryObj } from '@storybook/react-vite'

import { CAROUSEL_IMAGES } from '../../../.storybook/fixtures'

import Lightbox from './Lightbox'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/Lightbox',
  component: Lightbox,
  args: { imgs: CAROUSEL_IMAGES.slice(0, 9), duration: 300 },
  argTypes: {
    imgs: { control: false },
    duration: { control: { type: 'range', min: 100, max: 1000, step: 100 } }
  },
  render: (args) => (
    <Styled.Stack>
      <Styled.Hint>
        Нажмите на изображение, чтобы открыть его. Используйте стрелки или жесты
        для перелистывания.
      </Styled.Hint>
      <Styled.Gallery as={Lightbox} {...args} />
    </Styled.Stack>
  )
} satisfies Meta<typeof Lightbox>

export default meta

type Story = StoryObj<typeof meta>

export const Gallery: Story = { name: 'Галерея' }
export const SingleImage: Story = {
  name: 'Одно изображение',
  args: { imgs: [CAROUSEL_IMAGES[0]] }
}
