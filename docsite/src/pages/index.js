import React, { useRef, useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import classNames from 'classnames'
import { Image, Button, Cubes, Elevation, withStyles } from '@evg-b/evg-ui'
import SecretMessage from '../secretMessage'
SecretMessage()

const showComponents = [
  { src: 'docs/components/Button', name: 'Button' },
  { src: 'docs/components/Lightbox', name: 'Lightbox' },
  { src: 'docs/components/Skeleton', name: 'Skeleton' },
]
const showStyles = [
  { src: 'docs/styles/Palettes', name: 'Palettes' },
  { src: 'docs/styles/Theme', name: 'Theme' },
  { src: 'docs/components/Icon', name: 'Icons' },
]
const styles = {
  listComponents: {
    marginBottom: '50px'
  },
  titelList: {
    display: 'flex',
    margin: '15px',
  },
  list: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listItem: {
    ...Elevation(2),
    margin: '15px',
    borderRadius: '10%',
    overflow: 'hidden',
    '&:hover': {
      ...Elevation(4)
    }
  },
  moreBtn: {
    position: 'absolute',
    bottom: '-30px',
    right: '0px',
  },
  '@media (max-width: 720px)': {
    list: {
      flexDirection: 'column',
    },
  },
}
const Home = (props) => {
  const { classes } = props

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [cubesSpeed, setCubesSpeed] = useState(1)
  const Cubes_ref = useRef()

  useEffect(() => {
    let cubs = Cubes_ref.current
    setTimeout(() => {
      cubs.ripple(100, 18)
    }, 1000)
    // setTimeout(() => {
    //   setCubesSpeed(2)
    // }, 1000)
    // setTimeout(() => {
    //   setCubesSpeed(1)
    // }, 2000)
    setInterval(() => {
      cubs.ripple(150, 14)
    }, 18000);
  }, [])

  const listComponents = (titel, arr, more = '') => {
    return (
      <div className={classes.listComponents}>
        <h2 className={classes.titelList}>{titel}</h2>
        <div
          className={classes.list}
        >
          {
            arr.map((Component, index) => {
              return (
                <Link
                  key={index}
                  to={useBaseUrl(`${Component.src}`)}
                  className={classNames(classes.listItem, 'component')}
                  style={{ textDecoration: 'none' }}>
                  <Image className='show-video' src={useBaseUrl(`/preview/${Component.name}.png`)} />
                </Link>
              )
            })
          }
          {more && <Link to={useBaseUrl(`docs/components/all`)} className={classes.moreBtn} style={{ textDecoration: 'none' }}><Button>{'Больше >'}</Button></Link>}
        </div>
      </div>
    )
  }
  return (
    <Layout title={siteConfig.title}>
      <div className='section_titel'>
        <Cubes ref={Cubes_ref} speed={cubesSpeed} />
        <div className='box_center'>
          <img src={useBaseUrl(`/img/logo.svg`)} />
          <h1 className='section_titel__titel'>{siteConfig.title}</h1>
          <Link
            style={{ textDecoration: 'none' }}
            to={useBaseUrl('docs/GettingStarted/Installation')}>
            <Button variant='outlined' onMouseEnter={() => setCubesSpeed(3)} onMouseLeave={() => setCubesSpeed(1)} color='primary'>Начать</Button>
          </Link>
        </div>
      </div>
      <main className='container'>
        <div className='content-box'>
          <h2>{siteConfig.tagline}</h2>
          <p className='billboard'>Библиотека вдохновлена интересными техническими и дизайнерскими решениями Material Design.</p>
          {listComponents('Components', showComponents, 'more link')}
          {listComponents('Styles', showStyles)}
        </div>
      </main>
    </Layout>
  );
}

export default withStyles(styles)(Home);