import styled from 'styled-components'

export const Viewport = styled.div`
  width: 200px;
  max-width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.surfaceContainer};
`

export const WideViewport = styled(Viewport)`
  width: 400px;
`

export const GrowingViewport = styled(Viewport)`
  height: auto;
  max-height: 400px;
`

export const Tile = styled.div`
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  color: ${({ theme }) => theme.onPrimary};
  background-color: ${({ theme }) => theme.primary};
`

export const WideTile = styled(Tile)`
  width: 800px;
`

export const Controls = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`
