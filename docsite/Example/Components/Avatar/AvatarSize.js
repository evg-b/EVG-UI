import React from 'react';
import { Avatar, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarSize = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar src='/source/Avatar/3.jpg' size={20} />
            <Avatar src='/source/Avatar/3.jpg' size={30} />
            <Avatar src='/source/Avatar/3.jpg' />
            <Avatar src='/source/Avatar/3.jpg' size={50} />
            <Avatar src='/source/Avatar/3.jpg' size={60} />
        </div>
    )
}

export default withStyles(styles)(AvatarSize)