import styled, { css } from 'styled-components'

import { getColor } from '../theme/getColor'

import type { ScrollStyledProps } from './Scroll.types'

const scrollVisibleStyles = css<ScrollStyledProps>`
  opacity: 1 !important;
`

const autoHideStyles = css<ScrollStyledProps>`
  opacity: 0;
  transition: opacity ${(props) => props.$autoHideDuration}ms linear;
`

const trackStyles = css<ScrollStyledProps>`
  z-index: 1;
  cursor: pointer;
  position: absolute;
  background-color: ${(props) =>
    getColor(props.theme, props.$color).Base('rgba', 0.1)};
  border-radius: 5px 5px;
  &:after {
    content: '';
    position: absolute;
    background-color: ${(props) =>
      getColor(props.theme, props.$color).Base('rgba', 0.6)};
    border-radius: 5px 5px;
  }
  &:hover {
    opacity: 1;
  }
`

export const VerticalTrack = styled.div<ScrollStyledProps>`
  ${trackStyles}
  top: 0;
  right: 0;
  width: ${(props) => props.$trackSize}px;
  height: 100%;
  &:after {
    transform: translateY(var(--evg-scroller-y));
    right: 0px;
    width: ${(props) => props.$trackSize}px;
    height: var(--evg-scroller-size-y);
    will-change: transform;
  }
  ${(props) => props.$autoHide && autoHideStyles}
  ${(props) => props.$scrollVisible && scrollVisibleStyles}
`

export const HorizontalTrack = styled.div<ScrollStyledProps>`
  ${trackStyles}
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${(props) => props.$trackSize}px;
  &:after {
    transform: translateX(var(--evg-scroller-x));
    bottom: 0px;
    height: ${(props) => props.$trackSize}px;
    width: var(--evg-scroller-size-x);
    will-change: transform;
  }
  ${(props) => props.$autoHide && autoHideStyles}
  ${(props) => props.$scrollVisible && scrollVisibleStyles}
`

export const Root = styled.div<ScrollStyledProps>`
  --evg-scroller-size-y: 0;
  --evg-scroller-size-x: 0;
  --evg-scroller-y: 0;
  --evg-scroller-x: 0;
  position: relative;
`

export const Wrapper = styled.div<ScrollStyledProps>`
  overflow: scroll;
  max-height: inherit;
  height: inherit;
  min-height: inherit;
  max-width: inherit;
  width: inherit;
  min-width: inherit;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Space = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
`
