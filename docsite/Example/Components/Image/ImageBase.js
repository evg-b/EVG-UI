import React from 'react';
import { Image, withStyles } from '@evg-b/evg-ui';
import useBaseUrl from '@docusaurus/useBaseUrl';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    img: {
        margin: '5px',
        width: 200,
        height: 200,
        borderRadius: '6%',
        objectFit: 'cover'
    }
}

const ImageBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Image className={classes.img} src={useBaseUrl('/source/Image/1.jpg')} />
            <Image className={classes.img} src={useBaseUrl('/source/Image/2.jpg')} />
            <Image className={classes.img} src={useBaseUrl('/source/Image/3.jpg')} />
        </div>
    )
}

export default withStyles(styles)(ImageBase)