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
npm install @evg-b/evg-ui --save или yarn add @evg-b/evg-ui
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
остаются внешними, включая их вложенные импорты. React 16 и JSS сохранены.
Старый `docsite` имеет собственную сборку Docusaurus.


### Сообщить о проблеме
Советы и критика важны при развитии любого продукта. Если вы заметили баг, или у вас есть идея по улучшению то расскажите в issue.
