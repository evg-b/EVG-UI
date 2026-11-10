import { Children, isValidElement } from 'react'

import Avatar from '../Avatar/Avatar'
import type { AvatarProps } from '../Avatar/Avatar.types'

import type { AvatarGroupProps } from './AvatarGroup.types'

import * as Styled from './AvatarGroup.styled'

const AvatarGroup = ({
  ref,
  className,
  children,
  size = 40,
  max = 5,
  ...otherProps
}: AvatarGroupProps) => {
  const count = Children.count(children)
  return (
    <Styled.Root ref={ref} className={className} {...otherProps}>
      {Children.map(children, (child, index) => {
        if (index < max && isValidElement<AvatarProps>(child)) {
          return (
            <Styled.Avatar
              as={child.type}
              {...child.props}
              ref={child.props.ref}
              size={child.props.size ?? size}
              $order={count - index}
            />
          )
        }

        return index === max ? (
          <Avatar alt={`+${count - max}`} altMax={2} size={size} />
        ) : null
      })}
    </Styled.Root>
  )
}

AvatarGroup.displayName = 'AvatarGroupEVG'
export default AvatarGroup
