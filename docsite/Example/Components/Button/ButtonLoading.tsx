import { useState } from 'react'
import { Button, Icon } from '@evg-b/evg-ui'

import * as Styled from '../../ExampleLayout.styled'

const ButtonLoading = () => {
  const [loading, setLoading] = useState<Array<boolean>>([])
  const changeLoad = (index: number, state: boolean) => {
    setLoading((l) => {
      let newL = [...l]
      newL[index] = state
      return newL
    })
  }
  const handleLoad = (index: number) => {
    changeLoad(index, true)
    setTimeout(() => changeLoad(index, false), 3000)
  }
  return (
    <Styled.Row>
      <Button
        loading={loading[1]}
        variant="contained"
        color="primary"
        startIcon={<Icon name="Check" />}
        onClick={() => handleLoad(1)}>
        Click Me!
      </Button>
      <Button
        loading={loading[2]}
        variant="contained"
        color="primary"
        onClick={() => handleLoad(2)}>
        And Me Me!
      </Button>
    </Styled.Row>
  )
}

ButtonLoading.displayName = 'ButtonLoading'

export default ButtonLoading
