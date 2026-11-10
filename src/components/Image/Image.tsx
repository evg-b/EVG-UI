import { useState, useEffect, useCallback } from 'react'

import Loader from '../Loader/Loader'
import { ImageError } from '../../internal/icons/ImageError'

import type { ImageProps } from './Image.types'

import * as Styled from './Image.styled'

// Image - обертка над тегом `<img>`. Показывает статус загрузки или ошибки у изображения.

const Image = ({ ref, className, src, alt, ...otherProps }: ImageProps) => {
  const [isLoad, setIsLoad] = useState(false)
  const [isError, setIsError] = useState(false)
  const loadImg = useCallback((urlSrc: string | undefined) => {
    setIsLoad(false)
    setIsError(false)
    const image = document.createElement('img')
    image.src = urlSrc ?? ''
    setIsLoad(image.complete)

    image.onload = (e) => {
      setIsLoad(true)
      setIsError((prev) => (prev ? false : prev))
    }

    image.onerror = () => {
      setIsError(true)
    }

    return () => {
      image.onload = null
      image.onerror = null
    }
  }, [])
  useEffect(() => {
    // setIsLoad(false)
    // setIsError(false)
    return loadImg(src)
  }, [src, loadImg])
  const capImg = (
    <Styled.Root {...otherProps} className={className}>
      {isError ? (
        <Styled.ErrorIcon as={ImageError} viewBox={200} />
      ) : (
        <Loader />
      )}
    </Styled.Root>
  )
  return (
    <>
      {isLoad ? (
        <img
          ref={ref}
          className={className}
          src={src}
          alt={alt}
          {...otherProps}
        />
      ) : (
        capImg
      )}
    </>
  )
}

Image.displayName = 'ImageEVG'
export default Image
