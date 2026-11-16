import type { ElevationsProps } from './Elevations.types'

import { Elevation, withStyles } from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  ElevationBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    width: '100px',
    height: '100px',
    borderRadius: '9px',
    color: '#797979',
    fontSize: '20px'
  }
}

const Elevations = (props: ElevationsProps) => {
  const { classes } = props

  return (
    <div className={classes.base}>
      {Array.from(new Array(25)).map((n, i) => (
        <div key={i} className={classes.ElevationBox} style={Elevation(i)}>
          {i}
        </div>
      ))}
    </div>
  )
}

Elevations.displayName = 'Elevations'

export default withStyles(styles)(Elevations)
