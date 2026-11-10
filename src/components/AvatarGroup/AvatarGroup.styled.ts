import styled from 'styled-components'

import { resolveTheme } from '../../theme/resolveTheme'

import type { AvatarGroupItemStyledProps } from './AvatarGroup.types'

export const Root = styled.div`
  display: inline-flex;
  align-items: center;
`

export const Avatar = styled.div<AvatarGroupItemStyledProps>`
  z-index: ${({ $order }) => $order};
  margin-right: -10px;
  border: 2px solid ${({ theme }) => resolveTheme(theme).surface};
`
