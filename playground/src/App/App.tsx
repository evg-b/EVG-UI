import { useState, useMemo } from 'react'

import {
  Icon,
  Button,
  Checkbox,
  Modal,
  TextField,
  ThemeProvider,
  createTheme,
  generateTokens
} from '@evg-b/evg-ui'

import CodeExample from '../../../docsite/src/components/CodeExample/CodeExample'

import * as Styled from './App.styled'

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [primaryColor, setPrimaryColor] = useState('#1e88e5')
  const theme = useMemo(
    () =>
      createTheme({
        tokens: generateTokens({
          primaryColor
        })[mode]
      }),
    [mode, primaryColor]
  )
  const [count, setCount] = useState(0)
  const [name, setName] = useState('EVG-UI')
  const [checked, setChecked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      <Styled.Root>
        <header>
          <Styled.Eyebrow>Стенд компонентов</Styled.Eyebrow>
          <h1>EVG-UI</h1>
          <p>Базовые примеры для ручной проверки библиотеки.</p>
          <Styled.Row>
            <Button
              type="button"
              variant="outlined"
              aria-pressed={mode === 'dark'}
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
              Тёмная тема
            </Button>
            <Styled.ColorControl>
              Основной цвет
              <Styled.ColorInput
                type="color"
                value={primaryColor}
                onChange={(event) => setPrimaryColor(event.target.value)}
              />
            </Styled.ColorControl>
          </Styled.Row>
        </header>

        <Styled.Panel aria-labelledby="buttons-title">
          <h2 id="buttons-title">Кнопки</h2>
          <Styled.Row>
            <Button
              type="button"
              variant="contained"
              color="primary"
              startIcon={<Icon name="Add" />}
              onClick={() => setCount((value) => value + 1)}>
              Нажатий: {count}
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={() => setCount(0)}>
              Сбросить
            </Button>
            <Button type="button" variant="contained" disabled>
              Недоступна
            </Button>
          </Styled.Row>
        </Styled.Panel>

        <Styled.Panel aria-labelledby="form-title">
          <h2 id="form-title">Ввод и выбор</h2>
          <TextField
            id="demo-name"
            labelText="Название"
            helperText="Введите текст и проверьте значение ниже"
            value={name}
            onChange={(event) => setName(event.target.value)}
            outlined
          />
          <p aria-live="polite">Значение: {name || 'пусто'}</p>
          <Styled.Row>
            <Checkbox
              id="demo-checkbox"
              color="primary"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />
            <label htmlFor="demo-checkbox">
              {checked ? 'Выбрано' : 'Не выбрано'}
            </label>
          </Styled.Row>
        </Styled.Panel>

        <Styled.Panel aria-labelledby="icons-title">
          <h2 id="icons-title">Иконки</h2>
          <Styled.Row aria-hidden="true">
            <Icon name="Add" color="primary" />
            <Icon name="Check" color="success" />
            <Icon name="Favorite" color="fail" />
          </Styled.Row>
        </Styled.Panel>

        <Styled.Panel aria-labelledby="modal-title">
          <h2 id="modal-title">Модальное окно</h2>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => setModalOpen(true)}>
            Открыть окно
          </Button>
          <Styled.ModalBackdrop
            as={Modal}
            open={modalOpen}
            onClose={() => setModalOpen(false)}>
            <Styled.ModalContent
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title">
              <h2 id="dialog-title">Пример окна</h2>
              <p>Закройте его кнопкой, клавишей Escape или нажатием на фон.</p>
              <Button
                type="button"
                color="primary"
                autoFocus
                onClick={() => setModalOpen(false)}>
                Закрыть
              </Button>
            </Styled.ModalContent>
          </Styled.ModalBackdrop>
        </Styled.Panel>

        <Styled.Panel aria-labelledby="tools-title">
          <h2 id="tools-title">Пример кода</h2>
          <p>Нажмите на значок кода, чтобы раскрыть исходник.</p>
          <CodeExample
            title="Кнопка с иконкой"
            demo={
              <Button
                type="button"
                variant="contained"
                startIcon={<Icon name="Favorite" />}>
                Избранное
              </Button>
            }
            snippet={
              '<Button variant="contained" startIcon={<Icon name="Favorite" />}>\n  Избранное\n</Button>'
            }
          />
        </Styled.Panel>
      </Styled.Root>
    </ThemeProvider>
  )
}

App.displayName = 'App'
export default App
