import styled, { css } from 'styled-components'

import { getColor } from '../../theme/getColor'
import { resolveTheme } from '../../theme/resolveTheme'

import type { TextFieldStyledProps } from './TextField.types'

export const Label = styled.label`
  display: inline-block;
  position: relative;
  max-width: 133%;
  line-height: 1.15rem;
  pointer-events: none;
  transform-origin: left top;
  top: 1.05rem;
  transition:
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  color: currentColor;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
`

const notchBorder = css`
  box-sizing: border-box;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: inherit;
`

export const NotchedLeading = styled.div`
  ${notchBorder}
  display: flex;
  border-radius: 4px 0 0 4px;
  border-left: 1px solid;
  border-left-color: inherit;
  width: 12px;
`

export const NotchedTrailing = styled.div`
  ${notchBorder}
  border-radius: 0 4px 4px 0;
  border-right: 1px solid;
  border-right-color: inherit;
  pointer-events: none;
  flex-grow: 1;
`

export const Notch = styled.div`
  ${notchBorder}
  pointer-events: none;
`

export const Notched = styled.div<TextFieldStyledProps>`
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-color: inherit;

  ${({ $outlined }) =>
    !$outlined &&
    css`
      border-color: transparent;
    `}

  ${({ $hasLabel, $outlined }) =>
    $hasLabel &&
    css`
      ${Notch} {
        padding-left: ${$outlined ? 4 : 0}px;
      }
    `}

  ${({ $hasValue, $outlined }) =>
    $hasValue &&
    css`
      ${Notch} {
        padding-left: 4px;
        ${$outlined &&
        css`
          border-top: none;
        `}
      }
      ${Label} {
        transform: translateY(${$outlined ? '-1.5rem' : '-.6rem'}) scale(0.75);
      }
    `}
`

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  opacity: 0;
  background-color: var(--evg-text-field-color);
  transform-origin: center;
  transition:
    transform 100ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 100ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const HelperLine = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  bottom: 0;
  color: ${({ theme }) => resolveTheme(theme).onSurfaceVariant};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0333333333em;
  text-decoration: inherit;
  text-transform: inherit;
`

export const Input = styled.input<TextFieldStyledProps>`
  height: 56px;
  font-family: ${({ theme }) => resolveTheme(theme).fontFamily};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: inherit;
  text-transform: inherit;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border: none;
  background: none;
  color: ${({ theme }) => resolveTheme(theme).onSurface};
  appearance: none;
  caret-color: var(--evg-text-field-color);
  padding: ${({ $outlined }) =>
    $outlined ? '12px 16px 14px' : '20px 16px 6px'};

  &::placeholder {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  ${({ $hasLabel }) =>
    $hasLabel &&
    css`
      &::placeholder {
        opacity: 0;
      }
    `}

  &:focus {
    border: 0;
    outline: 0;
    &::placeholder {
      opacity: 1;
      color: ${({ theme }) => resolveTheme(theme).onSurfaceVariant};
    }
    & ~ ${Line} {
      opacity: 1;
      transform: scaleX(1);
    }
    & ~ ${Notched} ${Label} {
      color: var(--evg-text-field-color);
      transform: translateY(
          ${({ $outlined }) => ($outlined ? '-1.5rem' : '-.6rem')}
        )
        scale(0.75);
    }
    & ~ ${Notched} ${Notch} {
      padding-left: 4px;
    }
  }

  ${({ $outlined }) =>
    $outlined &&
    css`
      &:focus ~ ${Notched} {
        border-color: var(--evg-text-field-color);
        ${Notch} {
          border-top: none;
        }
        ${NotchedLeading}, ${Notch}, ${NotchedTrailing} {
          border-width: 2px;
        }
      }
    `}

  &[rows] {
    height: auto;
    resize: vertical;
    padding: 0 16px 16px;
    margin: 20px 1px 1px 0;
    line-height: 1.75rem;
  }
`

const icon = css`
  color: currentColor;
  position: absolute;
  top: 18px;
`

export const LeadingIcon = styled.span`
  ${icon}
  left: 16px;
  & ~ ${Input} {
    padding-left: 48px;
  }
  & ~ ${Notched} ${NotchedLeading} {
    min-width: 44px;
  }
`

export const TrailingIcon = styled.span`
  ${icon}
  right: 16px;
  & ~ ${Input} {
    padding-right: 48px;
  }
  & ~ ${Notched} ${NotchedTrailing} {
    min-width: 44px;
  }
`

export const Surface = styled.div<TextFieldStyledProps>`
  position: relative;
  min-height: 56px;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }) => resolveTheme(theme).onSurfaceVariant};

  ${({ $outlined }) =>
    $outlined
      ? css`
          background: none;
          border-color: ${({ theme }) => resolveTheme(theme).outline};
          &:hover {
            border-color: ${({ theme }) => resolveTheme(theme).onSurface};
          }
        `
      : css`
          background-color: ${({ theme }) =>
            resolveTheme(theme).surfaceContainer};
          border-bottom: 1px solid;
          overflow: hidden;
          border-radius: 4px 4px 0 0;
          &:focus-within {
            border-color: var(--evg-text-field-color);
          }
          &::before {
            content: '';
            position: absolute;
            opacity: 0;
            pointer-events: none;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background-color: ${({ theme }) => resolveTheme(theme).onSurface};
          }
          &:hover::before {
            opacity: 0.04;
          }
          &:focus-within::before {
            opacity: 0.12;
          }
        `}

  ${({ $round, $outlined }) =>
    $round &&
    ($outlined
      ? css`
          ${Input} {
            padding-left: 32px;
          }
          ${NotchedLeading} {
            border-radius: 28px 0 0 28px;
            width: 28px;
          }
          ${NotchedTrailing} {
            border-radius: 0 28px 28px 0;
          }
          ${Notch} {
            max-width: calc(100% - 88px);
          }
        `
      : css`
          border-radius: 16px 16px 0 0;
        `)}
`

export const Root = styled.div<TextFieldStyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
  --evg-text-field-color: ${({ theme, $color, $error }) =>
    $error
      ? resolveTheme(theme).error
      : $color === 'default'
        ? resolveTheme(theme).onSurface
        : getColor(theme, $color).Base()};

  ${({ $error }) =>
    $error &&
    css`
      ${Surface} {
        border-color: var(--evg-text-field-color);
      }
      ${HelperLine}, ${Label} {
        color: var(--evg-text-field-color);
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      ${Surface}, ${Input} {
        cursor: default;
        pointer-events: none;
        color: ${({ theme }) => resolveTheme(theme).disabledText};
      }
    `}
`
