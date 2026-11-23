import { Button, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonStartIconAndEndIcon = () => {
  return (
    <Styled.Row>
      <Button startIcon={<Icon name="Check" />}>default</Button>
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon name="Cancel" />}>
        Button
      </Button>
      <Button
        variant="outlined"
        color="fail"
        round
        startIcon={<Icon name="Check" />}
        endIcon={<Icon name="Cancel" />}>
        outlined
      </Button>
    </Styled.Row>
  )
}

ButtonStartIconAndEndIcon.displayName = 'ButtonStartIconAndEndIcon'

export default ButtonStartIconAndEndIcon
