import React, { forwardRef } from 'react'
import type { BadgeProps } from './Badge.types'
import * as Styled from './Badge.styled'

// Это маленький значок обычно используется в паре с другими компонентами.

// Используется для привлечения внимание к этим компонентам.
const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  function Badge(props, ref) {
    const {
      className,
      children,
      color,
      count,
      max,
      dot,
      circle,
      ripe,
      ...otherProps
    } = props
    let CountBadge = count > max ? `${max}+` : count
    const BadgeRipe = (
      <Styled.Badge
        $ripe={Boolean(ripe)}
        $badgeNull={Boolean(count == 0)}
        $dot={Boolean(dot)}
        $circle={Boolean(circle)}
        $color={props.color}>
        {dot ? null : CountBadge}
      </Styled.Badge>
    )
    const Badge = (
      <Styled.Root
        ref={ref}
        {...otherProps}
        className={className}
        $color={props.color}>
        {children}
        {BadgeRipe}
      </Styled.Root>
    )
    return ripe ? BadgeRipe : Badge
  }
)
Badge.defaultProps = {
  color: 'fail',
  count: 0,
  max: 99,
  dot: false,
  circle: false,
  ripe: false
}
Badge.displayName = 'BadgeEVG'
export default Badge
