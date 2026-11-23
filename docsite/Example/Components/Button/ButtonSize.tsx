import { Button } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonSize = () => {
  return (
    <Styled.Row>
      <Button variant="contained" color="primary" size="small">
        small
      </Button>
      <Button variant="contained" color="primary" size="medium">
        medium
      </Button>
      <Button variant="contained" color="primary" size="large">
        large
      </Button>
      <Button variant="contained" color="primary" size="extra">
        extra
      </Button>
    </Styled.Row>
  )
}

ButtonSize.displayName = 'ButtonSize'

export default ButtonSize
