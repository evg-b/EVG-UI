import { useEffect, useRef, useState } from 'react'

import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { Button, Cubes, Image } from '@evg-b/evg-ui'

import DocLink from '../components/DocLink'
import SecretMessage from '../secretMessage'

import * as Styled from './_Home.styled'

SecretMessage()

const sections = [
  {
    title: 'Компоненты',
    previews: [
      { path: 'Components/Button', image: 'Button' },
      { path: 'Components/Lightbox', image: 'Lightbox' },
      { path: 'Components/Skeleton', image: 'Skeleton' },
      { path: 'Components/Icon', image: 'Icons' }
    ],
    more: '/docs/Components/All'
  },
  {
    title: 'Стили',
    previews: [
      { path: 'Styles/Palettes', image: 'Palettes' },
      { path: 'Styles/Theme', image: 'Theme' }
    ]
  }
]

const Home = () => {
  const { siteConfig } = useDocusaurusContext()
  const { withBaseUrl } = useBaseUrlUtils()
  const [cubesSpeed, setCubesSpeed] = useState(1)
  const cubesRef = useRef<InstanceType<typeof Cubes>>(null)

  useEffect(() => {
    const first = setTimeout(() => cubesRef.current?.ripple(100, 18), 1000)
    const repeat = setInterval(() => cubesRef.current?.ripple(150, 14), 18000)
    return () => {
      clearTimeout(first)
      clearInterval(repeat)
    }
  }, [])

  return (
    <Layout title={siteConfig.title}>
      <Styled.Hero>
        <Cubes ref={cubesRef} speed={cubesSpeed} />
        <Styled.Intro>
          <img src={withBaseUrl('/img/logo.svg')} alt="" />
          <Styled.Name>{siteConfig.title}</Styled.Name>
          <Button
            href={withBaseUrl('/docs/GettingStarted/quick_start')}
            variant="outlined"
            color="primary"
            onMouseEnter={() => setCubesSpeed(3)}
            onMouseLeave={() => setCubesSpeed(1)}>
            Быстрый старт
          </Button>
        </Styled.Intro>
      </Styled.Hero>
      <Styled.Content className="container">
        <h2>{siteConfig.tagline}</h2>
        {sections.map(({ title, previews, more }) => (
          <Styled.Section key={title}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Previews>
              {previews.map(({ path, image }) => (
                <Styled.PreviewLink
                  as={DocLink}
                  key={path}
                  to={`/docs/${path}`}
                  aria-label={image}>
                  <Styled.Preview
                    as={Image}
                    alt=""
                    src={withBaseUrl(`/preview/${image}.png`)}
                  />
                </Styled.PreviewLink>
              ))}
              {more && (
                <Styled.More>
                  <Button href={withBaseUrl(more)}>Все компоненты</Button>
                </Styled.More>
              )}
            </Styled.Previews>
          </Styled.Section>
        ))}
      </Styled.Content>
    </Layout>
  )
}

Home.displayName = 'Home'

export default Home
