import React, { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { Image, Elevation, Color, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    component: {
        cursor: 'pointer',
        width: '280px',
        margin: '20px',
        height: '200px',
        overflow: 'hidden',
        borderRadius: '6px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            ...Elevation(1),
        },
        '&:hover $title': {
            color: Color('primary').Base(),
            transition: 'color 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        }
    },
    preview: {
        height: '160px',
        objectFit: 'contain',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: 'var(--ifm-font-family-base)',
        fontWeight: 'var(--ifm-font-weight-semibold)',
        lineHeight: '20px',
        height: '40px',
        color: '#606770',
    }
}

const ComponentsArr = [
    { src: 'AppBar', name: 'AppBar' },
    { src: 'Avatar', name: 'Avatar' },
    { src: 'Badge', name: 'Badge' },
    { src: 'Button', name: 'Button' },
    { src: 'ButtonGroup', name: 'ButtonGroup' },
    { src: 'Ripple', name: 'Ripple' },
    { src: 'Cubes', name: 'Cubes' },
    { src: 'Carousel', name: 'Carousel' },
    { src: 'Image', name: 'Image' },
    { src: 'Lightbox', name: 'Lightbox' },
    { src: 'Checkbox', name: 'Checkbox' },
    { src: 'Icon', name: 'Icon' },
    { src: 'List', name: 'List' },
    { src: 'Loader', name: 'Loader' },
    { src: 'Modal', name: 'Modal' },
    { src: 'Popup', name: 'Popup' },
    { src: 'Radio', name: 'Radio' },
    { src: 'Scroll', name: 'Scroll' },
    { src: 'Skeleton', name: 'Skeleton' },
    { src: 'Select', name: 'Select' },
    { src: 'Switch', name: 'Switch' },
    { src: 'TextField', name: 'TextField' },
    { src: 'Tooltip', name: 'Tooltip' },
    { src: 'TouchDriver', name: 'TouchDriver' },
]

const All = (props) => {
    const { classes } = props

    useEffect(() => {
        let container = document.getElementById('__docusaurus')
        container.classList.add('all-components')
        container.style.setProperty('--ifm-container-width', `${100}%`)
        return () => {
            container.style.removeProperty('--ifm-container-width');
            container.classList.remove('all-components')
        }
    }, [])

    const Component = ({ src, name }, key) => {
        return (
            <Link
                key={key}
                className={classes.component}
                to={useBaseUrl(`docs/components/${src}`)}
                style={{ textDecoration: 'none' }}
            >
                <Image className={classes.preview} src={useBaseUrl(`/preview/${src}.png`)} />
                <div className={classes.title}>{name}</div>
            </Link>
        )
    }

    return (
        <div className={classes.base}>
            {
                ComponentsArr.map((comp, index) => Component(comp, index))
            }
        </div>
    )
}

export default withStyles(styles)(All)