import { useState, useEffect, useRef } from 'react'

import type { SliderProps } from './Slider.types'

const Slider = ({ ref, className, children, ...otherProps }: SliderProps) => {
  return <div ref={ref} className={className} {...otherProps}></div>
}

Slider.displayName = 'SliderEVG'
export default Slider
