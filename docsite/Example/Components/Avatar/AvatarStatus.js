import React from 'react';
import { Avatar, withStyles } from '@evg-b/evg-ui';
import useBaseUrl from '@docusaurus/useBaseUrl';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarStatus = (props) => {
    const { classes } = props

    return (
        <div className={classes.base}>
            <Avatar src={useBaseUrl('/source/Avatar/7.jpg')} />
            <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} status />
        </div>
    )
}

export default withStyles(styles)(AvatarStatus)