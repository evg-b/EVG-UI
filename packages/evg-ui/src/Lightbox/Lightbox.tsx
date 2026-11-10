import { useState, useEffect, useRef, useCallback } from 'react'

import { useMergedRefs } from '../hooks/useMergedRefs'
import TouchDriver from '../TouchDriver/TouchDriver'
import Modal from '../Modal/Modal'
import Carousel from '../Carousel/Carousel'
import calcMaxSizeRatio from '../utils/calcMaxSizeRatio'
import Image from '../Image/Image'

import type { LightboxProps } from './Lightbox.types'

import * as Styled from './Lightbox.styled'

// Lightbox - компонент для подробного ознакомления пользователя изображением из галереи. Поддержка жестов и интуитивное управление.

const DEFAULT_IMGS: NonNullable<LightboxProps['imgs']> = []

const Lightbox = ({
  ref,
  className,
  children,
  imgs = DEFAULT_IMGS,
  duration = 300,
  ...otherProps
}: LightboxProps) => {
  const LightboxEVG_ref = useRef<HTMLDivElement>(null)
  const mergedRef = useMergedRefs(LightboxEVG_ref, ref)
  const Modal_ref = useRef<HTMLElement>(null) // для --css-var

  const [indexOpen, setIndexOpen] = useState(-1)
  const [isModal, setIsModal] = useState(false)
  const [comeback, setComeback] = useState(false)
  const [flip, setFlip] = useState(false)
  const [normalAnimation, setNormalAnimation] = useState(false)
  const [reverseAnimation, setReverseAnimation] = useState(false)
  const setEvgVar = (key: string, val: string | number) => {
    // установка css var
    const Modal_S = Modal_ref.current
    Modal_S?.style.setProperty(key, String(val))
  }

  const calcPosition = useCallback(
    (img: HTMLImageElement, prefix = 'center') => {
      const { clientWidth, clientHeight } = document.documentElement

      if (prefix === 'center') {
        const { top, left, width, height } = img.getBoundingClientRect()
        const [centerX, centerY] = [clientWidth / 2, clientHeight / 2]
        let newX = -(centerX - width / 2) + left
        let newY = -(centerY - height / 2) + top
        setEvgVar('--evg-img-coord-start', `${newX}px,${newY}px`)
        setEvgVar('--evg-img-width-start', `${width}px`)
        setEvgVar('--evg-img-height-start', `${height}px`)
      }

      const imgSizeEnd = calcMaxSizeRatio(
        img.naturalWidth,
        img.naturalHeight,
        clientWidth,
        clientHeight
      )
      setEvgVar(`--evg-img-${prefix}-width-end`, `${imgSizeEnd.newWidth}px`)
      setEvgVar(`--evg-img-${prefix}-height-end`, `${imgSizeEnd.newHeight}px`)
    },
    []
  )

  const ratioSizeImgByIndex = useCallback(
    (imgIndex = 0) => {
      const root = LightboxEVG_ref.current
      if (!root) return
      const ims = Array.from(root.getElementsByTagName('img'))
      let leftImg = imgs[imgIndex - 1]
        ? ims.find((e) => Number(e.dataset.index) === imgIndex - 1)
        : ''
      let centerImg = ims.find((e) => Number(e.dataset.index) === imgIndex)
      let rightImg = imgs[imgIndex + 1]
        ? ims.find((e) => Number(e.dataset.index) === imgIndex + 1)
        : ''
      leftImg && calcPosition(leftImg, 'left')
      if (centerImg) calcPosition(centerImg, 'center')
      rightImg && calcPosition(rightImg, 'right')
    },
    [imgs, calcPosition]
  )

  const calcBlackout = (shiftY) => {
    const HeightCenter = document.documentElement.clientHeight / 2
    let blackoutPerc = Number((1 - Math.abs(shiftY) / HeightCenter).toFixed(2))
    return blackoutPerc
  }

  const onHandlerClick = (e) => {
    setIsModal(true)
    setIndexOpen(Number(e.currentTarget.dataset.index))
  }

  const onClose = () => {
    if (isModal && !normalAnimation) {
      setFlip(false)
      setNormalAnimation(false)
      setReverseAnimation(true)
    }
  } // --- touchDriver

  const onMoveXY = ({ shiftY, itXorY, startItXorY }) => {
    if (itXorY === 'y' && startItXorY === 'y') {
      flip && setFlip(false)
      setEvgVar('--evg-img-coord-y-now', `${shiftY}px`)
      setEvgVar('--evg-img-blackout', calcBlackout(shiftY))
    }
  }

  const onMoveEnd = ({ shiftY, inertia, startItXorY }) => {
    // todo: подключить инерцию
    if (startItXorY === 'y' && shiftY !== 0) {
      if (inertia || Math.abs(shiftY) > 200) {
        onClose()
      } else {
        setComeback(true)
      }
    }
  } // --- touchDriver

  const onAnimationEnd = (e) => {
    if (e.animationName === Styled.moveAnimation.getName()) {
      if (normalAnimation) {
        setNormalAnimation(false)
        setFlip(true)
      }

      if (reverseAnimation) {
        setIsModal(false)
      }
    }

    if (
      e.animationName === Styled.comebackAnimation.getName() ||
      e.animationName === Styled.blackout_backAnimation.getName()
    ) {
      setEvgVar('--evg-img-coord-y-now', 0)
      setFlip(true)
      setComeback(false)
    }
  }

  const handlerChangeImg = (index) => {
    setIndexOpen(index)
  }

  useEffect(() => {
    if (isModal) {
      // modal смонтирован
      setNormalAnimation(true)
    } else {
      setIndexOpen(-1)
      setReverseAnimation(false)
    }
  }, [isModal])
  useEffect(() => {
    indexOpen !== -1 && ratioSizeImgByIndex(indexOpen)
  }, [indexOpen, ratioSizeImgByIndex])
  const flipImg = (
    <Styled.TransitionImage
      onAnimationEnd={onAnimationEnd}
      src={imgs[indexOpen]}
      alt=""
      $imgFlip_normal={Boolean(normalAnimation)}
      $imgFlip_reverse={Boolean(reverseAnimation)}
      $imgFlip_comeback={Boolean(comeback)}
      $hidden={Boolean(flip)}
      $duration={duration}
    />
  )
  const flipViewer = (
    <Styled.Gallery
      as={Carousel}
      backgroundColor="#000000"
      imgs={imgs}
      imgStart={indexOpen}
      onChangeImg={handlerChangeImg}
      $hidden={Boolean(!flip)}
      $duration={duration}
    />
  )
  return (
    <Styled.Root
      ref={mergedRef}
      {...otherProps}
      className={className}
      $duration={duration}>
      {imgs.map((elem, index) => {
        return (
          <Styled.Thumbnail
            as={Image}
            key={index}
            $selected={index === indexOpen && isModal}
            data-index={index}
            src={elem}
            alt=""
            onClick={onHandlerClick}
            $duration={duration}
          />
        )
      })}

      <Styled.Modal
        as={Modal}
        ref={Modal_ref}
        component={TouchDriver}
        open={isModal}
        onClose={onClose}
        moveXY={onMoveXY}
        moveEnd={onMoveEnd}
        isEsc
        $blackout_normal={Boolean(normalAnimation)}
        $blackout_reverse={Boolean(reverseAnimation)}
        $blackout_back={Boolean(comeback)}
        $duration={duration}>
        <Styled.Viewport $duration={duration}>
          {flipImg}
          {flipViewer}
        </Styled.Viewport>
      </Styled.Modal>
    </Styled.Root>
  )
}

Lightbox.displayName = 'LightboxEVG'
export default Lightbox
