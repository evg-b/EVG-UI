<p align="center">
  <a href="">
    <img width="100%" height="100%" src="./docsite/static/evg-ui.gif">
  </a>
</p>

<h1 align="center">EVG-UI</h1>

<p align="center">React компоненты основанные на идеях Material Design.</p>

<p align="center">
Библиотека вдохновленна интерсными техническими решениями Material Design, Material-UI, VK-UI, yandex-ui, Angular Material, Vue Material, Vuetify, Ant и др.
</p>

### Установка
```sh
npm install @evg-b/evg-ui --save или yarn install @evg-b/evg-ui
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
Подключите шрифт к вашему проекту чтобы все компоненты выглядили так как задумывалось. 

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
```

### Icon

Так же вы можете использовать все 1.440+ svg иконок от Material Design в своих проектах.

```sh
npm install @evg-b/evg-icons --save или yarn install @evg-b/evg-icons
```