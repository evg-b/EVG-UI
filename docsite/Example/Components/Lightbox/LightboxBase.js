import React from 'react';
import { Lightbox, withStyles } from '@evg-b/evg-ui';

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
        '/source/Carousel/1.jpg',
        '/source/Carousel/2.jpg',
        '/source/Carousel/3.jpg',
        '/source/Carousel/4.jpg',
        '/source/Carousel/5.jpg',
        '/source/Carousel/6.jpg',
        '/source/Carousel/7.jpg',
        '/source/Carousel/8.jpg',
        '/source/Carousel/9.jpg',
    ]
    return (
        <div className={classes.base}>
            <Lightbox imgs={imgs} />
        </div>
    )
}

export default withStyles(styles)(LightboxBase)