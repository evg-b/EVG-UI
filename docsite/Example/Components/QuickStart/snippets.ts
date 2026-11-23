const sources = {
  "App.tsx": "import { useState } from 'react'\n\nimport {\n  Button,\n  ThemeProvider,\n  createTheme,\n  generateTokens,\n  type ThemeMode\n} from '@evg-b/evg-ui'\n\nimport * as Styled from './App.styled'\n\nconst tokens = generateTokens({ primaryColor: '#673ab7' })\nconst themes = {\n  light: createTheme({ tokens: tokens.light }),\n  dark: createTheme({ tokens: tokens.dark })\n}\n\nconst App = () => {\n  const [mode, setMode] = useState<ThemeMode>('light')\n  const [count, setCount] = useState(0)\n\n  return (\n    <ThemeProvider theme={themes[mode]}>\n      <Styled.Card>\n        <output>Нажатий — {count}</output>\n        <Styled.Actions>\n          <Button\n            type=\"button\"\n            variant=\"contained\"\n            color=\"primary\"\n            onClick={() => setCount((value) => value + 1)}>\n            Добавить\n          </Button>\n          <Button\n            type=\"button\"\n            variant=\"outlined\"\n            color=\"secondary\"\n            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>\n            {mode === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}\n          </Button>\n        </Styled.Actions>\n      </Styled.Card>\n    </ThemeProvider>\n  )\n}\n\nApp.displayName = 'App'\n\nexport default App\n",
  "App.styled.ts": "import styled from 'styled-components'\n\nexport const Card = styled.section`\n  display: grid;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid ${({ theme }) => theme.outline};\n  border-radius: 8px;\n  background-color: ${({ theme }) => theme.surface};\n  color: ${({ theme }) => theme.onSurface};\n  font-family: ${({ theme }) => theme.fontFamily};\n`\n\nexport const Actions = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n`\n"
}

const snippets = {
  App: {
    "App.tsx": sources["App.tsx"],
    "App.styled.ts": sources["App.styled.ts"]
  }
}

export default snippets
