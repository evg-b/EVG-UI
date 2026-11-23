import { useState } from 'react'

import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  ThemeProvider,
  colors,
  createTheme,
  generateTokens,
  useTheme,
  type ThemeMode
} from '@evg-b/evg-ui'

import * as Styled from './ThemeChange.styled'

const contacts = [
  { name: 'Albus Dumbledore', house: 'Gryffindor', count: 10 },
  { name: 'Hermione Granger', house: 'Gryffindor', count: 1 },
  { name: 'Ronald Weasley', house: 'Gryffindor', count: 1 },
  { name: 'Rubeus Hagrid', house: 'Gryffindor', count: 0 },
  { name: 'Draco Lucius Malfoy', house: 'Slytherin', count: 0 },
  { name: 'Minerva McGonagall', house: 'Gryffindor', count: 0 },
  { name: 'Harry Potter', house: 'Gryffindor', count: 110 },
  { name: 'Luna Lovegood', house: 'Ravenclaw', count: 0 },
  { name: 'Voldemort', house: 'Slytherin', count: 100 }
]

const Contacts = () => {
  const [query, setQuery] = useState('')
  const visible = contacts.filter(({ name }) =>
    name.toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <>
      <TextField
        labelText="Найти в списке"
        color="primary"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
      />
      {visible.length > 0 ? (
        <Styled.Contacts as={List} autoHide={false}>
          {visible.map(({ name, house, count }) => (
            <ListItem key={name} button={false}>
              <ListItemAvatar>
                <Avatar alt={name} color="primary" />
              </ListItemAvatar>
              <ListItemText secondaryText={house}>{name}</ListItemText>
              <Badge color="primary" ripe count={count} />
            </ListItem>
          ))}
        </Styled.Contacts>
      ) : (
        <span>Совпадений нет</span>
      )}
    </>
  )
}

const ThemeChange = () => {
  const siteTheme = useTheme()
  const [selectedMode, setMode] = useState<ThemeMode>()
  const [primaryColor, setPrimaryColor] = useState<string>(colors.purple[700])
  const mode = selectedMode ?? siteTheme.mode
  const tokens = generateTokens({ primaryColor })
  const theme = createTheme({ tokens: tokens[mode] })

  return (
    <ThemeProvider theme={theme}>
      <Styled.Preview aria-label="Пример динамической темы">
        <Styled.Controls>
          <ButtonGroup color="primary" aria-label="Режим примера" role="group">
            <Button
              variant={mode === 'light' ? 'contained' : 'outlined'}
              aria-pressed={mode === 'light'}
              onClick={() => setMode('light')}>
              Светлая
            </Button>
            <Button
              variant={mode === 'dark' ? 'contained' : 'outlined'}
              aria-pressed={mode === 'dark'}
              onClick={() => setMode('dark')}>
              Тёмная
            </Button>
          </ButtonGroup>
          <label>
            Исходный цвет
            <input
              type="color"
              value={primaryColor}
              onChange={(event) => setPrimaryColor(event.currentTarget.value)}
            />
          </label>
        </Styled.Controls>
        <span>
          Текущий токен <code>primary</code> — {theme.primary}
        </span>
        <Contacts />
      </Styled.Preview>
    </ThemeProvider>
  )
}

Contacts.displayName = 'Contacts'
ThemeChange.displayName = 'ThemeChange'

export default ThemeChange
