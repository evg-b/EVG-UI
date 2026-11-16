import type { LoaderColorProps } from './LoaderColor.types'

import { Loader, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}
const LoaderColor = (props: LoaderColorProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Loader />
      <Loader color="primary" />
      <Loader color="warn" />
    </div>
  )
}

LoaderColor.displayName = 'LoaderColor'

export default withStyles(styles)(LoaderColor)
