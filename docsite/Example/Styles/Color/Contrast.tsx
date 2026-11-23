import * as Styled from './Color.styled'

const backgrounds = ['#7B1FA2', '#CE93D8', '#757575', '#EEEEEE']

const Contrast = () => (
  <Styled.Grid>
    {backgrounds.map((background) => (
      <Styled.Tone key={background} $background={background}>
        {background}
      </Styled.Tone>
    ))}
  </Styled.Grid>
)

Contrast.displayName = 'Contrast'

export default Contrast
