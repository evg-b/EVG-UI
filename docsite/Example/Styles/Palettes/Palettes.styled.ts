import styled from 'styled-components'

import { Tone } from '../Color/Color.styled'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 20px;
`

export const Shade = styled(Tone)`
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 0;
`
