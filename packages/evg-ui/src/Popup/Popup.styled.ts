import styled, { css, keyframes } from 'styled-components'

import { resolveTheme } from '../theme/resolveTheme'

import type { PopupStyledProps } from './Popup.types'

export const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const dockingAnimation = keyframes`
  0% {
    transform: translate3d(0,-10px,0);
  }
  100% {
    transform: translate3d(0,0,0);
  }
`

export const zoomAnimation = keyframes`
  0% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
`

const fadeStyles = css<PopupStyledProps>`
  animation: ${fadeAnimation} 300ms cubic-bezier(0.4, 0, 0.2, 1);
`

const dockingStyles = css<PopupStyledProps>`
  animation:
    ${dockingAnimation} 225ms cubic-bezier(0.4, 0, 0.2, 1),
    ${fadeAnimation} 300ms cubic-bezier(0.4, 0, 0.2, 1);
`

const zoomStyles = css<PopupStyledProps>`
  animation:
    ${zoomAnimation} 250ms cubic-bezier(0.4, 0, 0.2, 1),
    ${fadeAnimation} 300ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const SurfaceClose = styled.div<PopupStyledProps>`
  z-index: 1399;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Root = styled.div<PopupStyledProps>`
  z-index: 1400;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  font-family: ${(props) => resolveTheme(props.theme).fontFamily};
`

export const Animation = styled.div<PopupStyledProps>`
  ${(props) => props.$animation === 'fade' && fadeStyles}
  ${(props) => props.$animation === 'docking' && dockingStyles}
  ${(props) => props.$animation === 'zoom' && zoomStyles}
`
