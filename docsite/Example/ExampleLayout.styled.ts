import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Row = styled(Wrap)`
  & > * {
    margin: 5px;
  }
`

export const SpaciousRow = styled(Wrap)`
  & > * {
    margin: 10px;
  }
`

export const InlineGroup = styled.div`
  & > * {
    margin: 5px;
  }
`

export const Column = styled(InlineGroup)`
  display: flex;
  flex-direction: column;
`

export const CenteredColumn = styled(Column)`
  align-items: center;
`

export const AppBarColumn = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
`

export const FieldGroups = styled(Wrap)`
  & > *,
  & > div > * {
    margin: 10px;
  }
`
