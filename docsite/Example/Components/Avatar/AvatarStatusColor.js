import React from 'react';
import { Avatar, withStyles } from '@evg-b/evg-ui';
import useBaseUrl from '@docusaurus/useBaseUrl';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarStatusColor = (props) => {
    const { classes } = props

    return (
        <div className={classes.base}>
            <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} status statusColor='default' />
            <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} status statusColor='primary' />
            <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} status statusColor='warn' />
            <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} status statusColor='success' />
            <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} status statusColor='fail' />
        </div>
    )
}

export default withStyles(styles)(AvatarStatusColor)