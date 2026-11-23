import * as Styled from './Elevations.styled'

const levels = Array.from({ length: 25 }, (_, level) => level)

const Elevations = () => (
  <Styled.Grid>
    {levels.map((level) => (
      <Styled.Tile key={level} $level={level}>
        {level}
      </Styled.Tile>
    ))}
  </Styled.Grid>
)

Elevations.displayName = 'Elevations'

export default Elevations
