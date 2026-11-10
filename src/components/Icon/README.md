# Icon

1317 SVG-иконок Material внутри `evg-ui`.

```tsx
import { Icon, type IconName } from '@evg-b/evg-ui'

const name: IconName = 'Favorite'

<Icon name={name} color="primary" size="large" />
```

`name` — обязательное имя из `IconName`. Остальные свойства наследуются от
`SvgIcon`, кроме `children`: `size`, `color`, `viewBox`, `className`, SVG/ARIA
атрибуты и `ref` на SVG-элемент. Цвета читаются из текущей темы.

Каждая иконка находится в `material`, общий реестр — в `Icon.constants.ts`.
`Icon` выбирает компонент из синхронного реестра, поэтому при использовании
`Icon` в сборку попадает весь набор.

Из корня репозитория иконки можно обновить командой:

```sh
yarn icons:generate
```

Команда требует Go и загружает иконки из Google Fonts. Генератор находится
в `scripts/DownloadIcons.go` и обновляет `material` и реестр,
сохраняя общий `src/index.ts` библиотеки.

![Иконки Material](../../../static/icons.gif)
