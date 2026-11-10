import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useEffectEvent
} from 'react'

import { useMergedRefs } from '../../hooks/useMergedRefs'
import Image from '../Image/Image'
import TouchDriver from '../TouchDriver/TouchDriver'
import { ChevronLeft, ChevronRight } from '../../internal/icons/Carousel'
import type { TouchDriverCoordinates } from '../TouchDriver/TouchDriver.types'

import type { CarouselProps, CarouselImages } from './Carousel.types'

import * as Styled from './Carousel.styled'

// Это карусель инструмент для отображения изображений.
// Поддерживает жесты и оптимизирован для N-количества элементов.

const DEFAULT_IMGS: NonNullable<CarouselProps['imgs']> = []

const Carousel = ({
  ref,
  className,
  children,
  imgs = DEFAULT_IMGS,
  imgStart = 0,
  // default 0
  onChangeImg,
  backgroundColor = 'gray900',
  sensitivity = 200,
  duration = 200,
  ...otherProps
}: CarouselProps) => {
  const [imgIndex, setImgIndex] = useState(
    imgStart < imgs.length ? imgStart : 0
  )
  const [indexDirection, setIndexDirection] = useState(0) // -1 | 0 | 1

  const [comeback, setComeback] = useState(false)
  const [stateImg, setStateImg] = useState<CarouselImages>({
    left: '',
    center: '',
    right: ''
  })
  const ViewerEVG_ref = useRef<HTMLDivElement>(null) // для --var-css

  const mergedRef = useMergedRefs(ViewerEVG_ref, ref)
  const ViewerEVGZone_ref = useRef<HTMLDivElement>(null)
  const imgIndex_ref = useRef(imgStart)
  const moveZone = useCallback((shift: number) => {
    const ViewerEVGZone_s = ViewerEVGZone_ref.current
    if (!ViewerEVGZone_s) return
    ViewerEVGZone_s.style.transform = `translateX(${shift}px)`
  }, [])
  const comeBack = useCallback(() => {
    moveZone(0)
  }, [moveZone])
  // --- touchDriver

  const onMoveXY = ({
    shiftX,
    itXorY,
    startItXorY
  }: TouchDriverCoordinates) => {
    if (itXorY === 'x' && startItXorY === 'x') {
      moveZone(shiftX)
    }
  }

  const onMoveEnd = ({
    shiftX,
    inertia,
    startItXorY
  }: TouchDriverCoordinates) => {
    if (shiftX !== 0 && startItXorY === 'x') {
      if (inertia || Math.abs(shiftX) > sensitivity) {
        if (Math.sign(shiftX) === 1) {
          moveSlide('ArrowLeft')
        } else {
          moveSlide('ArrowRight')
        }
      } else {
        setComeback(true)
      }
    }
  } // --- touchDriver
  // --- replace

  const pseudoReplace = (direction: 'right' | 'left') => {
    let pseudo = { ...stateImg }

    if (direction === 'right') {
      pseudo.center = pseudo.right
    } else {
      pseudo.center = pseudo.left
    }

    setStateImg(pseudo)
  }

  const realReplace = useCallback(
    (imgIndex: number) => {
      // TODO: можно в center передавать уже созданные компоненты Image из left или right.
      // это может защитить от потери кэша.
      setStateImg({
        left: imgs[imgIndex - 1] ? (
          <Styled.ImageLeft
            as={Image}
            src={imgs[imgIndex - 1]}
            $backgroundColor={backgroundColor}
            $duration={duration}
          />
        ) : (
          ''
        ),
        center: (
          <Styled.ImageCenter
            as={Image}
            src={imgs[imgIndex]}
            $backgroundColor={backgroundColor}
            $duration={duration}
          />
        ),
        right: imgs[imgIndex + 1] ? (
          <Styled.ImageRight
            as={Image}
            src={imgs[imgIndex + 1]}
            $backgroundColor={backgroundColor}
            $duration={duration}
          />
        ) : (
          ''
        )
      })
    },
    [imgs, backgroundColor, duration]
  ) // --- replace

  const moveSlide = (direction: 'ArrowLeft' | 'ArrowRight') => {
    switch (direction) {
      case 'ArrowRight':
        imgs[imgIndex_ref.current + 1]
          ? setIndexDirection((prev) => (prev === 0 ? 1 : prev))
          : setComeback(true)
        break

      case 'ArrowLeft':
        imgs[imgIndex_ref.current - 1]
          ? setIndexDirection((prev) => (prev === 0 ? -1 : prev))
          : setComeback(true)
        break
    }
  }

  const onKeyUp = useEffectEvent((e: KeyboardEvent) => {
    e.preventDefault()

    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      moveSlide(e.key)
    }
  })

  const onAnimationEnd = (e) => {
    if (e.animationName === Styled.rightAnimation.getName()) {
      imgIndex_ref.current = imgIndex_ref.current + 1
      pseudoReplace('right')
    }

    if (e.animationName === Styled.leftAnimation.getName()) {
      imgIndex_ref.current = imgIndex_ref.current - 1
      pseudoReplace('left')
    }

    if (e.animationName === Styled.comebackAnimation.getName()) {
      comeBack()
      setComeback(false)
    }
  }

  useEffect(() => {
    imgIndex_ref.current = imgStart
    setImgIndex(imgStart)
  }, [imgStart])
  useEffect(() => {
    realReplace(imgIndex) // через changeImg внешнии модули такие как mediaViewer может следить за изменениями

    onChangeImg && onChangeImg(imgIndex)
  }, [imgIndex, onChangeImg, realReplace])
  useLayoutEffect(() => {
    comeBack()
    setImgIndex(imgIndex_ref.current)
    setIndexDirection(0)
  }, [stateImg, comeBack])
  useEffect(() => {
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keyup', onKeyUp)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const leftArrow = stateImg.left ? (
    <Styled.PreviousButton
      onClick={() => moveSlide('ArrowLeft')}
      $backgroundColor={backgroundColor}
      $duration={duration}>
      <ChevronLeft />
    </Styled.PreviousButton>
  ) : null
  const rightArrow = stateImg.right ? (
    <Styled.NextButton
      onClick={() => moveSlide('ArrowRight')}
      $backgroundColor={backgroundColor}
      $duration={duration}>
      <ChevronRight />
    </Styled.NextButton>
  ) : null
  const vLeft = stateImg.left ? (
    <Styled.PreviousSlide
      $backgroundColor={backgroundColor}
      $duration={duration}>
      {stateImg.left}
    </Styled.PreviousSlide>
  ) : null
  const vRight = stateImg.right ? (
    <Styled.NextSlide $backgroundColor={backgroundColor} $duration={duration}>
      {stateImg.right}
    </Styled.NextSlide>
  ) : null
  return (
    <Styled.Root
      as={TouchDriver}
      ref={mergedRef}
      moveXY={onMoveXY}
      moveEnd={onMoveEnd}
      {...otherProps}
      className={className}
      $backgroundColor={backgroundColor}
      $duration={duration}>
      <Styled.Viewport
        ref={ViewerEVGZone_ref}
        onAnimationEnd={onAnimationEnd}
        $v_zone_right={Boolean(indexDirection === 1)}
        $v_zone_left={Boolean(indexDirection === -1)}
        $v_zone_comeback={Boolean(comeback)}
        $backgroundColor={backgroundColor}
        $duration={duration}>
        {vLeft}
        <Styled.CurrentSlide
          $backgroundColor={backgroundColor}
          $duration={duration}>
          {stateImg.center}
        </Styled.CurrentSlide>
        {vRight}
      </Styled.Viewport>
      {leftArrow}
      {rightArrow}
    </Styled.Root>
  )
}

Carousel.displayName = 'CarouselEVG'
export default Carousel
