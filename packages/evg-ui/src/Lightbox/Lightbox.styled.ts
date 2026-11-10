import styled, { css, keyframes } from 'styled-components'

import * as CarouselStyled from '../Carousel/Carousel.styled'

import type { LightboxStyledProps } from './Lightbox.types'

export const moveAnimation = keyframes`
  from {
    width: var(--evg-img-width-start,0);
    height: var(--evg-img-height-start,0);
    transform: translate(var(--evg-img-coord-start,0));
  }
  to {
    width: var(--evg-img-center-width-end,0);
    height: var(--evg-img-center-height-end,0);
    transform: translateY(var(--evg-img-coord-y-now,0));
  }
`

export const comebackAnimation = keyframes`
  to {
    transform: translateY(0);
  }
`

export const blackoutAnimation = keyframes`
  from {
    background-color: rgba(0,0,0,0);
  }
  to {
    background-color: rgba(0,0,0,var(--evg-img-blackout,1));
  }
`

export const blackout_backAnimation = keyframes`
  to {
    background-color: rgba(0,0,0,1);
  }
`

const hiddenStyles = css<LightboxStyledProps>`
  display: none;
`

const imgFlipNormalStyles = css<LightboxStyledProps>`
  animation: ${moveAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1) both normal;
`

const imgFlipReverseStyles = css<LightboxStyledProps>`
  animation: ${moveAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1) both reverse;
`

const imgFlipComebackStyles = css<LightboxStyledProps>`
  animation: ${comebackAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1);
`

const blackoutNormalStyles = css<LightboxStyledProps>`
  animation: ${blackoutAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1) normal;
`

const blackoutReverseStyles = css<LightboxStyledProps>`
  animation: ${blackoutAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1) reverse;
`

const blackoutBackStyles = css<LightboxStyledProps>`
  animation: ${blackout_backAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1);
`

export const TransitionImage = styled.img<LightboxStyledProps>`
  width: var(--evg-img-center-width-end, 0);
  height: var(--evg-img-center-height-end, 0);
  transform: translateY(var(--evg-img-coord-y-now, 0));
  object-fit: cover;
  will-change: transform;
  ${(props) => props.$imgFlip_normal && imgFlipNormalStyles}
  ${(props) => props.$imgFlip_reverse && imgFlipReverseStyles}
  ${(props) => props.$imgFlip_comeback && imgFlipComebackStyles}
  ${(props) => props.$hidden && hiddenStyles}
`

export const Gallery = styled.div<LightboxStyledProps>`
  width: 100vw;
  height: 100vh;
  ${CarouselStyled.ImageLeft} {
    width: var(--evg-img-left-width-end, 0);
    height: var(--evg-img-left-height-end, 0);
    object-fit: cover;
  }
  ${CarouselStyled.ImageCenter} {
    width: var(--evg-img-center-width-end, 0);
    height: var(--evg-img-center-height-end, 0);
    object-fit: cover;
  }
  ${CarouselStyled.ImageRight} {
    width: var(--evg-img-right-width-end, 0);
    height: var(--evg-img-right-height-end, 0);
    object-fit: cover;
  }
  ${(props) => props.$hidden && hiddenStyles}
`

export const Root = styled.div<LightboxStyledProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  grid-auto-columns: 150px;
  grid-auto-rows: 150px;
  grid-gap: 2%;
  padding: 2%;
  box-sizing: border-box;
`

export const Thumbnail = styled.img<LightboxStyledProps>`
  tap-highlight-color: transparent;
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $selected }) => ($selected ? 0 : 1)};
  transition: ${({ $selected }) => ($selected ? 'opacity 0ms 30ms' : 'none')};
`

export const Modal = styled.div<LightboxStyledProps>`
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, var(--evg-img-blackout, 0));
  will-change: background-color;
  ${(props) => props.$blackout_normal && blackoutNormalStyles}
  ${(props) => props.$blackout_reverse && blackoutReverseStyles}
  ${(props) => props.$blackout_back && blackoutBackStyles}
`

export const Viewport = styled.div<LightboxStyledProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
