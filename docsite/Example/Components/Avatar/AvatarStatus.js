import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarStatus = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar src='/source/Avatar/7.jpg' />
            <Avatar src='/source/Avatar/4.jpg' status />
        </div>
    )
}

export default withStyles(styles)(AvatarStatus)