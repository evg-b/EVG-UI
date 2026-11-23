import styled from 'styled-components'

import { Elevation } from '@evg-b/evg-ui'

export const Preview = styled.section`
  display: grid;
  gap: 16px;
  padding: 20px;
  margin: 1rem 0;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.onSurface};
  font-family: ${({ theme }) => theme.fontFamily};
`

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
`

export const Contacts = styled.div`
  ${Elevation(2)}
  width: min(100%, 400px);
  max-height: 240px;
`
