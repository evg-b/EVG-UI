import type { CSSProperties } from 'react'

export type KeyframesOptions = {
  Name?: string
  Duration?: number
  Body?: string
  Timingf?: CSSProperties['animationTimingFunction']
  Delay?: number | string
  IterationCount?: CSSProperties['animationIterationCount']
  Direction?: CSSProperties['animationDirection']
  FillMode?: CSSProperties['animationFillMode']
  PlayState?: CSSProperties['animationPlayState']
}
