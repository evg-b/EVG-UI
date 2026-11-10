import React, { useEffect, useRef, forwardRef } from 'react'
import type { LoaderProps } from './Loader.types'
import * as Styled from './Loader.styled'

// Индикатор прогресса указывающий неопределенное время ожидания.
const Loader = forwardRef<SVGSVGElement, LoaderProps>(
  function Loader(props, ref) {
    const { className, children, color, size, depth, ...otherProps } = props
    let Loader_ref = useRef()
    Loader_ref = ref || Loader_ref
    useEffect(() => {
      const Loader_S = Loader_ref.current
      let perimeter = 2 * Math.PI * (size / 2 - depth)
      Loader_S.style.setProperty('--evg-stroke-dasharray', `${perimeter}px`)
    }, [size, depth])
    return (
      <Styled.Root
        ref={Loader_ref}
        $size={size}
        {...otherProps}
        className={className}
        $color={props.color}>
        <Styled.Circle
          cx="50%"
          cy="50%"
          r={size / 2 - depth}
          strokeWidth={depth}
          strokeLinecap="round"
          $color={props.color}></Styled.Circle>
      </Styled.Root>
    )
  }
)
Loader.defaultProps = {
  color: 'default',
  size: 48,
  depth: 3
}
Loader.displayName = 'LoaderEVG'
export default Loader
