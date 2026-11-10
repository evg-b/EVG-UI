import React, { useState, useEffect, useRef, forwardRef } from 'react'
import type { NotifyProps } from './Notify.types'
const Notify = forwardRef<HTMLDivElement, NotifyProps>(
  function Notify(props, ref) {
    const { className, children, ...otherProps } = props
    return <div ref={ref} className={className} {...otherProps}></div>
  }
)
Notify.defaultProps = {}
Notify.displayName = 'NotifyEVG'
export default Notify
