import type { LoaderSizeProps } from './LoaderSize.types'

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
const LoaderSize = (props: LoaderSizeProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <Loader depth={1} />
      <Loader />
      <Loader depth={8} />
    </div>
  )
}

LoaderSize.displayName = 'LoaderSize'

export default withStyles(styles)(LoaderSize)
