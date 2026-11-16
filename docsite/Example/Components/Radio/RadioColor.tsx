import type { ChangeEvent } from 'react'

import type { RadioColorProps } from './RadioColor.types'

import { useState } from 'react'
import { Radio, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const RadioColor = (props: RadioColorProps) => {
  const { classes } = props
  const [checkName, setCheckName] = useState('radio1')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckName(e.target.name)
  }

  return (
    <div className={classes.base}>
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio1'}
        name="radio1"
        color="default"
      />
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio2'}
        name="radio2"
        color="primary"
      />
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio3'}
        name="radio3"
        color="warn"
      />
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio4'}
        name="radio4"
        color="success"
      />
      <Radio
        onChange={handleChange}
        checked={checkName === 'radio5'}
        name="radio5"
        color="fail"
      />
    </div>
  )
}

RadioColor.displayName = 'RadioColor'

export default withStyles(styles)(RadioColor)
