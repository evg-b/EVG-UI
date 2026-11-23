import styled from 'styled-components'

import { Elevation } from '@evg-b/evg-ui'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Title = styled.div`
  display: grid;
  place-items: center;
  height: 40px;
  line-height: 20px;
  font-weight: var(--ifm-font-weight-semibold);
  color: ${({ theme }) => theme.onSurfaceVariant};
  background-color: ${({ theme }) => theme.surfaceContainer};
  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 200px;
  margin: 20px;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    ${Elevation(1)}
    text-decoration: none;
  }

  &:hover ${Title} {
    color: ${({ theme }) => theme.primary};
  }
`

export const Preview = styled.div`
  height: 160px;
  object-fit: contain;
`

export const MenuPreview = styled(Preview)`
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.surface};
`
