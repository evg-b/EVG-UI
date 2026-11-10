<p align="center">
  <a href="">
    <img height="200" src="https://raw.githubusercontent.com/evg-b/EVG-UI/main/docsite/static/img/logo.svg">
  </a>
</p>

<h1 align="center">EVG-UI</h1>

<p align="center">React компоненты основанные на идеях Material Design.</p>

<p align="center">
Библиотека вдохновлена интересными техническими и дизайнерскими решениями Material Design.
</p>

### Установка
```sh
npm install @evg-b/evg-ui react react-dom styled-components
# или
yarn add @evg-b/evg-ui react react-dom styled-components
```

### Usage
```jsx
import React from 'react';
import { Button } from '@evg-b/evg-ui';

const HelloWorld = () => {
    return (
        <Button variant='contained' color='primary'>
            Hello World
        </Button>
    );
}

export default HelloWorld
```

Чтобы сделать сборку компактнее вы можете импортировать в проект только нужные компоненты.

```jsx
import { Avatar, Badge, Button } from '@evg-b/evg-ui';
```

### Шрифт

Material Design разрабатывался основываясь на шрифте `Roboto`.
Подключите шрифт к вашему проекту чтобы все компоненты выглядели так как задумывалось. 

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
```

### Icon

В `evg-ui` входит 1317 SVG-иконок Material. Компонент `Icon` выбирает иконку
по типизированному свойству `name` и использует размеры, цвета и тему `SvgIcon`.

```tsx
import { Icon } from '@evg-b/evg-ui'

<Icon name="Check" />
<Icon name="Close" color="primary" />
<Icon name="Favorite" size={48} />
```

Имена перечислены в `IconName`. Иконки находятся в
`src/components/Icon/material`, реестр — в `Icon.constants.ts`.
Общий реестр синхронно импортирует весь набор: использование `Icon` включает
его в сборку приложения.

Генератор находится в `scripts/DownloadIcons.go`.
Команда `yarn icons:generate` обновляет файлы и реестр;
для неё нужен Go. Главный `src/index.ts` генератор не перезаписывает.

### Документация
Загляните на [сайт](https://evg-b.github.io/EVG-UI/).

`CodeExample` и `PropDoc` находятся в `docsite/src/components` вместе со своими
типами и стилями. Документация импортирует их напрямую; стенд `playground`
использует тот же `CodeExample`. Эти компоненты не входят в библиотеку `evg-ui`.

### Разработка

Нужны Node.js 20.19+ в ветке 20 или 22.12+ и Yarn Classic (1.x).
Репозиторий содержит один пакет `@evg-b/evg-ui`. Его `package.json`, `yarn.lock`
и `vite.config.mjs` находятся в корне, исходники библиотеки — в `src`.
`docsite` и `playground` — локальные инструменты с общими зависимостями.
Все команды выполняются из корня репозитория:

```sh
yarn install
yarn dev
```

`yarn dev` запускает Vite в режиме наблюдения за библиотекой. После первой
сборки запускается стенд на http://127.0.0.1:5173. Остановка — `Ctrl+C`.
При изменении компонентов Vite пересобирает пакет, а стенд перезагружается;
локальное состояние примеров при этом сбрасывается.

| Команда из корня | Назначение |
| --- | --- |
| `yarn build` | Сборка `evg-ui` в `dist` |
| `yarn watch` | Первичная сборка и наблюдение за исходниками `evg-ui` |
| `yarn dev` | Сборка, наблюдение и локальный стенд |
| `yarn build:playground` | Сборка `evg-ui` и production-версии стенда в `playground/dist` |
| `yarn preview` | Просмотр собранного стенда на http://127.0.0.1:4173 |
| `yarn docs:dev` | Сборка `evg-ui` и запуск сайта документации |
| `yarn docs:build` | Сборка `evg-ui` и документации в `docsite/build` |
| `yarn docs:preview` | Просмотр собранного сайта документации |
| `yarn docs:deploy` | Сборка `evg-ui` и публикация документации в GitHub Pages |
| `yarn icons:generate` | Обновление SVG-иконок и реестра `Icon` через Go |

Стенд и документация разрешают импорт `@evg-b/evg-ui` через локальный
`dist/index.js`. Стенд использует результат библиотечной сборки.
На нём можно проверить счётчик и disabled-кнопку,
ввод текста, чекбокс, иконки, открытие и закрытие окна, раскрытие примера кода.

Конфигурация библиотечной сборки находится в `vite.config.mjs`, стенда —
в `playground/vite.config.mjs`. Скрипт `scripts/dev.mjs` запускает наблюдение
и стенд через API Vite и завершает их при остановке команды.
`evg-ui` выпускается
как ES-модули с сохранением структуры файлов, точкой входа `dist/index.js`
и source maps. JSX, в том числе в старых `.js`, использует automatic runtime
из `react/jsx-runtime`.
Цель компиляции — ES2015, полифиллы не добавляются. Зависимости библиотеки
остаются внешними, включая их вложенные импорты. Используются React и React DOM
19.3.1, стили компонентов — styled-components 6.
В `evg-ui` React и React DOM объявлены как peer dependencies;
общие экземпляры устанавливаются приложением. В корне они также установлены
для разработки.

Старый `docsite` имеет собственную сборку Docusaurus 2 alpha. Объявления React
и React DOM в нём обновлены, но Docusaurus, MDX 1 и ряд его плагинов требуют
старые версии React и выдают предупреждения peer dependencies при установке.
Сам сайт документации требует отдельной миграции.

### TypeScript

В проект добавлен TypeScript 7.0.2 и типы React/React DOM 19.3.0. Компоненты,
содержавшие `propTypes`, перенесены в `.tsx`; их props описаны в соседних
файлах `ComponentName.types.ts`. Типы публичных компонентов экспортируются
из `src/index.ts`.

Общий `tsconfig.json` допускает оставшиеся JavaScript-файлы через `allowJs`.
Команда `yarn typecheck` предназначена для отдельной проверки типов;
Vite выполняет транспиляцию при сборке. Генерация деклараций `.d.ts`
в текущую сборку не подключена.

### React API

Функциональные компоненты принимают `ref` как обычный prop, описанный
в `ComponentName.types.ts`. Значения по умолчанию задаются в параметрах функций.
Классовый `Cubes` сохраняет свой API экземпляра; его начальные настройки
задаются в параметрах функции `getCubesOptions`.

В местах, где компоненту нужен собственный DOM-ref, `useMergedRefs` объединяет
его со ссылкой потребителя и сохраняет cleanup callback refs из React 19.
У `TouchDriver` стандартный `ref` указывает на DOM-элемент; `innerRef` сохранён
как совместимый способ получить тот же узел.

Стенд создаёт корень через `createRoot` из `react-dom/client`. TypeScript,
Vite и конфигурации Babel в корне и `docsite` используют automatic JSX runtime.
`TextField` создаёт уникальный id через `useId`, если потребитель не передал id.
`TextField` и `Switch` поддерживают управляемое значение через `value`/`checked`
и начальное значение через `defaultValue`/`defaultChecked`.

Описание изменений React API — в
[официальном руководстве по переходу на React 19](https://react.dev/blog/2024/04/25/react-19-upgrade-guide).

### Стили и тема

Стили находятся в `ComponentName.styled.ts` и подключаются в компоненте
через `import * as Styled`. Стилизация другого React-компонента видна
в JSX: `<Styled.Action as={Button}>`. Значения только для CSS передаются
через transient props с префиксом `$`.

`styled-components` — peer dependency библиотеки `evg-ui`;
приложение должно использовать общий экземпляр этой зависимости.

Для темы используется цепочка `generateTokens` → `createTheme` → `ThemeProvider`.
`generateTokens` принимает исходные цвета `primaryColor`, `secondaryColor`,
`errorColor`, `warningColor` и `successColor`, возвращая полные наборы `light`
и `dark`. `createTheme` принимает выбранный набор `tokens` и необязательный
`fontFamily`. В компонентах читается текущая тема из provider; именованные
цвета `primary`, `secondary`, `default`, `surface`, `warn`, `success` и `fail`
связаны с её токенами.

```tsx
import React from 'react'
import {
  Button,
  ThemeProvider,
  createTheme,
  generateTokens
} from '@evg-b/evg-ui'

const tokens = generateTokens({ primaryColor: '#1e88e5' })
const darkTheme = createTheme({ tokens: tokens.dark })

export const Example = () => (
  <ThemeProvider theme={darkTheme}>
    <Button color="primary" variant="contained">Сохранить</Button>
  </ThemeProvider>
)
```

В стенде доступны переключение светлой/тёмной темы и выбор основного цвета.
Для изменения одного токена передайте полный набор со своим значением:
`createTheme({ tokens: { ...tokens.light, surface: '#fafafa' } })`.
Без provider компоненты используют стандартную светлую тему.

JSS API `withStyles`, `classes`, `setTheme` и `useChangeTheme` удалён.
Для внешней стилизации остаются `className`, нативные атрибуты и композиция
через `as`; тема переключается передачей нового объекта в `ThemeProvider`.
Утилиты `Color` и `Elevation` сохранены, `getColor(theme, color)` учитывает тему.
Старые JSS-примеры в `docsite` требуют отдельного переноса на новый API.


### Сообщить о проблеме
Советы и критика важны при развитии любого продукта. Если вы заметили баг, или у вас есть идея по улучшению то расскажите в issue.
