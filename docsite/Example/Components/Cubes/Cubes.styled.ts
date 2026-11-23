import styled from 'styled-components'

export const Preview = styled.div`
  width: 300px;
  max-width: 100%;
  height: 300px;
`

export const Canvas = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  max-width: 100%;
  height: 800px;
  background-color: #3d3d3d;
`

export const Controls = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.surface};
`

export const ColorPanel = styled.div`
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.surface};
`
