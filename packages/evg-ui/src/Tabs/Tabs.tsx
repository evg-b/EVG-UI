import React, { useState, useEffect, useRef, forwardRef } from 'react'
import type { TabsProps } from './Tabs.types'
const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(props, ref) {
  const { className, children, ...otherProps } = props
  return <div ref={ref} className={className} {...otherProps}></div>
})
Tabs.defaultProps = {}
Tabs.displayName = 'TabsEVG'
export default Tabs
