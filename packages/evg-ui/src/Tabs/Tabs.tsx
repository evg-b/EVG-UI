import { useState, useEffect, useRef } from 'react'

import type { TabsProps } from './Tabs.types'

const Tabs = ({ ref, className, children, ...otherProps }: TabsProps) => {
  return <div ref={ref} className={className} {...otherProps}></div>
}

Tabs.displayName = 'TabsEVG'
export default Tabs
