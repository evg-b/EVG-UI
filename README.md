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

Генератор находится в `scripts/DownloadIcons.go` и создаёт иконки в `.tsx`.
Команда `yarn icons:generate` обновляет файлы и реестр;
для неё нужен Go. Главный `src/index.ts` генератор не перезаписывает.

### Документация
Загляните на [сайт](https://evg-b.github.io/EVG-UI/).

`CodeExample` и `PropDoc` находятся в `docsite/src/components` вместе со своими
типами и стилями. Документация импортирует их напрямую; стенд `playground`
использует тот же `CodeExample`. Эти компоненты не входят в библиотеку `evg-ui`.

`yarn propdoc` обновляет JSON с описанием props, страницы API и исходники примеров.
Генератор использует `react-docgen-typescript`, публичные экспорты `src/index.ts`
и типы компонентов из `.types.ts`. Описания props берутся из комментариев `//`
над свойствами, значения по умолчанию — из параметров функций.
`scripts/GenerationSnippets.mts` читает примеры `.tsx` и создаёт
`Examples.tsx` и `snippets.ts`.
Подробности — в [README документации](docsite/README.md#генерация-документации-props).

### Разработка

Нужны Node.js 20.19+ в ветке 20 или 22.12+ и Yarn Classic (1.x).
Репозиторий содержит один пакет `@evg-b/evg-ui`. Его `package.json`, `yarn.lock`
и `vite.config.mts` находятся в корне, исходники библиотеки — в `src`.
`docsite` и `playground` — локальные инструменты с общими зависимостями.
Служебные TypeScript-скрипты запускаются через `tsx`.
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
| `yarn storybook` | Storybook с примерами компонентов на http://127.0.0.1:6006 |
| `yarn build:storybook` | Статическая сборка Storybook в `storybook-static` |
| `yarn docs:dev` | Сборка `evg-ui` и запуск сайта документации |
| `yarn docs:build` | Сборка `evg-ui` и документации в `docsite/build` |
| `yarn docs:preview` | Просмотр собранного сайта документации |
| `yarn docs:deploy` | Сборка `evg-ui` и публикация документации в GitHub Pages |
| `yarn icons:generate` | Обновление SVG-иконок и реестра `Icon` через Go |
| `yarn propdoc` | Генерация описаний props, страниц API и сниппетов |
| `yarn lint` | ESLint для JavaScript, TypeScript и TSX |
| `yarn typecheck` | Отдельная проверка типов через TypeScript 7 |

Стенд и документация разрешают импорт `@evg-b/evg-ui` через локальный
`dist/index.js`. Стенд использует результат библиотечной сборки.
На нём можно проверить счётчик и disabled-кнопку,
ввод текста, чекбокс, иконки, открытие и закрытие окна, раскрытие примера кода.

Конфигурация библиотечной сборки находится в `vite.config.mts`, стенда —
в `playground/vite.config.mts`. Скрипт `scripts/dev.mts` запускает наблюдение
и стенд через API Vite и завершает их при остановке команды.
`evg-ui` выпускается
как ES-модули с сохранением структуры файлов, точкой входа `dist/index.js`
и source maps. Исходники с JSX находятся в `.tsx` и используют automatic runtime
из `react/jsx-runtime`.
Цель компиляции — ES2015, полифиллы не добавляются. Зависимости библиотеки
остаются внешними, включая их вложенные импорты. Используются React и React DOM
19.3.1, стили компонентов — styled-components 6.
В `evg-ui` React и React DOM объявлены как peer dependencies;
общие экземпляры устанавливаются приложением. В корне они также установлены
для разработки.

`docsite` использует Docusaurus 3.10.2 и MDX 3.1.1. Core, classic preset и
Babel-пресет Docusaurus закреплены на одной версии; их зависимости объявлены
в корневом `package.json`. Эта версия Docusaurus поддерживает React 19.
Старые примеры документации ещё используют JSS API `withStyles` и требуют
отдельного переноса на текущий API `evg-ui`.

### Storybook

Для компонентов подключён Storybook 10.6.7 с `@storybook/react-vite` и
`@storybook/addon-docs`. Запуск из корня репозитория:

```sh
yarn storybook
```

Истории находятся рядом с компонентами в `ComponentName.stories.tsx`.
Для каждого из 40 компонентов добавлен файл с примерами; `Tabs`, `Slider`
и `Notify` пока остаются заготовками и вынесены в раздел «Черновики».
В истории `Icon` показаны только `Check`, `Close` и `Favorite`.

Панель Storybook позволяет выбирать светлую или тёмную тему, основной цвет
и props через Controls. Примеры полей, переключателей, меню и окон
управляют состоянием через `useArgs`; события доступны в Actions.
У `ThemeProvider` есть отдельный пример смены режима и исходного цвета.
Изображения для галерей хранятся локально в `.storybook/assets`.

Конфигурация находится в `.storybook/main.ts`, общий декоратор темы —
в `.storybook/preview.tsx`. Отдельный `.storybook/vite.config.mts` подключает
исходники библиотеки напрямую, без предварительной сборки `dist`.
Автодокументация props использует TypeScript-контракты компонентов.

`yarn build:storybook` создаёт статическую версию в `storybook-static`.
Эта папка и диагностические логи Storybook исключены из Git.

### TypeScript

Компилятор проекта — TypeScript 7.0.2, типы React/React DOM — 19.3.0. Компоненты,
содержавшие `propTypes`, перенесены в `.tsx`; их props описаны в соседних
файлах `ComponentName.types.ts`. Типы публичных компонентов экспортируются
из `src/index.ts`.

TypeScript 7 установлен под alias `@typescript/native`; его команда `tsc`
используется в `yarn typecheck`. Для `typescript-eslint` и `react-docgen-typescript`
нужен прежний JavaScript API компилятора, поэтому пакет `typescript` указывает
на `@typescript/typescript6`. У него отдельная команда `tsc6`, которая не заменяет
`tsc` версии 7. Это [официальная схема совместной установки TypeScript 6 и 7](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/).

Исходники библиотеки, иконки, утилиты, примеры документации и стенд перенесены
в `.ts` и `.tsx`; служебные ESM-скрипты и конфигурации Vite/ESLint — в `.mts`.
В `tsconfig.json` убран `allowJs`, в область проверки включены скрипты и документация.
Команда `yarn typecheck` предназначена для отдельной проверки типов;
Vite выполняет транспиляцию при сборке. Генерация деклараций `.d.ts`
в текущую сборку не подключена.

### ESLint

Конфигурация находится в `eslint.config.mts` и использует flat config ESLint 9,
`typescript-eslint`, `eslint-plugin-react` и `eslint-plugin-react-hooks`.
Ветка ESLint 9 выбрана по поддерживаемому диапазону `eslint-plugin-react`.
Загрузку TypeScript-конфигурации ESLint обеспечивает `jiti`.
Старые `.eslintrc.js`, `.eslintignore` и `babel-eslint` больше не используются.

Для `.ts` и `.tsx` включены рекомендуемые правила TypeScript, предупреждения
о неиспользуемых переменных и импортах типов. Правила React учитывают automatic
JSX runtime, а правила Hooks проверяют порядок вызовов и зависимости.
Проверка типов остаётся отдельной командой `yarn typecheck`.

Из ESLint исключены сборки, кеши, сгенерированные SVG-иконки, реестр `Icon`,
список API-страниц и файлы примеров, которые создаёт генератор сниппетов.

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
