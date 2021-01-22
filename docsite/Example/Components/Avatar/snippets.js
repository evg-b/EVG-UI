export default {
'AvatarBase' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarBase = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar src='/source/Avatar/1.jpg' />
            <Avatar />
        </div>
    )
}

export default withStyles(styles)(AvatarBase)`,'AvatarColor' : `import React from 'react';
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

`,'AvatarGroupAndSize' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar, AvatarGroup } from '@evg-b/evg-ui';

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
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <AvatarGroup size={25} max={3}>
                <Avatar src='/source/Avatar/3.jpg' />
                <Avatar src='/source/Avatar/12.jpg' />
                <Avatar src='/source/Avatar/10.jpg' />
                <Avatar src='/source/Avatar/4.jpg' />
                <Avatar src='/source/Avatar/9.jpg' />
            </AvatarGroup>
            <AvatarGroup max={3}>
                <Avatar src='/source/Avatar/3.jpg' />
                <Avatar src='/source/Avatar/12.jpg' />
                <Avatar src='/source/Avatar/10.jpg' />
                <Avatar src='/source/Avatar/4.jpg' />
                <Avatar src='/source/Avatar/9.jpg' />
            </AvatarGroup>
            <AvatarGroup size={55} max={3}>
                <Avatar src='/source/Avatar/3.jpg' />
                <Avatar src='/source/Avatar/12.jpg' />
                <Avatar src='/source/Avatar/10.jpg' />
                <Avatar src='/source/Avatar/4.jpg' />
                <Avatar src='/source/Avatar/9.jpg' />
            </AvatarGroup>
        </div>
    )
}

export default withStyles(styles)(AvatarGroupAndSize)`,'AvatarMultiple' : `import React from 'react';
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

export default withStyles(styles)(AvatarMultiple)`,'AvatarNotImage' : `import React from 'react';
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

`,'AvatarSize' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarSize = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar src='/source/Avatar/3.jpg' size={20} />
            <Avatar src='/source/Avatar/3.jpg' size={30} />
            <Avatar src='/source/Avatar/3.jpg' />
            <Avatar src='/source/Avatar/3.jpg' size={50} />
            <Avatar src='/source/Avatar/3.jpg' size={60} />
        </div>
    )
}

export default withStyles(styles)(AvatarSize)`,'AvatarStatus' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarStatus = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar src='/source/Avatar/7.jpg' />
            <Avatar src='/source/Avatar/4.jpg' status />
        </div>
    )
}

export default withStyles(styles)(AvatarStatus)`,'AvatarStatusColor' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}

const AvatarStatusColor = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Avatar src='/source/Avatar/1.jpg' status statusColor='default' />
            <Avatar src='/source/Avatar/1.jpg' status statusColor='primary' />
            <Avatar src='/source/Avatar/1.jpg' status statusColor='warn' />
            <Avatar src='/source/Avatar/1.jpg' status statusColor='success' />
            <Avatar src='/source/Avatar/1.jpg' status statusColor='fail' />
        </div>
    )
}

export default withStyles(styles)(AvatarStatusColor)`,
}