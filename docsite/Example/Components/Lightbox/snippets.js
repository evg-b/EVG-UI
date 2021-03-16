export default {LightboxBase: `import React from 'react';
import { Lightbox, withStyles } from '@evg-b/evg-ui';
import useBaseUrl from '@docusaurus/useBaseUrl';
const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const LightboxBase = (props) => {
    const { classes } = props
    const imgs = [
        useBaseUrl('/source/Carousel/1.jpg'),
        useBaseUrl('/source/Carousel/2.jpg'),
        useBaseUrl('/source/Carousel/3.jpg'),
        useBaseUrl('/source/Carousel/4.jpg'),
        useBaseUrl('/source/Carousel/5.jpg'),
        useBaseUrl('/source/Carousel/6.jpg'),
        useBaseUrl('/source/Carousel/7.jpg'),
        useBaseUrl('/source/Carousel/8.jpg'),
        useBaseUrl('/source/Carousel/9.jpg'),
    ]
    return (
        <div className={classes.base}>
            <Lightbox imgs={imgs} />
        </div>
    )
}

export default withStyles(styles)(LightboxBase)`,
}