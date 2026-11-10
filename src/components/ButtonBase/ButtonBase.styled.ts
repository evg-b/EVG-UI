import styled from 'styled-components'

export const Root = styled.button`
  cursor: pointer;
  position: relative;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  outline: 0;
  overflow: hidden;
  text-decoration: none;
  user-select: none;
  appearance: none;
  tap-highlight-color: transparent;
  box-sizing: border-box;
  transition: background-color 200ms linear;
  &:disabled,
  &[disabled] {
    cursor: default;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.12);
    color: #b4b4b4;
  }
`
