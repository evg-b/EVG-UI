import { Button, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const PropsColor = () => (
  <Styled.Row>
    <Button color="primary" variant="contained">
      Сохранить
    </Button>
    <Button
      color="success"
      variant="contained"
      startIcon={<Icon name="Check" />}>
      Готово
    </Button>
    <Button color="primary" variant="contained" loading>
      Загрузка
    </Button>
  </Styled.Row>
)

PropsColor.displayName = 'PropsColor'

export default PropsColor
