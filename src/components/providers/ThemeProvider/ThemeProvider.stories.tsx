import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../../Button/Button'
import TextField from '../../TextField/TextField'
import { createTheme } from '../../../theme/createTheme'
import { generateTokens } from '../../../theme/generateTokens'
import type { ThemeMode } from '../../../theme/theme.types'

import ThemeProvider from './ThemeProvider'

import * as Styled from '../../../../.storybook/StoryLayout.styled'

const meta = {
  title: 'Тема/ThemeProvider',
  component: ThemeProvider,
  args: { theme: createTheme() },
  argTypes: { theme: { control: false }, children: { control: false } },
  render: (args) => (
    <ThemeProvider {...args}>
      <Styled.Panel>
        <Styled.Stack>
          <strong>Тема компонентов</strong>
          <Styled.Hint>
            Цвета берутся из токенов текущего ThemeProvider.
          </Styled.Hint>
          <Button color="primary" variant="contained">
            Основное действие
          </Button>
          <TextField labelText="Имя" color="primary" outlined />
        </Styled.Stack>
      </Styled.Panel>
    </ThemeProvider>
  )
} satisfies Meta<typeof ThemeProvider>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = { name: 'Светлая' }
export const Dark: Story = {
  name: 'Тёмная',
  args: { theme: createTheme({ tokens: generateTokens().dark }) }
}
export const Dynamic: Story = {
  name: 'Переключение темы и цвета',
  render: function DynamicTheme() {
    const [mode, setMode] = useState<ThemeMode>('light')
    const [primaryColor, setPrimaryColor] = useState('#6750a4')
    const theme = createTheme({
      tokens: generateTokens({ primaryColor })[mode]
    })
    return (
      <ThemeProvider theme={theme}>
        <Styled.Panel>
          <Styled.Stack>
            <Styled.Label>
              Основной цвет
              <input
                type="color"
                value={primaryColor}
                onChange={(event) => setPrimaryColor(event.currentTarget.value)}
              />
            </Styled.Label>
            <Button
              variant="outlined"
              onClick={() =>
                setMode((value) => (value === 'light' ? 'dark' : 'light'))
              }>
              {mode === 'light'
                ? 'Включить тёмную тему'
                : 'Включить светлую тему'}
            </Button>
            <TextField
              labelText="Состояние сохраняется при смене темы"
              color="primary"
              outlined
              fullWidth
            />
            <Button color="primary" variant="contained">
              Основное действие
            </Button>
          </Styled.Stack>
        </Styled.Panel>
      </ThemeProvider>
    )
  }
}
