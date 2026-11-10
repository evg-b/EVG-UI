import React, { useState, useEffect, useRef, forwardRef } from 'react'
import type { SliderProps } from './Slider.types'
const Slider = forwardRef<HTMLDivElement, SliderProps>(
  function Slider(props, ref) {
    const { className, children, ...otherProps } = props
    return <div ref={ref} className={className} {...otherProps}></div>
  }
)
Slider.defaultProps = {}
Slider.displayName = 'SliderEVG'
export default Slider
