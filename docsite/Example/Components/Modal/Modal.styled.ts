import styled from 'styled-components'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
`

export const Dialog = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.onSurface};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
`
