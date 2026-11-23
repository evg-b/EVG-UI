import { Button } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonColor = () => {
  return (
    <Styled.Row>
      <Button>text</Button>
      <Button color="primary">primary</Button>
      <Button color="warn">warn</Button>
      <Button color="success">success</Button>
      <Button color="fail">fail</Button>
    </Styled.Row>
  )
}

ButtonColor.displayName = 'ButtonColor'

export default ButtonColor
