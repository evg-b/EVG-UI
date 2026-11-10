import styled from 'styled-components'

import { getColor } from '../../theme/getColor'

import { toCssSize } from '../../styles/toCssSize'

import type { SvgIconStyledProps } from './SvgIcon.types'

const svgSizeNumberAndTemplate = (size: SvgIconStyledProps['$size']) => {
  if (typeof size === 'number') {
    return `${size}px`
  } else {
    return MapSize[size] ? MapSize[size] : MapSize['medium']
  }
}

const MapSize = {
  small: '18px',
  medium: '24px',
  large: '36px',
  extra: '48px'
}

export const Root = styled.svg<SvgIconStyledProps>`
  display: inline-flex;
  box-sizing: content-box;
  justify-content: center;
  user-select: none;
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: ${(props) =>
    props.$color === 'default'
      ? 'currentColor'
      : getColor(props.theme, props.$color).Base()};
  font-size: ${(props) => toCssSize(svgSizeNumberAndTemplate(props.$size))};
`
