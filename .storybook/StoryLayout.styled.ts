import styled, { createGlobalStyle } from 'styled-components'

import type { TouchMarkerProps } from './StoryLayout.types'

export const PageStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.onSurface};
    font-family: ${({ theme }) => theme.fontFamily};
  }
  *, *::before, *::after { box-sizing: border-box; }
`

export const Canvas = styled.div`
  padding: 24px;
  min-width: 0;
  color: ${({ theme }) => theme.onSurface};
  background: ${({ theme }) => theme.background};
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const Panel = styled.div`
  padding: 24px;
  width: min(100%, 480px);
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 12px;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.onSurface};
`

export const Hint = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.onSurfaceVariant};
  line-height: 1.5;
`

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

export const OverlayArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  width: min(100%, 640px);
`

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  padding: 24px;
`

export const ImageFrame = styled.div`
  display: block;
  width: min(100%, 560px);
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  overflow: hidden;
`

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: min(100%, 780px);
  img {
    width: 220px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
  }
`

export const ScrollContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 160px);
  gap: 12px;
  padding: 12px;
`

export const Tile = styled.div`
  display: grid;
  place-items: center;
  min-height: 80px;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surfaceContainer};
  color: ${({ theme }) => theme.onSurface};
`

export const TouchArea = styled.div`
  position: relative;
  width: min(100%, 480px);
  height: 280px;
  overflow: hidden;
  touch-action: none;
  border: 1px dashed ${({ theme }) => theme.outline};
  border-radius: 12px;
  background: ${({ theme }) => theme.surfaceContainer};
`

export const TouchMarker = styled.div<TouchMarkerProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  transform: translate(${({ $x }) => $x - 18}px, ${({ $y }) => $y - 18}px);
  pointer-events: none;
`

export const RippleTarget = styled.button`
  position: relative;
  width: 280px;
  max-width: 100%;
  height: 120px;
  padding: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 12px;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.onSurface};
  font: inherit;
  cursor: pointer;
`

export const CanvasArea = styled.div`
  width: min(100%, 640px);
  height: 320px;
  overflow: hidden;
  border-radius: 12px;
  background: ${({ theme }) => theme.surfaceContainer};
`
