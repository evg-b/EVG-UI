import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarColor = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar alt='evg b' />
            <Avatar alt='Alira' color='--ifm-color-primary' />
            <Avatar alt='Rick' color='success' />
        </div>
    )
}

export default withStyles(styles)(AvatarColor)

