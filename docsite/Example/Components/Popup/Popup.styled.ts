import styled from 'styled-components'

export const Target = styled.button`
  margin: 30px;
`

export const WideTarget = styled(Target)`
  width: 250px;
  max-width: calc(100% - 60px);
`

export const Label = styled.div`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.surfaceContainer};
  color: ${({ theme }) => theme.onSurface};
`

export const Viewport = styled.div`
  width: 200px;
  max-height: 200px;
  background-color: ${({ theme }) => theme.surfaceContainer};
`

export const ScrollContent = styled.div`
  width: 600px;
  height: 600px;
  padding: 75px 0 0 60px;
`
