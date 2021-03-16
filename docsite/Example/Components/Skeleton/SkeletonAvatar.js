import React from 'react';
import { Skeleton, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const SkeletonAvatar = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Skeleton type='avatar' size={20} />
            <Skeleton type='avatar' />
            <Skeleton type='avatar' size={100} />
        </div>
    )
}

export default withStyles(styles)(SkeletonAvatar)