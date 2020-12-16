import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import './styles.css'
// import Cubes from '@evg-b/evg-ui'
import { Button, Cubes, Ripple } from '@evg-b/evg-ui'

const playShowDemo = (e) => {
  e.target.play()
}
const stopShowDemo = (e) => {
  console.log('stopShowDemo e:', e);
  e.target.pause()
  e.target.currentTime = 0
}
const showDemo = [
  { video: 'radio', size: 'small' },// radio
  { video: 'button2', size: 'middle' },// button
  { video: 'ripple', size: 'large' },// ripple
  { video: 'checkbox', size: 'small' },// checkbox
  { video: 'lightbox', size: 'large' },// Lithbox
  { video: 'switch', size: 'small' },// switch
  { video: 'badge', size: 'small' },// badge
  { video: 'textField', size: 'middle' },// textField
  { video: 'touchDriver', size: 'large' },// TouchDriver
  { video: 'loader', size: 'small' },// loader
  { video: 'icons', size: 'middle' },// icons
  { video: 'tooltip', size: 'small' },// tooltip
]
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description='Description will go into a meta tag in <head />'>

      <div className='section_titel'>
        <Cubes />
        <div className='box_center'>
          <h1 className='section_titel__titel'>{siteConfig.title}</h1>
          {/* <div className='section_titel__subtitle'>{siteConfig.tagline}</div> */}
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              style={{ position: 'relative' }}
              to={useBaseUrl('docs/')}>
              <Ripple />
              Начать
            </Link>
          </div>
        </div>
      </div>
      <main className='container'>
        <div className='content-box'>
          <h2>{siteConfig.tagline}</h2>
          <p className='billboard'>Вдохновленна интерсными техническими решениями Material Design, Material-UI, VK-UI, yandex-ui, Angular Material, Vue Material, Vuetify и др.</p>
          <div className='components_stand'>
            {
              showDemo.map((demo, index) => {
                return (
                  <div className={`component component-${demo.size}`}>
                    <video
                      className='show-video'
                      muted
                      onMouseOver={playShowDemo} onMouseOut={stopShowDemo}
                      src={useBaseUrl(`/showDemo/${demo.video}.mp4`)}
                    >
                    </video>
                  </div>
                )
              })
            }

            {/* <div className='component component-small'>radio</div>
            <div className='component component-middle'>
              <video
                className='show-video'
                muted
                onMouseOver={playShowDemo} onMouseOut={stopShowDemo}
                src={useBaseUrl('/showDemo/button2.mp4')}
              >
              </video>
            </div>
            <div className='component component-large'>ripple</div>
            <div className='component component-small'>checkbox</div>
            <div className='component component-large'>Lithbox</div>
            <div className='component component-small'>switch</div>
            <div className='component component-small'>badge</div>
            <div className='component component-middle'>textField</div>
            <div className='component component-large'>TouchDriver</div>
            <div className='component component-small'>loader</div>
            <div className='component component-middle'>icons</div>
            <div className='component component-small'>tooltip</div> */}
          </div>

        </div>
      </main>
    </Layout>
  );
}

export default Home;
