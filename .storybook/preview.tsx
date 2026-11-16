import type { Preview } from '@storybook/react-vite'

import ThemeProvider from '../src/components/providers/ThemeProvider/ThemeProvider'
import { createTheme } from '../src/theme/createTheme'
import { generateTokens } from '../src/theme/generateTokens'

import * as Styled from './StoryLayout.styled'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
      exclude: ['ref', 'innerRef', 'className', 'as'],
      matchers: { color: /(background|color)$/i }
    },
    backgrounds: { disable: true },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Компоненты', 'Тема', 'Черновики']
      }
    }
  },
  globalTypes: {
    themeMode: {
      description: 'Цветовая тема компонентов',
      toolbar: {
        title: 'Тема',
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Светлая' },
          { value: 'dark', title: 'Тёмная' }
        ]
      }
    },
    primaryColor: {
      description: 'Исходный основной цвет темы',
      toolbar: {
        title: 'Основной цвет',
        dynamicTitle: true,
        items: [
          { value: '#1e88e5', title: 'Синий' },
          { value: '#6750a4', title: 'Фиолетовый' },
          { value: '#2e7d32', title: 'Зелёный' }
        ]
      }
    }
  },
  initialGlobals: { themeMode: 'light', primaryColor: '#1e88e5' },
  decorators: [
    (Story, context) => {
      const mode = context.globals.themeMode === 'dark' ? 'dark' : 'light'
      const primaryColor =
        typeof context.globals.primaryColor === 'string'
          ? context.globals.primaryColor
          : '#1e88e5'
      const theme = createTheme({
        tokens: generateTokens({ primaryColor })[mode]
      })
      return (
        <ThemeProvider theme={theme}>
          <Styled.PageStyles />
          <Styled.Canvas>
            <Story />
          </Styled.Canvas>
        </ThemeProvider>
      )
    }
  ]
}

export default preview
