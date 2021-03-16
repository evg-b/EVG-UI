export default {LoaderBase: `import React from 'react';
import { Loader } from '@evg-b/evg-ui';

const LoaderBase = () => {
    return <Loader color="primary" />
}

export default LoaderBase`,
LoaderColor: `import React from 'react';
import { Loader, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const LoaderColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Loader />
            <Loader color='primary' />
            <Loader color='warn' />
        </div>
    )
}

export default withStyles(styles)(LoaderColor)`,
LoaderDepth: `import React from 'react';
import { Loader, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const LoaderSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Loader depth={1} />
            <Loader />
            <Loader depth={8} />
        </div>
    )
}

export default withStyles(styles)(LoaderSize)`,
LoaderSize: `import React from 'react';
import { Loader, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const LoaderSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Loader size={30} />
            <Loader />
            <Loader size={60} />
        </div>
    )
}

export default withStyles(styles)(LoaderSize)`,
}