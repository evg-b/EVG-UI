import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarNotImage = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar alt='evg b' />
            <Avatar />
            <Avatar alt='Alira' />
        </div>
    )
}

export default withStyles(styles)(AvatarNotImage)

