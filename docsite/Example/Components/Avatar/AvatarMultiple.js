import React from 'react';
import { Avatar, withStyles } from '@evg-b/evg-ui';
import useBaseUrl from '@docusaurus/useBaseUrl';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: 10,
        }
    }
}

const AvatarMultiple = (props) => {
    const { classes } = props

    return (
        <div className={classes.base}>
            <Avatar size={55} srcs={[
                useBaseUrl('/source/Avatar/3.jpg'),
                useBaseUrl('/source/Avatar/12.jpg'),
                useBaseUrl('/source/Avatar/11.jpg'),
                useBaseUrl('/source/Avatar/10.jpg'),
            ]}
            />
            <Avatar size={55} srcs={[
                useBaseUrl('/source/Avatar/3.jpg'),
                useBaseUrl('/source/Avatar/12.jpg'),
                useBaseUrl('/source/Avatar/11.jpg'),
            ]}
            />
            <Avatar size={55} srcs={[
                useBaseUrl('/source/Avatar/3.jpg'),
                useBaseUrl('/source/Avatar/12.jpg'),
            ]}
            />
            <Avatar size={55} srcs={[
                useBaseUrl('/source/Avatar/3.jpg'),
            ]}
            />
        </div>
    )
}

export default withStyles(styles)(AvatarMultiple)