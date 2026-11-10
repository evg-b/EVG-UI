import React, { useState, useEffect, useCallback, forwardRef } from 'react'
import Loader from '../Loader/Loader'
import { ImageError } from '../internal/icons/ImageError'
import type { ImageProps } from './Image.types'
import * as Styled from './Image.styled'

// Image - обертка над тегом `<img>`. Показывает статус загрузки или ошибки у изображения.
const Image = forwardRef<HTMLImageElement, ImageProps>(function (props, ref) {
  const { className, src, alt, ...otherProps } = props
  const [isLoad, setIsLoad] = useState(false)
  const [isError, setIsError] = useState(false)
  const loadImg = useCallback((urlSrc) => {
    setIsLoad(false)
    setIsError(false)
    const image = document.createElement('img')
    image.src = urlSrc
    setIsLoad(image.complete)

    image.onload = (e) => {
      setIsLoad(true)
      setIsError((prev) => (prev ? false : prev))
    }

    image.onerror = (e) => {
      setIsError(true)
    }
  }, [])
  useEffect(() => {
    // setIsLoad(false)
    // setIsError(false)
    loadImg(src)
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
})
Image.defaultProps = {}
Image.displayName = 'ImageEVG'
export default Image
