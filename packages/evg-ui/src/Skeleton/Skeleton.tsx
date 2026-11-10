import React, { forwardRef } from 'react'

import type { SkeletonProps } from './Skeleton.types'

import * as Styled from './Skeleton.styled'

const Skeleton = forwardRef<HTMLElement, SkeletonProps>(
  (
    {
      className,
      children,
      component = 'span',
      type = '',
      width = 80,
      height = 80,
      size = 0,
      animation = true,
      borderRadius = 0,
      ...otherProps
    },
    ref
  ) => (
    <Styled.Root
      as={component}
      ref={ref}
      className={className}
      $types={type.split(',').map((value) => value.trim())}
      $width={size || width}
      $height={size || height}
      $animation={animation}
      $borderRadius={borderRadius}
      {...otherProps}
    />
  )
)

Skeleton.displayName = 'SkeletonEVG'

export default Skeleton
