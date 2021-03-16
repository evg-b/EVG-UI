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


### Сообщить о проблеме
Советы и критика важны при развитии любого продукта. Если вы заметили баг, или у вас есть идея по улучшению то расскажите в issue.
