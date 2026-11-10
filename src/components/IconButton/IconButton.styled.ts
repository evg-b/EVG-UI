import styled from 'styled-components'

export const Root = styled.button`
  background-color: transparent;
  color: inherit;
  border-radius: 50%;
  padding: 10px;
  &:disabled,
  &[disabled] {
    background-color: rgba(0, 0, 0, 0);
  }
`
