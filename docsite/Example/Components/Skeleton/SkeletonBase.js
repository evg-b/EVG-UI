import React from 'react';
import { withStyles } from 'react-jss';
import { Skeleton } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const SkeletonBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Skeleton />
            <Skeleton width={160} />
            <Skeleton width={100} borderRadius={16} />
        </div>
    )
}

export default withStyles(styles)(SkeletonBase)