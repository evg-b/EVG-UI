import { useState } from 'react'

import {
  Button,
  ThemeProvider,
  createTheme,
  generateTokens,
  type ThemeMode
} from '@evg-b/evg-ui'

import * as Styled from './App.styled'

const tokens = generateTokens({ primaryColor: '#673ab7' })
const themes = {
  light: createTheme({ tokens: tokens.light }),
  dark: createTheme({ tokens: tokens.dark })
}

const App = () => {
  const [mode, setMode] = useState<ThemeMode>('light')
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={themes[mode]}>
      <Styled.Card>
        <output>Нажатий — {count}</output>
        <Styled.Actions>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => setCount((value) => value + 1)}>
            Добавить
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            {mode === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}
          </Button>
        </Styled.Actions>
      </Styled.Card>
    </ThemeProvider>
  )
}

App.displayName = 'App'

export default App
