import styled from 'styled-components'

import { Wrap } from '../../ExampleLayout.styled'

export { Wrap as Row }

export const CenteredRow = styled(Wrap)`
  align-items: center;
`

export const Preview = styled.div`
  margin: 5px;
  width: 200px;
  height: 200px;
  border-radius: 6%;
  object-fit: cover;
`
