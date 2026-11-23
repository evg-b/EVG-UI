import { Color, getColor, useTheme } from '@evg-b/evg-ui'

import type { ColorInfoProps } from './ColorInfo.types'

import * as Styled from './Color.styled'

const ColorInfo = ({ colors, themed = false }: ColorInfoProps) => {
  const theme = useTheme()

  return (
    <Styled.Values>
      {colors.map((name) => {
        const color = themed ? getColor(theme, name) : Color(name)
        const hex = color.Base('HEX')

        return (
          <Styled.Value key={name}>
            <dt>
              <Styled.Chip $background={hex} />
              {name}
            </dt>
            <dd>{hex}</dd>
          </Styled.Value>
        )
      })}
    </Styled.Values>
  )
}

ColorInfo.displayName = 'ColorInfo'

export default ColorInfo
