import { IconButton, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonIconButton = () => {
  return (
    <Styled.Row>
      <IconButton aria-label="Закрыть">
        <Icon name="Close" />
      </IconButton>
      <IconButton color="primary" aria-label="Отменить">
        <Icon name="Cancel" />
      </IconButton>
      <IconButton color="warn" aria-label="Меню">
        <Icon name="Menu" />
      </IconButton>
      <IconButton color="success" aria-label="Во весь экран">
        <Icon name="Fullscreen" />
      </IconButton>
      <IconButton disabled aria-label="Показать">
        <Icon name="Visibility" />
      </IconButton>
    </Styled.Row>
  )
}

ButtonIconButton.displayName = 'ButtonIconButton'

export default ButtonIconButton
