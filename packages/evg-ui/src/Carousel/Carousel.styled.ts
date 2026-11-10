import styled, { css, keyframes } from 'styled-components'

import { getColor } from '../theme/getColor'

import type { CarouselStyledProps } from './Carousel.types'

export const rightAnimation = keyframes`
  to {
    transform: translateX(-105%);
  }
`

export const leftAnimation = keyframes`
  to {
    transform: translateX(105%);
  }
`

export const comebackAnimation = keyframes`
  to {
    transform: translateX(0);
  }
`

const vZoneRightStyles = css<CarouselStyledProps>`
  animation: ${rightAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1) both;
`

const vZoneLeftStyles = css<CarouselStyledProps>`
  animation: ${leftAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1) both;
`

const vZoneComebackStyles = css<CarouselStyledProps>`
  animation: ${comebackAnimation} ${(props) => props.$duration}ms
    cubic-bezier(0.4, 0, 0.2, 1) both;
`

const vBtnStyles = css<CarouselStyledProps>`
  z-index: 1;
  position: absolute;
  color: ${(props) => getColor(props.theme, props.$backgroundColor).Contrast()};
  cursor: pointer;
  height: 100%;
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${(props) =>
      getColor(props.theme, props.$backgroundColor).Contrast('RGBA', 0.2)};
  }
  @media (max-width: 1024px) {
    display: none;
  }
`

const carouselImgStyles = css<CarouselStyledProps>`
  max-width: 100%;
  max-height: 90%;
`

export const ImageLeft = styled.img<CarouselStyledProps>`
  ${carouselImgStyles}
`

export const ImageCenter = styled.img<CarouselStyledProps>`
  ${carouselImgStyles}
`

export const ImageRight = styled.img<CarouselStyledProps>`
  ${carouselImgStyles}
`

export const PreviousButton = styled.div<CarouselStyledProps>`
  ${vBtnStyles}
  left: 0;
`

export const NextButton = styled.div<CarouselStyledProps>`
  ${vBtnStyles}
  right: 0;
`

export const PreviousSlide = styled.div<CarouselStyledProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: translateX(-105%);
`

export const NextSlide = styled.div<CarouselStyledProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: translateX(105%);
`

export const Root = styled.div<CarouselStyledProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    getColor(props.theme, props.$backgroundColor).Base()};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Viewport = styled.div<CarouselStyledProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  will-change: transform;
  ${(props) => props.$v_zone_right && vZoneRightStyles}
  ${(props) => props.$v_zone_left && vZoneLeftStyles}
  ${(props) => props.$v_zone_comeback && vZoneComebackStyles}
`

export const CurrentSlide = styled.div<CarouselStyledProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
