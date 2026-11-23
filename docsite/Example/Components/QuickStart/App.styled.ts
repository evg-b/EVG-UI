import styled from 'styled-components'

export const Card = styled.section`
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.onSurface};
  font-family: ${({ theme }) => theme.fontFamily};
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
