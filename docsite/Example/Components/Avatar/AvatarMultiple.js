import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

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
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar size={55} srcs={[
                '/source/Avatar/3.jpg',
                '/source/Avatar/12.jpg',
                '/source/Avatar/11.jpg',
                '/source/Avatar/10.jpg',
            ]}
            />
            <Avatar size={55} srcs={[
                '/source/Avatar/3.jpg',
                '/source/Avatar/12.jpg',
                '/source/Avatar/11.jpg',
            ]}
            />
            <Avatar size={55} srcs={[
                '/source/Avatar/3.jpg',
                '/source/Avatar/12.jpg',
            ]}
            />
            <Avatar size={55} srcs={[
                '/source/Avatar/3.jpg',
            ]}
            />
        </div>
    )
}

export default withStyles(styles)(AvatarMultiple)