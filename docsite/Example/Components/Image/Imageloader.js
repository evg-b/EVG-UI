import React, { useState } from 'react';
import { Image, Button, withStyles } from '@evg-b/evg-ui';
import useBaseUrl from '@docusaurus/useBaseUrl';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    img: {
        margin: '5px',
        width: 200,
        height: 200,
        borderRadius: '6%',
        objectFit: 'cover'
    }
}

const ImageLoader = (props) => {
    const { classes } = props
    const [hash, setHash] = useState('')
    const newHash = () => { setHash(Date.now()) }
    const url = useBaseUrl(`/source/Image/2.jpg?${hash}`)
    return (
        <div className={classes.base}>
            <Image className={classes.img} src={url} />
            <Button onClick={newHash}>reload</Button>
        </div>
    )
}

export default withStyles(styles)(ImageLoader)