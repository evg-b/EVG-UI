import { colors } from '@evg-b/evg-ui'

import * as Styled from './Palettes.styled'

const Palettes = () => (
  <Styled.Grid>
    {Object.entries(colors).map(([name, palette]) => (
      <section key={name}>
        <h3>{name}</h3>
        {Object.entries(palette).map(([shade, hex]) => (
          <Styled.Shade key={shade} $background={hex}>
            <span>{shade}</span>
            <span>{hex}</span>
          </Styled.Shade>
        ))}
      </section>
    ))}
  </Styled.Grid>
)

Palettes.displayName = 'Palettes'

export default Palettes
