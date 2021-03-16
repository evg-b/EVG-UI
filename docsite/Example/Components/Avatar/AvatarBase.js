import React from 'react';
import { Avatar, withStyles } from '@evg-b/evg-ui';
import useBaseUrl from '@docusaurus/useBaseUrl';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarBase = (props) => {
    const { classes } = props

    return (
        <div className={classes.base}>
            <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} />
            <Avatar />
        </div>
    )
}

export default withStyles(styles)(AvatarBase)