import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.onSurface};
    font-family: ${({ theme }) => theme.fontFamily};
    line-height: 1.5;
  }
`

export const Root = styled.main`
  max-width: 880px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    margin: 0;
    font-size: 40px;
  }
  h2 {
    margin: 0 0 16px;
    font-size: 20px;
  }
`

export const Eyebrow = styled.p`
  color: ${({ theme }) => theme.onSurfaceVariant};
  margin-bottom: 0;
`

export const Panel = styled.section`
  margin-top: 24px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 12px;
  background: ${({ theme }) => theme.surface};
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`

export const ColorControl = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

export const ColorInput = styled.input`
  width: 44px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 4px;
  background: ${({ theme }) => theme.surface};
  cursor: pointer;
`

export const ModalBackdrop = styled.div`
  background: rgb(0 0 0 / 40%);
`

export const ModalContent = styled.div`
  box-sizing: border-box;
  width: min(480px, calc(100% - 32px));
  padding: 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.surface};
`
