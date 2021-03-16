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
const SkeletonAnimation = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Skeleton animation={true} />
            <Skeleton animation={false} />
        </div>
    )
}

export default withStyles(styles)(SkeletonAnimation)