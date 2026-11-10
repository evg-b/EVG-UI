# Документация EVG-UI

Сайт использует Docusaurus 2 alpha. Это локальная часть репозитория `evg-ui`:
зависимости, scripts и lock-файл находятся в корне. Все команды ниже нужно
выполнять из корня репозитория.

## Установка и запуск

```sh
yarn install
yarn docs:dev
```

Команда сначала собирает библиотеку в `dist`, затем запускает документацию.
Импорты `@evg-b/evg-ui` направлены в локальный `dist/index.js`.
Для пересборки библиотеки при изменениях запусти `yarn watch` во втором терминале.

`CodeExample` и `PropDoc` находятся в `docsite/src/components`;
тот же `CodeExample` используется в стенде `playground`.

## Сборка и просмотр

```sh
yarn docs:build
yarn docs:preview
```

Результат находится в `docsite/build`. Команда `yarn docs:clear` удаляет кеши
сборки документации.

## Публикация

```sh
GIT_USER=<Your GitHub username> USE_SSH=true yarn docs:deploy
```

Команда собирает библиотеку и публикует сайт в ветку `gh-pages`.
Обновление старого Docusaurus и его плагинов под React 19 остаётся отдельной задачей.
