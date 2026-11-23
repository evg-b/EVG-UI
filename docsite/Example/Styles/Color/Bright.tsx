import { Color } from '@evg-b/evg-ui'

import * as Styled from './Color.styled'

const orange = Color('orange')
const percentages = Array.from({ length: 13 }, (_, index) => index * 5)

const Bright = () => (
  <>
    {[1, -1].map((direction) => (
      <Styled.Scale key={direction}>
        {percentages.map((step) => (
          <Styled.Tone
            key={step}
            $background={orange.Bright('HEX', direction * step)}>
            {direction * step}%
          </Styled.Tone>
        ))}
      </Styled.Scale>
    ))}
  </>
)

Bright.displayName = 'Bright'

export default Bright
