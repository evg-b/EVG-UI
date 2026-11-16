import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'

import Icon from '../Icon/Icon'

import type { TextFieldProps } from './TextField.types'
import TextField from './TextField'

import * as Styled from '../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Компоненты/TextField',
  component: TextField,
  args: {
    value: '',
    labelText: 'Имя',
    placeholder: 'Введите имя',
    helperText: 'Как к вам обращаться?',
    color: 'primary',
    onChange: fn()
  },
  argTypes: {
    color: { control: 'text' },
    leadingIcon: { control: false },
    trailingIcon: { control: false }
  },
  render: function Controlled(args) {
    const [{ value }, updateArgs] = useArgs<TextFieldProps>()
    return (
      <Styled.Panel>
        <TextField
          {...args}
          value={value}
          fullWidth
          onChange={(event) => {
            updateArgs({ value: event.currentTarget.value })
            args.onChange?.(event)
          }}
        />
      </Styled.Panel>
    )
  }
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Ввод текста' }
export const Outlined: Story = { name: 'С рамкой', args: { outlined: true } }
export const Multiline: Story = {
  name: 'Многострочное',
  args: { multiline: true, rows: 4, labelText: 'Комментарий', maxCount: 200 }
}
export const Error: Story = {
  name: 'Ошибка',
  args: {
    value: 'Неверное значение',
    error: true,
    helperText: 'Проверьте введённый текст'
  }
}
export const WithIcon: Story = {
  name: 'С иконкой',
  args: { leadingIcon: <Icon name="Search" />, labelText: 'Поиск' }
}
export const Disabled: Story = {
  name: 'Недоступно',
  args: { disabled: true, value: 'Только просмотр' }
}
