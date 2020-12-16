import React from 'react';
import { withStyles } from 'react-jss';
import { Skeleton } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        '&>*': {
            margin: '5px'
        }
    }
}
const SkeletonText = (props) => {
    const { classes } = props
    const flexStyle = {
        display: 'flex',
        alignItems: 'center',
    }
    const variants = ['h1', 'h2', 'h3', 'text']
    return (
        <div className={classes.base}>
            {variants.map((variant, id) => (
                <div key={id} style={flexStyle}>
                    <Skeleton width={100} type={'text,' + variant} /><span style={{ marginLeft: '6px' }}>{variant}</span>
                </div>
            ))}
        </div>
    )
}

export default withStyles(styles)(SkeletonText)