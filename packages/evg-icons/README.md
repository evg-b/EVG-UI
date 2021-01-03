<p align="center">
  <a href="">
    <img width="100%" height="100%" src="https://raw.githubusercontent.com/evg-b/EVG-UI/main/packages/evg-icons/static/icons.gif">
  </a>
</p>

<h1 align="center">evg-icons</h1>

<p align="center">
Используйте все 1.440+ svg иконок от Material Design в своих проектах.
</p>

### Установка
```sh
npm install @evg-b/evg-icons --save или yarn install @evg-b/evg-icons
```

### Usage
```jsx
import React from 'react';
import { Check, Close, Favorite } from '@evg-b/evg-icons';

const HelloWorldIcons = () => {
    return (
        <div>
            <Check />
            <Close color='primary' />
            <Favorite size='large' />
        </div>
    );
}

export default HelloWorldIcons
```

### API

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      classes
      </td>
      <td>
      object
      </td>
      <td>
      </td>
      <td>
      Объект содержит jss стили компонента.
      </td>
    </tr>
    <tr>
      <td>
      className
      </td>
      <td>
      string
      </td>
      <td>
      </td>
      <td>
      Чтобы указать CSS классы, используйте этот атрибут.
      </td>
    </tr>
    <tr>
      <td>
      size
      </td>
      <td>
      | 'small' | 'medium' | 'large' | 'extra' |
      </td>
      <td>
      'medium'
      </td>
      <td>
      Размер компонента.
      </td>
    </tr>
    <tr>
      <td>
      color
      </td>
      <td>
      string
      </td>
      <td>
      'default'
      </td>
      <td>
      Название цвета в разных форматах.
      </td>
    </tr>
    <tr>
      <td>
      viewBox
      </td>
      <td>
      number
      </td>
      <td>
      24
      </td>
      <td>
      Размер viewBox. Применяется к width и height.
      </td>
    </tr>
  </tbody>
</table>