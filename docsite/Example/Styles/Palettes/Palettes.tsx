import type { PalettesProps } from './Palettes.types'

import { Color, colors, withStyles } from '@evg-b/evg-ui'

const {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  gray,
  blueGray
} = colors

const MapColor: Record<string, Record<string, string>> = {
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  gray: gray,
  blueGray: blueGray
}

const styles = {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '20px'
  },
  palette: {
    display: 'inline-block',
    margin: '10px 0'
  },
  tone: {
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px'
  }
}

const Palettes = (props: PalettesProps) => {
  const { classes } = props

  return (
    <div className={classes.base}>
      {Object.keys(MapColor).map((key, index) => {
        return (
          <div key={index} className={classes.palette}>
            {Object.entries(MapColor[key]).map((color, i) => {
              return (
                <div
                  key={i}
                  className={classes.tone}
                  style={{
                    backgroundColor: Color(color[1]).Base(),
                    color: Color(color[1]).Contrast()
                  }}>
                  <span>
                    {i === 0 ? `${key} ` : null}
                    {color[0]}
                  </span>
                  <span>{color[1]}</span>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

Palettes.displayName = 'Palettes'

export default withStyles(styles)(Palettes)
