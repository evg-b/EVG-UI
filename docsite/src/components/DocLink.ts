import type { ReactElement } from 'react'

import Link, { type Props } from '@docusaurus/Link'

// Docusaurus объявляет результат Link через типы React 17. Сама ссылка возвращает React-элемент.
const DocLink = Link as (props: Props) => ReactElement

export default DocLink
