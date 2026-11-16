import type { CarouselOnChangeImgProps } from './CarouselOnChangeImg.types'

import { Carousel, withStyles } from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

const styles = {
  base: {
    width: '600px',
    height: '400px',
    borderRadius: '6px',
    overflow: 'hidden'
  }
}
const CarouselOnChangeImg = (props: CarouselOnChangeImgProps) => {
  const { classes } = props
  const imgs = [
    useBaseUrl('/source/Carousel/1.jpg'),
    useBaseUrl('/source/Carousel/2.jpg'),
    useBaseUrl('/source/Carousel/3.jpg'),
    useBaseUrl('/source/Carousel/4.jpg'),
    useBaseUrl('/source/Carousel/5.jpg'),
    useBaseUrl('/source/Carousel/6.jpg'),
    useBaseUrl('/source/Carousel/7.jpg'),
    useBaseUrl('/source/Carousel/8.jpg'),
    useBaseUrl('/source/Carousel/9.jpg'),
    useBaseUrl('/source/Carousel/10.jpg')
  ]
  return (
    <div className={classes.base}>
      <Carousel imgs={imgs} />
    </div>
  )
}

CarouselOnChangeImg.displayName = 'CarouselOnChangeImg'

export default withStyles(styles)(CarouselOnChangeImg)
