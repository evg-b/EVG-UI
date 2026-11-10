import type { BadgeProps } from './Badge.types'

import * as Styled from './Badge.styled'

// Это маленький значок обычно используется в паре с другими компонентами.
// Используется для привлечения внимание к этим компонентам.

const Badge = ({
  ref,
  className,
  children,
  color = 'fail',
  count = 0,
  max = 99,
  dot = false,
  circle = false,
  ripe = false,
  ...otherProps
}: BadgeProps) => {
  let CountBadge = count > max ? `${max}+` : count
  const BadgeRipe = (
    <Styled.Badge
      $ripe={Boolean(ripe)}
      $badgeNull={Boolean(count == 0)}
      $dot={Boolean(dot)}
      $circle={Boolean(circle)}
      $color={color}>
      {dot ? null : CountBadge}
    </Styled.Badge>
  )
  const Badge = (
    <Styled.Root ref={ref} {...otherProps} className={className} $color={color}>
      {children}
      {BadgeRipe}
    </Styled.Root>
  )
  return ripe ? BadgeRipe : Badge
}

Badge.displayName = 'BadgeEVG'
export default Badge
