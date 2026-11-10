import styled from 'styled-components'

import { Input } from '../SwitchBase/SwitchBase.styled'

export const CheckedIcon = styled.svg`
  position: absolute;
  transform: scale(0);
  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Root = styled.label`
  position: relative;

  ${Input}:checked + ${CheckedIcon} {
    transform: scale(1);
  }
`
