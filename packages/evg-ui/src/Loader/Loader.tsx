import { useEffect, useRef } from 'react'

import { useMergedRefs } from '../hooks/useMergedRefs'

import type { LoaderProps } from './Loader.types'

import * as Styled from './Loader.styled'

// Индикатор прогресса указывающий неопределенное время ожидания.

const Loader = ({
  ref,
  className,
  children,
  color = 'default',
  size = 48,
  depth = 3,
  ...otherProps
}: LoaderProps) => {
  const Loader_ref = useRef<SVGSVGElement>(null)
  const mergedRef = useMergedRefs(Loader_ref, ref)
  useEffect(() => {
    const Loader_S = Loader_ref.current
    let perimeter = 2 * Math.PI * (size / 2 - depth)
    Loader_S?.style.setProperty('--evg-stroke-dasharray', `${perimeter}px`)
  }, [size, depth])
  return (
    <Styled.Root
      ref={mergedRef}
      $size={size}
      {...otherProps}
      className={className}
      $color={color}>
      <Styled.Circle
        cx="50%"
        cy="50%"
        r={size / 2 - depth}
        strokeWidth={depth}
        strokeLinecap="round"
        $color={color}></Styled.Circle>
    </Styled.Root>
  )
}

Loader.displayName = 'LoaderEVG'
export default Loader
