import type { ImageBrokenProps } from './ImageBroken.types'

import { useState } from 'react'
import { Image, Button, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  img: {
    margin: '5px',
    width: 200,
    height: 200,
    borderRadius: '6%',
    objectFit: 'cover'
  }
}

const ImageBroken = (props: ImageBrokenProps) => {
  const { classes } = props
  const [hash, setHash] = useState('')
  const newHash = () => {
    setHash(Date.now())
  }
  const url = `/source/Image/2broke.jpg?${hash}`
  return (
    <div className={classes.base}>
      <Image className={classes.img} src={url} />
      <Button onClick={newHash}>reload</Button>
    </div>
  )
}

ImageBroken.displayName = 'ImageBroken'

export default withStyles(styles)(ImageBroken)
