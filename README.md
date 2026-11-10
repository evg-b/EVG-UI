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
npm install @evg-b/evg-ui styled-components
# или
yarn add @evg-b/evg-ui styled-components
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

Так же вы можете использовать все 1.440+ svg иконок от Material Design в своих проектах. [@evg-b/evg-icons](https://github.com/evg-b/EVG-UI/tree/main/packages/evg-icons)

```sh
npm install @evg-b/evg-icons --save или yarn add @evg-b/evg-icons
```

Пример:
```jsx
import { Check, Close, Favorite } from '@evg-b/evg-icons';
```

### Документация
Загляните на [сайт](https://evg-b.github.io/EVG-UI/).

### Разработка

Нужны Node.js 20.19+ в ветке 20 или 22.12+ и Yarn Classic (1.x).
Зависимости устанавливаются из корня монорепозитория:

```sh
yarn install
yarn dev
```

`yarn dev` сначала собирает все три пакета, затем запускает их `watch`
и стенд на http://127.0.0.1:5173. Остановка всех процессов — `Ctrl+C`.
При изменении компонентов Vite пересобирает пакет, а стенд перезагружается;
локальное состояние примеров при этом сбрасывается.

| Команда из корня | Назначение |
| --- | --- |
| `yarn build` | Сборка `evg-ui`, `evg-icons` и `evg-tools` в их папки `dist` |
| `yarn watch` | Первичная сборка и наблюдение за исходниками всех трёх пакетов |
| `yarn dev` | Сборка, наблюдение и локальный стенд |
| `yarn build:playground` | Сборка пакетов и production-версии стенда в `playground/dist` |
| `yarn preview` | Просмотр собранного стенда на http://127.0.0.1:4173 |

Один пакет можно собрать командой `yarn workspace @evg-b/evg-ui build`
или запустить с наблюдением через `yarn workspace @evg-b/evg-ui watch`.
Те же команды доступны для `@evg-b/evg-icons` и `@evg-b/evg-tools`.

Стенд в `playground` импортирует пакеты по именам из их `dist`, чтобы проверять
результат библиотечной сборки. На нём можно проверить счётчик и disabled-кнопку,
ввод текста, чекбокс, иконки, открытие и закрытие окна, раскрытие примера кода.

Общая конфигурация Vite находится в `vite.library.mjs`. Библиотеки выпускаются
как ES-модули с сохранением структуры файлов, точкой входа `dist/index.js`
и source maps. JSX в старых `.js` преобразуется в `React.createElement`.
Цель компиляции — ES2015, полифиллы не добавляются. Зависимости пакетов
остаются внешними, включая их вложенные импорты. React 16 сохранён,
стили компонентов используют styled-components 6.
Старый `docsite` имеет собственную сборку Docusaurus.

### TypeScript

В проект добавлен TypeScript 7.0.2 и типы для React 16. Компоненты,
содержавшие `propTypes`, перенесены в `.tsx`; их props описаны в соседних
файлах `ComponentName.types.ts`. Типы публичных компонентов экспортируются
из `src/index.ts` соответствующего пакета.

Общий `tsconfig.json` допускает оставшиеся JavaScript-файлы через `allowJs`.
Команда `yarn typecheck` предназначена для отдельной проверки типов;
Vite выполняет транспиляцию при сборке. Генерация деклараций `.d.ts`
в текущую сборку не подключена.

### Стили и тема

Стили находятся в `ComponentName.styled.ts` и подключаются в компоненте
через `import * as Styled`. Стилизация другого React-компонента видна
в JSX: `<Styled.Action as={Button}>`. Значения только для CSS передаются
через transient props с префиксом `$`.

`styled-components` — peer dependency библиотек `evg-ui` и `evg-tools`;
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
