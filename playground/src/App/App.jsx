import React, { useState } from 'react'

import { Add, Check, Favorite } from '@evg-b/evg-icons'
import { CodeExample } from '@evg-b/evg-tools'
import { Button, Checkbox, Modal, TextField } from '@evg-b/evg-ui'

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('EVG-UI')
  const [checked, setChecked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="playground">
      <header>
        <p className="eyebrow">Стенд компонентов</p>
        <h1>EVG-UI</h1>
        <p>Базовые примеры для ручной проверки библиотеки.</p>
      </header>

      <section className="panel" aria-labelledby="buttons-title">
        <h2 id="buttons-title">Кнопки</h2>
        <div className="row">
          <Button
            type="button"
            variant="contained"
            color="primary"
            startIcon={<Add />}
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
        </div>
      </section>

      <section className="panel" aria-labelledby="form-title">
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
        <div className="row">
          <Checkbox
            id="demo-checkbox"
            color="primary"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <label htmlFor="demo-checkbox">
            {checked ? 'Выбрано' : 'Не выбрано'}
          </label>
        </div>
      </section>

      <section className="panel" aria-labelledby="icons-title">
        <h2 id="icons-title">Иконки</h2>
        <div className="row" aria-hidden="true">
          <Add color="primary" />
          <Check color="success" />
          <Favorite color="fail" />
        </div>
      </section>

      <section className="panel" aria-labelledby="modal-title">
        <h2 id="modal-title">Модальное окно</h2>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => setModalOpen(true)}>
          Открыть окно
        </Button>
        <Modal
          className="modal-backdrop"
          open={modalOpen}
          onClose={() => setModalOpen(false)}>
          <div
            className="modal-content"
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
          </div>
        </Modal>
      </section>

      <section className="panel" aria-labelledby="tools-title">
        <h2 id="tools-title">Пример кода</h2>
        <p>Нажмите на значок кода, чтобы раскрыть исходник.</p>
        <CodeExample
          title="Кнопка с иконкой"
          demo={
            <Button type="button" variant="contained" startIcon={<Favorite />}>
              Избранное
            </Button>
          }
          snippet={'<Button variant="contained" startIcon={<Favorite />}>\n  Избранное\n</Button>'}
        />
      </section>
    </main>
  )
}

App.displayName = 'App'

export default App
