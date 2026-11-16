import type { ImageSize, ImageAxis } from './calcMaxSizeRatio.types'

class RatioImg {
  coefficientAnamorphismW: number
  coefficientAnamorphismH: number
  constructor(width: number, height: number) {
    this.coefficientAnamorphismW = Number((width / height).toFixed(5))
    this.coefficientAnamorphismH = Number((height / width).toFixed(5))
  }
  // @param size - размер нового отрезка
  // mod  - 'w' | 'h' - ширина или высота
  //
  // @return {newWidth:int,newHeight:int}
  reCaclNewRation(size: number, mod: ImageAxis): ImageSize {
    switch (mod) {
      case 'w':
        return {
          newWidth: size,
          newHeight: (size / this.coefficientAnamorphismW) | 0
        }
      case 'h':
        return {
          newWidth: (size / this.coefficientAnamorphismH) | 0,
          newHeight: size
        }
    }
  }
}
export default function calcMaxSizeRatio(
  naturalWidth: number,
  naturalHeight: number,
  clientWidth: number,
  clientHeight: number
): ImageSize {
  let img = new RatioImg(naturalWidth, naturalHeight)
  const [acceptableLimitWidth, acceptableLimitHeight] = [
    clientWidth >= 1024 ? 1000 : clientWidth,
    (clientHeight * 0.9) | 0
  ]
  const [notFitLimitWidth, notFitLimitHeight] = [
    naturalWidth > acceptableLimitWidth,
    naturalHeight > acceptableLimitHeight
  ]
  if (notFitLimitWidth && notFitLimitHeight) {
    let newSizetoH = img.reCaclNewRation(acceptableLimitHeight, 'h')
    if (newSizetoH.newWidth > acceptableLimitWidth) {
      return img.reCaclNewRation(acceptableLimitWidth, 'w')
    } else {
      return newSizetoH
    }
  } else if (!notFitLimitWidth && !notFitLimitHeight) {
    return img.reCaclNewRation(naturalWidth, 'w')
  }
  if (notFitLimitWidth) {
    return img.reCaclNewRation(acceptableLimitWidth, 'w')
  }
  return img.reCaclNewRation(acceptableLimitHeight, 'h')
}
