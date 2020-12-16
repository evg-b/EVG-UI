export default {
'SkeletonAnimation' : `import React from 'react';
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
const SkeletonAnimation = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Skeleton animation={true} />
            <Skeleton animation={false} />
        </div>
    )
}

export default withStyles(styles)(SkeletonAnimation)`,'SkeletonAvatar' : `import React from 'react';
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

export default withStyles(styles)(SkeletonAvatar)`,'SkeletonBase' : `import React from 'react';
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

export default withStyles(styles)(SkeletonBase)`,'SkeletonText' : `import React from 'react';
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

export default withStyles(styles)(SkeletonText)`,
}