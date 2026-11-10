import styled from 'styled-components'

import { getColor } from '../theme/getColor'

export const Root = styled.div`
  display: block;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${(props) => getColor(props.theme, 'surface').Base()};
  font-size: 1rem;
  & > li {
    margin: 0;
  }
`
