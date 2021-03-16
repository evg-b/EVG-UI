import React from 'react';
import { Avatar, AvatarGroup, withStyles } from '@evg-b/evg-ui';
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

const AvatarGroupAndSize = (props) => {
    const { classes } = props

    return (
        <div className={classes.base}>
            <AvatarGroup size={25} max={3}>
                <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />
            </AvatarGroup>
            <AvatarGroup max={3}>
                <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />
            </AvatarGroup>
            <AvatarGroup size={55} max={3}>
                <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />
                <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />
            </AvatarGroup>
        </div>
    )
}

export default withStyles(styles)(AvatarGroupAndSize)