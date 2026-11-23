import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  overflow-x: auto;
  color: ${({ theme }) => theme.onSurface};
  background-color: ${({ theme }) => theme.surface};
`

export const Table = styled.table`
  display: table;
  width: 100%;
  margin: 0;
  border-collapse: collapse;
  text-align: left;

  & th,
  & td {
    padding: 12px 16px;
    border: 0;
    text-align: left;
    vertical-align: top;
  }

  & tr,
  & tbody tr:nth-child(2n) {
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.outline};
    background-color: ${({ theme }) => theme.surface};
  }
`

export const HeaderRow = styled.tr`
  color: ${({ theme }) => theme.onSurfaceVariant};
`

export const PropertyRow = styled.tr`
  & code {
    white-space: normal;
    overflow-wrap: anywhere;
  }

  & small {
    display: block;
    color: ${({ theme }) => theme.onSurfaceVariant};
    font-weight: normal;
  }
`

export const Description = styled.p`
  color: ${({ theme }) => theme.onSurface};
`
