import React from 'react';
import { withStyles } from 'react-jss';
import { Carousel } from '@evg-b/evg-ui';

const styles = {
    base: {
        width: '600px',
        height: '400px',
        borderRadius: '6px',
        overflow: 'hidden',
    }
}
const CarouselBase = (props) => {
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
        '/source/Carousel/10.jpg',
    ]
    return (
        <div className={classes.base}>
            <Carousel
                imgs={imgs}
                backgroundColor='rgba(0,0,0,.85)'
            />
        </div>
    )
}

export default withStyles(styles)(CarouselBase)