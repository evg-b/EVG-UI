import { useState } from 'react'

import { Person } from '../internal/icons/Avatar'

import type { AvatarProps } from './Avatar.types'

import * as Styled from './Avatar.styled'

// Этот компонент обычно используют для отображения изображения профиля пользователей.
// Так же отображает первую букву в имени контакта если изображение еще не загрузилось.

const DEFAULT_SRCS: NonNullable<AvatarProps['srcs']> = []

const Avatar = ({
  ref,
  className,
  children,
  src = '',
  srcs = DEFAULT_SRCS,
  alt = '',
  altMax = 1,
  size = 40,
  status = false,
  color = 'default',
  statusColor = 'success',
  ...otherProps
}: AvatarProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handOnLoad = () => setIsLoaded(true)

  const SpareImg = () => (
    <Styled.Spare
      $size={size}
      $color={color}
      $srcs={srcs}
      $statusColor={statusColor}>
      {alt === '' ? <Person /> : alt.slice(0, altMax)}
    </Styled.Spare>
  )

  const AvatarImg = (srcUrl, key = 0) => {
    return (
      <Styled.Avatar
        key={key}
        $loaded={Boolean(isLoaded)}
        $size={size}
        $color={color}
        $srcs={srcs}
        $statusColor={statusColor}>
        <img src={srcUrl} alt={alt} onLoad={handOnLoad} />
        {!isLoaded && SpareImg()}
      </Styled.Avatar>
    )
  }

  const AvatarImgs =
    srcs.length === 1 ? (
      AvatarImg(srcs[0])
    ) : (
      <Styled.Avatars
        $size={size}
        $color={color}
        $srcs={srcs}
        $statusColor={statusColor}>
        {srcs.map((srcUrl, index) => AvatarImg(srcUrl, index))}
      </Styled.Avatars>
    )
  return (
    <Styled.Root
      ref={ref}
      {...otherProps}
      className={className}
      $status={Boolean(status)}
      $size={size}
      $color={color}
      $srcs={srcs}
      $statusColor={statusColor}>
      {srcs.length > 0 ? AvatarImgs : AvatarImg(src)}
    </Styled.Root>
  )
}

Avatar.displayName = 'AvatarEVG'
export default Avatar
