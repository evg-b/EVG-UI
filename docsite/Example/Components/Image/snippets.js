export default {ImageBase: `import React from 'react';
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

export default withStyles(styles)(ImageBase)`,
ImageBroken: `import React, { useState } from 'react';
import { Image, Button, withStyles } from '@evg-b/evg-ui';

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

const ImageBroken = (props) => {
    const { classes } = props
    const [hash, setHash] = useState('')
    const newHash = () => { setHash(Date.now()) }
    const url = \`/source/Image/2broke.jpg?\${hash}\`
    return (
        <div className={classes.base}>
            <Image className={classes.img} src={url} />
            <Button onClick={newHash}>reload</Button>
        </div>
    )
}

export default withStyles(styles)(ImageBroken)`,
Imageloader: `import React, { useState } from 'react';
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
    const url = useBaseUrl(\`/source/Image/2.jpg?\${hash}\`)
    return (
        <div className={classes.base}>
            <Image className={classes.img} src={url} />
            <Button onClick={newHash}>reload</Button>
        </div>
    )
}

export default withStyles(styles)(ImageLoader)`,
}