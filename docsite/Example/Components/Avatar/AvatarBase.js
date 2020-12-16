import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarBase = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar src='/source/Avatar/1.jpg' />
            <Avatar />
        </div>
    )
}

export default withStyles(styles)(AvatarBase)