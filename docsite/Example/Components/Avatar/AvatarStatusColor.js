import React from 'react';
import { Avatar, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarStatusColor = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar src='/source/Avatar/1.jpg' status statusColor='default' />
            <Avatar src='/source/Avatar/1.jpg' status statusColor='primary' />
            <Avatar src='/source/Avatar/1.jpg' status statusColor='warn' />
            <Avatar src='/source/Avatar/1.jpg' status statusColor='success' />
            <Avatar src='/source/Avatar/1.jpg' status statusColor='fail' />
        </div>
    )
}

export default withStyles(styles)(AvatarStatusColor)