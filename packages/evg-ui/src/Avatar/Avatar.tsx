import React, { useState, forwardRef } from 'react'
import { Person } from '../internal/icons/Avatar'
import type { AvatarProps } from './Avatar.types'
import * as Styled from './Avatar.styled'

// Этот компонент обычно используют для отображения изображения профиля пользователей.

// Так же отображает первую букву в имени контакта если изображение еще не загрузилось.
const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props, ref) {
    const {
      className,
      children,
      src,
      srcs,
      alt,
      altMax,
      size,
      status,
      color,
      statusColor,
      ...otherProps
    } = props
    const [isLoaded, setIsLoaded] = useState(false)

    const handOnLoad = () => setIsLoaded(true)

    const SpareImg = () => (
      <Styled.Spare
        $size={props.size}
        $color={props.color}
        $srcs={props.srcs}
        $statusColor={props.statusColor}>
        {alt === '' ? <Person /> : alt.slice(0, altMax)}
      </Styled.Spare>
    )

    const AvatarImg = (srcUrl, key = 0) => {
      return (
        <Styled.Avatar
          key={key}
          $loaded={Boolean(isLoaded)}
          $size={props.size}
          $color={props.color}
          $srcs={props.srcs}
          $statusColor={props.statusColor}>
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
          $size={props.size}
          $color={props.color}
          $srcs={props.srcs}
          $statusColor={props.statusColor}>
          {srcs.map((srcUrl, index) => AvatarImg(srcUrl, index))}
        </Styled.Avatars>
      )
    return (
      <Styled.Root
        ref={ref}
        {...otherProps}
        className={className}
        $status={Boolean(status)}
        $size={props.size}
        $color={props.color}
        $srcs={props.srcs}
        $statusColor={props.statusColor}>
        {srcs.length > 0 ? AvatarImgs : AvatarImg(src)}
      </Styled.Root>
    )
  }
)
Avatar.defaultProps = {
  alt: '',
  color: 'default',
  size: 40,
  status: false,
  statusColor: 'success',
  altMax: 1,
  src: '',
  srcs: []
}
Avatar.displayName = 'AvatarEVG'
export default Avatar
