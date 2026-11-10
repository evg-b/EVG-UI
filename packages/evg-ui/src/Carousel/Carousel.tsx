import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  forwardRef
} from 'react'
import Image from '../Image/Image'
import TouchDriver from '../TouchDriver/TouchDriver'
import { ChevronLeft, ChevronRight } from '../internal/icons/Carousel'
import type { CarouselProps } from './Carousel.types'
import * as Styled from './Carousel.styled'

// Это карусель инструмент для отображения изображений.

// Поддерживает жесты и оптимизирован для N-количества элементов.
const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  function Carousel(props, ref) {
    const {
      className,
      children,
      imgs = [],
      imgStart,
      // default 0
      onChangeImg,
      backgroundColor,
      sensitivity,
      duration,
      ...otherProps
    } = props
    const [imgIndex, setImgIndex] = useState(
      imgStart < imgs.length ? imgStart : 0
    )
    const [indexDirection, setIndexDirection] = useState(0) // -1 | 0 | 1

    const [comeback, setComeback] = useState(false)
    const [stateImg, setStateImg] = useState({
      left: '',
      center: '',
      right: ''
    })
    let ViewerEVG_ref = useRef() // для --var-css

    ViewerEVG_ref = ref || ViewerEVG_ref
    const ViewerEVGZone_ref = useRef()
    const imgIndex_ref = useRef(imgStart)
    const comeBack = useCallback(() => {
      moveZone(0)
    }, [moveZone])
    const moveZone = useCallback((shift) => {
      const ViewerEVGZone_s = ViewerEVGZone_ref.current
      ViewerEVGZone_s.style.transform = `translateX(${shift}px)`
    }, []) // --- touchDriver

    const onMoveXY = ({ shiftX, itXorY, startItXorY }) => {
      if (itXorY === 'x' && startItXorY === 'x') {
        moveZone(shiftX)
      }
    }

    const onMoveEnd = ({ shiftX, inertia, startItXorY }) => {
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

    const pseudoReplace = (direction) => {
      let pseudo = { ...stateImg }

      if (direction === 'right') {
        pseudo.center = pseudo.right
      } else {
        pseudo.center = pseudo.left
      }

      setStateImg(pseudo)
    }

    const realReplace = useCallback(
      (imgIndex) => {
        // TODO: можно в center передавать уже созданные компоненты Image из left или right.
        // это может защитить от потери кэша.
        setStateImg({
          left: imgs[imgIndex - 1] ? (
            <Styled.ImageLeft
              as={Image}
              src={imgs[imgIndex - 1]}
              $backgroundColor={props.backgroundColor}
              $duration={props.duration}
            />
          ) : (
            ''
          ),
          center: (
            <Styled.ImageCenter
              as={Image}
              src={imgs[imgIndex]}
              $backgroundColor={props.backgroundColor}
              $duration={props.duration}
            />
          ),
          right: imgs[imgIndex + 1] ? (
            <Styled.ImageRight
              as={Image}
              src={imgs[imgIndex + 1]}
              $backgroundColor={props.backgroundColor}
              $duration={props.duration}
            />
          ) : (
            ''
          )
        })
      },
      [imgs, classes]
    ) // --- replace

    const moveSlide = (direction) => {
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

    const onKeyUp = (e) => {
      e.preventDefault()

      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        moveSlide(e.key)
      }
    }

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
        $backgroundColor={props.backgroundColor}
        $duration={props.duration}>
        <ChevronLeft />
      </Styled.PreviousButton>
    ) : null
    const rightArrow = stateImg.right ? (
      <Styled.NextButton
        onClick={() => moveSlide('ArrowRight')}
        $backgroundColor={props.backgroundColor}
        $duration={props.duration}>
        <ChevronRight />
      </Styled.NextButton>
    ) : null
    const vLeft = stateImg.left ? (
      <Styled.PreviousSlide
        $backgroundColor={props.backgroundColor}
        $duration={props.duration}>
        {stateImg.left}
      </Styled.PreviousSlide>
    ) : null
    const vRight = stateImg.right ? (
      <Styled.NextSlide
        $backgroundColor={props.backgroundColor}
        $duration={props.duration}>
        {stateImg.right}
      </Styled.NextSlide>
    ) : null
    return (
      <Styled.Root
        as={TouchDriver}
        innerRef={ViewerEVG_ref}
        moveXY={onMoveXY}
        moveEnd={onMoveEnd}
        {...otherProps}
        className={className}
        $backgroundColor={props.backgroundColor}
        $duration={props.duration}>
        <Styled.Viewport
          ref={ViewerEVGZone_ref}
          onAnimationEnd={onAnimationEnd}
          $v_zone_right={Boolean(indexDirection === 1)}
          $v_zone_left={Boolean(indexDirection === -1)}
          $v_zone_comeback={Boolean(comeback)}
          $backgroundColor={props.backgroundColor}
          $duration={props.duration}>
          {vLeft}
          <Styled.CurrentSlide
            $backgroundColor={props.backgroundColor}
            $duration={props.duration}>
            {stateImg.center}
          </Styled.CurrentSlide>
          {vRight}
        </Styled.Viewport>
        {leftArrow}
        {rightArrow}
      </Styled.Root>
    )
  }
)
Carousel.defaultProps = {
  imgStart: 0,
  backgroundColor: 'gray900',
  sensitivity: 200,
  duration: 200
}
Carousel.displayName = 'CarouselEVG'
export default Carousel
