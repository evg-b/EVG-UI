import { useEffect } from 'react'

import Link from '@docusaurus/Link'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import { Icon, Image } from '@evg-b/evg-ui'

import * as Styled from './All.styled'

const components = [
  'AppBar',
  'Avatar',
  'Badge',
  'Button',
  'ButtonGroup',
  'Ripple',
  'Cubes',
  'Carousel',
  'Image',
  'Lightbox',
  'Checkbox',
  'Icon',
  'List',
  'Loader',
  'Menu',
  'Modal',
  'Popup',
  'Radio',
  'Scroll',
  'Skeleton',
  'Select',
  'Switch',
  'TextField',
  'Tooltip',
  'TouchDriver'
]

const All = () => {
  const { withBaseUrl } = useBaseUrlUtils()

  useEffect(() => {
    const container = document.getElementById('__docusaurus')
    if (!container) return
    container.classList.add('all-components')
    container.style.setProperty('--ifm-container-width', '100%')
    return () => {
      container.style.removeProperty('--ifm-container-width')
      container.classList.remove('all-components')
    }
  }, [])

  return (
    <Styled.Grid>
      {components.map((name) => (
        <Styled.Card as={Link} key={name} to={`/docs/Components/${name}`}>
          {name === 'Menu' ? (
            <Styled.MenuPreview>
              <Icon name="Menu" size={48} color="primary" />
            </Styled.MenuPreview>
          ) : (
            <Styled.Preview as={Image} src={withBaseUrl(`/preview/${name}.png`)} />
          )}
          <Styled.Title>{name}</Styled.Title>
        </Styled.Card>
      ))}
    </Styled.Grid>
  )
}

All.displayName = 'All'

export default All
