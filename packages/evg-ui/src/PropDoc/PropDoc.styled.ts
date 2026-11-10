import styled, { css } from 'styled-components'

import { resolveTheme } from '../theme/resolveTheme'

const TrStyles = css`
  border-top: 0;
  border-bottom: 1px solid ${(props) => resolveTheme(props.theme).outline};
`

export const PropertyRow = styled.tr`
  ${TrStyles}
  &>td {
    height: 52px;
    padding-right: 16px;
    padding-left: 16px;
    &:nth-child(1) {
      width: 15%;
    }
    &:nth-child(2) {
      max-width: 28%;
      color: ${(props) => resolveTheme(props.theme).primary};
      font-weight: 500;
    }
    &:nth-child(3) {
      width: 10%;
    }
    &:nth-child(4) {
    }
  }
`

export const Root = styled.div`
  background-color: ${(props) => resolveTheme(props.theme).surface};
  -webkit-overflow-scrolling: touch;
  display: inline-flex;
  width: 100%;
  color: ${(props) => resolveTheme(props.theme).onSurface};
`

export const Table = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  word-break: normal;
  text-align: left;
  & td,
  & th {
    border: 0;
  }
  & tr {
    background-color: ${(props) => resolveTheme(props.theme).surface};
  }
`

export const HeaderRow = styled.tr`
  ${TrStyles}
  color: ${(props) => resolveTheme(props.theme).primary};
  & > th {
    height: 56px;
    padding-right: 16px;
    padding-left: 16px;
  }
`
