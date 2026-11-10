import { useState, useEffect, useRef } from 'react'

import type { NotifyProps } from './Notify.types'

const Notify = ({ ref, className, children, ...otherProps }: NotifyProps) => {
  return <div ref={ref} className={className} {...otherProps}></div>
}

Notify.displayName = 'NotifyEVG'
export default Notify
