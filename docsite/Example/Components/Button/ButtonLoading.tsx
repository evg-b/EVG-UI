import type { ButtonLoadingProps } from './ButtonLoading.types'

import { useState } from 'react'
import { Button, withStyles, Icon } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const ButtonLoading = (props: ButtonLoadingProps) => {
  const { classes } = props
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
    <div className={classes.base}>
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
    </div>
  )
}

ButtonLoading.displayName = 'ButtonLoading'

export default withStyles(styles)(ButtonLoading)
