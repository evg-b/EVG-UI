import styled from 'styled-components'

import { Elevation } from '@evg-b/evg-ui'

export const Hero = styled.header`
  position: relative;
  width: 100%;
  height: 500px;
`

export const Intro = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
`

export const Name = styled.h1`
  margin-top: -20px;
  color: ${({ theme }) => theme.primary};
  font-size: 48px;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  text-align: center;
`

export const Section = styled.section`
  max-width: 100%;
  margin-bottom: 50px;
`

export const Title = styled.h2`
  display: flex;
  margin: 15px;
`

export const Previews = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const PreviewLink = styled.a`
  ${Elevation(2)}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.outline};
  border-radius: 10%;
  filter: brightness(80%) grayscale(100%);
  transition: filter 600ms linear;

  &:hover,
  &:focus-visible {
    ${Elevation(4)}
    filter: none;
  }
`

export const Preview = styled.img`
  width: 280px;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`

export const More = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0;
`
